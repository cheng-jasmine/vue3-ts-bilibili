<template>
    <div>
        <header class="header">header
            <slot name="header"></slot>
        </header>
        <main class="main">
            main1
            <div v-for="(item, index) in data" :key="index">
                <slot :data="item" :index="index"></slot>
            </div>
        </main>
        <footer class="footer">footer
            <slot name="footer"></slot>
        </footer>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
type names = {
    name: string,
    age: number
}
const data = reactive<names[]>([
    {
        name: "小明",
        age: 18
    },
    {
        name: "小蓝",
        age: 16
    }
])
</script>

<style scoped lang="less">
.header {
    height: 200px;
    background-color: red;
}

.main {
    height: 220px;
    background-color: skyblue;
}

.footer {
    height: 200px;
    background-color: blue;
}
</style>