const fs = require("fs");
const glob = require("glob");
const sharp = require("sharp");

async function findAssetsFolder() {
    const assetsFolders = await glob("docs/.vuepress/public/*.assets/", { ignore: ["node_modules/**"] });
    return assetsFolders;
}

/**
 * @description: 根据路径查找文件夹下的文件
 * @param {string} path 路径
 * @return {array}
 */
async function findFiles(path) {
    const files = await glob(path + "**/*", { ignore: ["node_modules/**"] });
    return files;
}

async function findFile(path) {
    const files = await glob(path, { ignore: ["node_modules/**"] });
    return files;
}

// 判断文件是否是 webp 格式
function isWebp(filePath) {
    return filePath.endsWith(".webp");
}

function minitImage(filePath) {
    return new Promise((resolve, reject) => {
        sharp(filePath)
            .webp({ quality: 40 })
            .toFile(filePath + ".webp")
            .then((data) => {
                resolve({
                    ...data,
                    success: true,
                    sourcePath: filePath,
                    afterPath: filePath + ".webp",
                });
            })
            .catch((err) => {
                reject({ success: false, ...err });
            });
    });
}

// 读取指定文件内容
function readFile(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, "utf8", (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

function writeFile(filePath, content) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, content, "utf8", (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
}

function deleteFile(filePath) {
    return new Promise((resolve, reject) => {
        fs.unlink(filePath, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
}

module.exports = {
    findAssetsFolder,
    findFiles,
    findFile,
    isWebp,
    minitImage,
    readFile,
    writeFile,
    deleteFile,
};
