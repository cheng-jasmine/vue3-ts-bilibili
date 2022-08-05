<template>
    <div class="content">
        <Suspense>
            <template #default>
                <A></A>
            </template>
            <template #fallback>
                <!-- 加载中的效果 -->
                <div>loading</div>
            </template>
        </Suspense>

    </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';
// import A from "@/components/A/index.vue"
const A = defineAsyncComponent(() => import('@/components/A/index.vue'))

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