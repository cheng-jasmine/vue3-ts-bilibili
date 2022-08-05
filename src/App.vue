<template>
  <div v-move class="box">
    <div class="header">头部</div>
    <div>内容</div>
  </div>
</template>

<script setup lang="ts">

import { Directive, ref, DirectiveBinding } from "vue";

const vMove: Directive<any, void> = (el: HTMLElement, bingding: DirectiveBinding) => {
  let moveElement: HTMLDivElement = el.firstElementChild as HTMLDivElement
  const mouseDown = (e: MouseEvent) => {
    // 存储鼠标点下的那一点的位置
    let X = e.clientX - el.offsetLeft
    let Y = e.clientY - el.offsetTop
    const move = (e: MouseEvent) => {
      console.log(e)
      el.style.left = e.clientX - X + 'px'
      el.style.top = e.clientY - Y + 'px'
    }
    document.addEventListener('mousemove', move)
    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', move)
    })
  }
  moveElement.addEventListener('mousedown', mouseDown)
}


</script>

<style scoped lang="less">
.box {
  border: 1px solid #ccc;
  width: 300px;
  height: 200px;
  position: absolute;
  left: calc(50% - 150px);
  top: calc(50% - 100px);

  .header {
    background-color: #ccc;
    color: #fff;
    text-align: center;
    line-height: 40px;
  }
}
</style>
