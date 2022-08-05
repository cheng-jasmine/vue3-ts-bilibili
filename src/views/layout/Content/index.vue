<template>
    <div class="content">
        <button @click="flag = !flag">switch</button>
        <Transition @before-enter="EnterFrom" @enter="EnterActive" @after-enter="EnterTo" @enter-cancelled="EnterCancel"
            @leave="Leave" @after-leave="LeaveTo" @leave-cancelled="LeaveCancel">
            <div v-if="flag" style="width:100px;height:100px;background:red"></div>
        </Transition>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const flag = ref<boolean>(true)

const EnterFrom = (el: Element) => {
    console.log("EnterFrom")
}
const EnterActive = (el: Element, done: Function) => {
    console.log("过渡曲线")
    setTimeout(() => {
        done()
    }, 3000);
}
const EnterTo = (el: Element) => {
    console.log("过渡完成")
}
const EnterCancel = (el: Element) => {
    console.log("过渡效果被打断")
}

const Leave = (el: Element, done: Function) => {
    console.log("离开过渡曲线")
    setTimeout(() => {
        done()
    }, 5000);
}
const LeaveTo = () => {
    console.log("离开完成")
}
const LeaveCancel = () => {
    console.log("离开过渡曲线被打断")
}

</script>

<style lang="less" scoped>
.content {
    flex: 1;
    margin: 20px;
    overflow: auto;
    border: 1px solid #ccc;

    &-items {
        padding: 20px;
        border-bottom: 1px solid #ccc;
    }
}

.tab {
    display: flex;

    .active {
        background: skyblue;
        color: #fff;
    }

    div {
        border: 1px solid #ccc;
        margin: 10px;
        padding: 10px;
    }
}
</style>