<template>
    <div class="A">
        <h1>A</h1>
        <button @click="emit">emit</button>
    </div>
</template>

<script setup lang="ts">
import { getCurrentInstance } from 'vue';

const instance = getCurrentInstance()
const emit = () => {
    instance?.proxy?.$Bus.emit('onclick', 'mitt')
}

</script>

<style lang="less" scoped>
.A{
    width: 100px;
    height: 100px;
    border: 1px solid #ccc;
}
</style>