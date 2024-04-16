<script setup lang="ts">
import { NInput, NButton, NTabPane, NTabs } from 'naive-ui';
import { onMounted, ref } from 'vue';
import { useRouter, RouterLink } from 'vue-router';

import { landPageControllerQueryLandPage } from '@/gen/open-api-docs/Haoda/client/promise-api-axios';

const name = ref('');

const router = useRouter();
const go = () => {
    if (name.value !== '') {
        router.push(`/hi/${encodeURIComponent(name.value)}`);
    }
};
const activeName = ref('first');

onMounted(async () => {
    try {
        const res = await landPageControllerQueryLandPage({ params: {} });
        // TODO 验证一下 zod 检查结果
        console.log(res.data);
    } catch (e) {
        console.error(e);
    }
});
</script>

<template>
    <div>
        <p>
            <a rel="noreferrer" href="https://github.com/antfu/vitesse" target="_blank"> Vitesse </a>
        </p>
        <p>
            <em class="text-sm opacity-75">项目模板</em>
        </p>

        <div class="py-4" />

        <NButton>This is a button</NButton>
        <RouterLink to="counter">counter demo</RouterLink>

        <input v-model="name" type="text" />

        <NInput v-model:value="name" placeholder="输入你的名字" type="text" style="width: 250px" @keydown.enter="go" />

        <NTabs v-model:value="activeName">
            <NTabPane tab="用户管理" name="first">用户管理</NTabPane>
            <NTabPane tab="配置管理" name="second">配置管理</NTabPane>
            <NTabPane tab="角色管理" name="third" :disabled="true">角色管理</NTabPane>
            <NTabPane tab="定时任务补偿" name="fourth">定时任务补偿</NTabPane>
        </NTabs>

        <label class="hidden" for="input"> 输入你的名字 </label>

        <div>
            <NButton class="m-3 text-sm btn" :disabled="!name" @click="go">确定</NButton>
        </div>
    </div>
</template>
