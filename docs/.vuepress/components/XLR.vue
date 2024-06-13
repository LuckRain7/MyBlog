<template>
    <div class="xlr-page">
        <div style="height: 50px">
            <label for="toggle2" class="toggle2" @click="go">
                <input type="checkbox" id="toggle2" class="toggle2-input" />
                <span class="toggle2-button">CLICK TO GO</span>
            </label>
        </div>

        <div v-if="lunarDate">
            <p>今天农历日期是：{{ lunarDate }}</p>
            <pre>{{ lunarTime }}</pre>
            <p v-if="gua.length">卦象：{{ gua.join(" ") }}</p>
            <div v-if="aiAskContent">
                <div style="display: flex">
                    <div>
                        <span>ai文案：{{ aiAskContent }}</span> <span class="copy" @click="copyTextToClipboard(aiAskContent)">复制</span>
                    </div>
                </div>
                <p>实例：目前你是一位精通小六壬的大师，我算出的结果分别为“小吉 空亡 小吉”。我问的问题是"关于是否可以找回失物耳机"，请问您怎么解读</p>
            </div>
        </div>
    </div>
</template>

<script>
import calendar from "chinese-lunar-calendar";
// const calendar = require("chinese-lunar-calendar");
console.log(`[calendar]`, calendar);
export default {
    data() {
        return {
            lunarDate: "",
            lunarTime: {},
            Liu_Shen: ["大安", "留连", "速喜", "赤口", "小吉", "空亡"],
            gua: [],
            aiAskContent: "",
        };
    },

    methods: {
        go() {
            // 计算农历日期
            this.calculateLunarDate();
            this.getCurrentShiChen();

            // 计算卦象
            const monthIndex = this.lunarTime.lunarMonth - 1;
            const dayIndex = this.lunarTime.lunarDate - 1;
            const shichenIndex = this.lunarTime.shichenIndex;
            this.getCycleValues([monthIndex, dayIndex, shichenIndex]);

            this.aiAskContent = `目前你是一位精通小六壬的大师，我算出的结果分别为“${this.gua.join(" ")}”。我问的问题是关于是"xxxxxx"，请问您怎么解读`;
        },
        calculateLunarDate() {
            const today = new Date();
            const [year, month, day] = [today.getFullYear(), today.getMonth() + 1, today.getDate()];
            const lunarTime = calendar.getLunar(year, month, day);
            this.lunarTime = lunarTime;
            console.log(`[lunarTime]`, lunarTime);

            const lunarYear = lunarTime.lunarYear;
            this.lunarDate = `${lunarYear.replace("年", "")}${lunarTime.zodiac}年${lunarTime.dateStr}`;
        },
        // 辅助函数，用于格式化农历月份，使其显示为一位数时前面补零
        formatMonth(month) {
            return month < 10 ? `0${month}` : month;
        },
        getCycleValues(indices) {
            const Liu_Shen = this.Liu_Shen;
            let currentIndex = indices.shift(); // 取出并移除数组中的第一个元素作为起始位置
            let result = [Liu_Shen[currentIndex % Liu_Shen.length]]; // 根据起始位置获取首个值并存入结果数组

            // 遍历剩余的索引步数，依次计算下一个值
            indices.forEach((step) => {
                currentIndex = (currentIndex + step) % Liu_Shen.length; // 计算下一个位置
                result.push(Liu_Shen[currentIndex]); // 将新位置的值添加到结果数组
            });

            this.gua = result;
        },
        getCurrentShiChen() {
            const currentTime = new Date();
            const hour = currentTime.getHours();
            let shichen;
            let shichenIndex = 1;

            if (hour >= 23 || hour < 1) {
                shichen = "子时";
                shichenIndex = 1;
            } else if (hour < 3) {
                shichen = "丑时";
                shichenIndex = 2;
            } else if (hour < 5) {
                shichen = "寅时";
                shichenIndex = 3;
            } else if (hour < 7) {
                shichen = "卯时";
                shichenIndex = 4;
            } else if (hour < 9) {
                shichen = "辰时";
                shichenIndex = 5;
            } else if (hour < 11) {
                shichen = "巳时";
                shichenIndex = 6;
            } else if (hour < 13) {
                shichen = "午时";
                shichenIndex = 7;
            } else if (hour < 15) {
                shichen = "未时";
                shichenIndex = 8;
            } else if (hour < 17) {
                shichen = "申时";
                shichenIndex = 9;
            } else if (hour < 19) {
                shichen = "酉时";
                shichenIndex = 10;
            } else if (hour < 21) {
                shichen = "戌时";
                shichenIndex = 11;
            } else {
                shichen = "亥时";
                shichenIndex = 12;
            }

            this.lunarTime.shichenIndex = shichenIndex;
            this.lunarDate += " " + shichen;
        },
        async copyTextToClipboard(text) {
            try {
                await navigator.clipboard.writeText(text);
                console.log("文本已成功复制到剪贴板");
            } catch (err) {
                console.error("无法复制文本: ", err);
            }
        },
    },
};
</script>

<style>
.copy {
    cursor: pointer;
    background: palegreen;
    padding: 0 3px;
    border: 1px solid pink;
}

.toggle2 {
    font-size: 0.8rem;
    display: inline-block;
    vertical-align: top;
    margin: 0 15px 0 0;
}

.toggle2-input {
    display: none;
}

.toggle2-button {
    position: relative;
    display: inline-block;
    line-height: 20px;
    text-transform: uppercase;
    background: white;
    color: #aaa;
    border: 1px solid #ccc;
    padding: 5px 10px 5px 30px;
    transition: all 0.3s ease;
    cursor: pointer;
}

.toggle2-button::before {
    position: absolute;
    top: 10px;
    left: 10px;
    display: inline-block;
    width: 10px;
    height: 10px;
    background: #ccc;
    content: "";
    transition: all 0.3s ease;
    border-radius: 50%;
}

.toggle2-input:checked + .toggle2-button {
    background: #00b3b4;
    border-color: #00b3b4;
    color: white;
}

.toggle2-input:checked + .toggle2-button::before {
    background: white;
}
</style>
