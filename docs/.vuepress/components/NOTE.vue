<template>
    <div>
        <h2>文本存储示例</h2>
        <input v-model="text" type="text" placeholder="请输入内容" />
        <button @click="saveText">确定</button>
        <div v-if="history.length">
            <h3>历史记录</h3>
            <ul>
                <li v-for="(item, index) in history" :key="index">{{ item }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            text: "",
            history: [],
        };
    },
    created() {
        // 从 localStorage 中加载历史记录
        if (typeof window === "undefined") return;
        const storedHistory = window.localStorage.getItem("history");
        if (storedHistory) {
            this.history = JSON.parse(storedHistory);
        }
    },
    methods: {
        saveText() {
            if (this.text.trim()) {
                // 将当前输入的文本添加到历史记录中
                this.history.push(this.text);
                // 将历史记录保存到 localStorage
                window.localStorage.setItem("history", JSON.stringify(this.history));
                // 清空输入框
                this.text = "";
            }
        },
    },
};
</script>

<style scoped>
/* 组件样式 */
input {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
}

button {
    padding: 8px 16px;
    background-color: #4caf50;
    color: white;
    border: none;
    cursor: pointer;
}

button:hover {
    background-color: #45a049;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    padding: 8px;
    border: 1px solid #ddd;
    margin-bottom: 5px;
}
</style>
