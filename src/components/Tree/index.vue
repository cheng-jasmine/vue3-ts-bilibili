<template>
    <div style="margin-left:10px">
        <div @click.stop="clickItem(item)" v-for="(item, index) in data" :key="index">
            {{ item.name }}
            <TreeItem @on-click="clickItem" v-if="item?.children?.length" :data="item.children"></TreeItem>
        </div>
    </div>
</template>

<script lang="ts" setup>
import TreeItem from './index.vue'
type TreeList = {
    name: string,
    icon?: string,
    children?: TreeList[] | []
}
type Props = {
    data?: TreeList[]
}
defineProps<Props>()

const emit = defineEmits(['on-click'])
const clickItem = (item: TreeList) => {
    emit('on-click', item)
}

</script>

<script lang="ts">
export default {
    name: "TreeItem"
}
</script>

<style>
</style>