<template>
    <div class="content">
        <!-- <div class="content-items" v-for="item in 100" :key="item">
            <Card :content="`我是第${item}个`"></Card>
        </div> -->

        <div class="tab">
            <div @click="switchItem(item)" v-for="item in data" :key="item.name"
                :class="item.comName === current.comName ? 'active' : ''">{{ item.name }}</div>
        </div>
        <component :is="current.comName"></component>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref, markRaw, toRaw } from 'vue';
import A from './A.vue'
import B from './B.vue'
import C from './C.vue'

type Tabs = {
    name: string,
    comName: any
}
type Com = Pick<Tabs, 'comName'>

const data = reactive<Tabs[]>([
    {
        name: "A组件",
        comName: markRaw(A)
    },
    {
        name: "B组件",
        comName: markRaw(B)
    },
    {
        name: "C组件",
        comName: markRaw(C)
    }
])
console.log(data[0])
let current = reactive<Com>({
    comName: data[0].comName
})

const switchItem = (item: Tabs) => {
    current.comName = item.comName
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