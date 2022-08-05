<template>
  <!-- <input id="ipt" v-model="message" type="text">
  <button @click="stopWatch">停止监听</button> -->

  <!-- <Layout></Layout> -->

  <div>
    <!-- <button @click="flag = !flag">切换</button> -->
    <input v-model="value" type="text" />
    <A v-move:aaa.bbb="{ background: value }"></A>
    <B></B>
  </div>
</template>

<script setup lang="ts">
import Layout from "./views/layout/index.vue"

import A from './views/A.vue'
import B from './views/B.vue'

import { Directive, ref, DirectiveBinding } from "vue";
let flag = ref<boolean>(true)

let value = ref<string>('')

type Dir = {
  background: string
}

const vMove: Directive = (el: HTMLElement, bingding: DirectiveBinding<Dir>) => {
  el.style.background = bingding.value.background
}

// const vMove: Directive = {
//   created() {
//     console.log("=====created");
//   },
//   beforeMount() {
//     console.log("=====beforeMount");
//   },
//   mounted(el: HTMLElement, dir: DirectiveBinding<Dir>) {
//     console.log("=====mounted");
//     el.style.background = dir.value.background
//   },
//   beforeUpdate() {
//     console.log("=====beforeUpdate");
//   },
//   updated() {
//     console.log("=====updated");
//   },
//   beforeUnmount() {
//     console.log("=====beforeUnmount");
//   },
//   unmounted() {
//     console.log("=====unmounted");
//   }
// }
</script>


