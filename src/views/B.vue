<template>
    <div>
        <h1>B</h1>
    </div>
</template>

<script setup lang="ts">
import { getCurrentInstance } from 'vue';
const instance = getCurrentInstance()

const Bus = (str: any) => {
    console.log(str, '-----------str');

}
instance?.proxy?.$Bus.on('onclick', Bus)

// instance?.proxy?.$Bus.off('onclick', Bus) // 关闭监听

</script>

<style lang="less" scoped>
</style>