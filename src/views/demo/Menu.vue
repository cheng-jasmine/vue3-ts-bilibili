<template>
    <div class="menu">
        <div>{{ title }}</div>
        <div v-for="item in list" :key="item">{{ item }}</div>

        <div>
            <button @click="changeTap">派发</button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue"
type Props = {
    title?: string,
    list?: string[]
}

withDefaults(defineProps<Props>(), {
    title: "设置一个默认值",
    list: () => ["1", "2", "3"]
})

const data = reactive<number[]>([1, 2, 3])
const emit = defineEmits(['on-click'])
// const emit1 = defineEmits<{(e:'on-click',value:Array<number>):void}>()
const changeTap = () => {
    emit('on-click', data)
}

const flag = ref<boolean>(true)
// defineExpose 将子组件的数据暴露给父组件使用
defineExpose({
    data,
    flag
})
</script>

<style lang="less" scoped>
.menu {
    width: 200px;
    border: 1px solid #ccc;
}
</style>