<template>
    <div class="menu">
        θεεΊε
        <Tree @on-click="getItem" :data="data"></Tree>
    </div>
</template>

<script lang="ts" setup>
import Tree from "../../../components/Tree/index.vue"
import { reactive } from 'vue'

type TreeList = {
    name: string,
    icon?: string,
    children?: TreeList[] | []
}

const getItem = (item: TreeList) => {
    console.log(item, "getItem")
}

const data = reactive<TreeList[]>([
    {
        name: "no.1",
        children: [
            {
                name: "no.1-1",
                children: [
                    {
                        name: "no.1-1-1",
                    }
                ]
            }
        ]
    },
    {
        name: "no.2",
        children: [
            {
                name: "no.2-1",
            }
        ]
    },
    {
        name: "no.3",
    },
])

</script>

<style lang="less" scoped>
.menu {
    width: 200px;
    border: 1px solid #ccc;
}
</style>