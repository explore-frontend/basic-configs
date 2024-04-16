<script setup lang="ts">
import { useRouter } from 'vue-router';

const props = defineProps<{
    name: string;
}>();

const router = useRouter();
</script>

<template>
    <div>
        <p>你好, {{ props.name }}</p>
        <p class="text-sm opacity-50">
            <em>动态路由演示</em>
        </p>

        <div>
            <button class="btn m-3 text-sm mt-8" @click="router.back()">返回</button>
        </div>
    </div>
</template>
