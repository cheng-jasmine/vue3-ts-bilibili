<template>
  <!-- <input id="ipt" v-model="message" type="text">
  <button @click="stopWatch">停止监听</button> -->

  <div class="layout">
    <Menus ref="menus" title="这是一段文字" :list="list" @on-click="getData"></Menus>
    <div class="layout-right">
      <Header></Header>
      <Content></Content>
    </div>
  </div>
</template>

<script setup lang="ts">
import Menus from "./views/Menus.vue"
import Header from "./views/Header.vue"
import Content from "./views/Content.vue"

import { reactive, ref, watchEffect } from 'vue'
const list = reactive<string[]>(["菜单1", "菜单2", "菜单3"])

const menus = ref(null)  // 与Menus组件的ref名称一致
const getData = (data: number[]) => {
  // console.log(data, "getdata")
  console.log(menus.value)
}

// const msg = shallowRef({
//   name: 'chengli',
//   age: 18
// })
// const refvalue = ref("hello")
// const changeBtn = () => {
//   // refvalue.value = "world" //语法bug
//   msg.value.name = 'cli'
//   console.log(msg)
// }

// const message = ref<string>("飞机")
// const stop = watchEffect((oninvalidate) => {
//   oninvalidate(() => {
//     console.log("在执行监听代码前执行")
//   })
//   const ipt: HTMLInputElement = document.querySelector('#ipt') as HTMLInputElement
//   console.log(message.value)
//   console.log(ipt)
// }, {
//   flush: 'post',
//   onTrigger() {
//     // debugger // 调试
//   }
// })
// const stopWatch = () => stop()
</script>

<style lang="less" scoped>
.layout {
  display: flex;
  height: 100%;

  &-right {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
}
</style>
