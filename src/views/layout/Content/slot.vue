<template>
    <div class="content">
        <Dialog>
            <template v-slot:header>
                <div>header header</div>
            </template>
            <template v-slot="{data,index}">
                <div>{{data.name}}:{{data.age}}---{{index}}</div>
            </template>
            <template #footer>
                <div>footer footer</div>
            </template>
        </Dialog>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref, markRaw, toRaw } from 'vue';
import Dialog from '@/components/Dialog/index.vue'
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