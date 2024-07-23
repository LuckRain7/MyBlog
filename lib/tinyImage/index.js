const Tools = require("./tools");
const path = require("path");

async function tiny() {
    console.clear();

    const assetsFolders = await Tools.findAssetsFolder();
    console.log("assetsFolders=", assetsFolders);

    for (const assetsFolder of assetsFolders) {
        const FixMap = {};
        let isNeedToFixImagePath = false;
        const files = await Tools.findFiles(assetsFolder);
        console.log("files=", files);

        // 判断files是否都是 .webp 结尾
        for (const file of files) {
            const isWebp = await Tools.isWebp(file);
            if (!isWebp) {
                isNeedToFixImagePath = true;

                // 对图片进行压缩，并生成 .webp 格式的新图片
                const res = await Tools.minitImage(file);
                if (!res.success) return;
                FixMap[res.sourcePath] = res.afterPath;
                console.log("[mini]", file, JSON.stringify(res));

                // 删除原来的图片
                await Tools.deleteFile(file);
            }
        }

        // 按照对应的规则，找对文件，修改内部图片引用路径
        if (isNeedToFixImagePath) {
            const regex = /[^/]+(?=\.(assets))/;
            const mdFileName = assetsFolder.match(regex)[0];
            const [mdFilePath] = await Tools.findFile(`**/${mdFileName}.md`);
            console.log(`[markdown path]`, mdFilePath);

            const content = await Tools.readFile(mdFilePath);
            let newContent = content;

            for (const source in FixMap) {
                const after = FixMap[source];
                console.log(`[fix]`, path.basename(source), "=>", path.basename(after));
                newContent = newContent.replaceAll(path.basename(source), path.basename(after));
            }

            // 讲内容写进去
            await Tools.writeFile(mdFilePath, newContent);
        }
    }
}

tiny();
