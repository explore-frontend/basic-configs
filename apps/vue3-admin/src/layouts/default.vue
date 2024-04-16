<script setup lang="ts">
import { RouterView } from 'vue-router';
import { NLayout, NLayoutHeader, NLayoutSider, NLayoutContent } from 'naive-ui';
import DefaultHeader from '../components/DefaultHeader.vue';
import DefaultSidebar from '../components/DefaultSidebar.vue';
</script>
<template>
    <NLayout>
        <NLayoutHeader class="border-solid border-0 border-b border-gray-300">
            <DefaultHeader />
        </NLayoutHeader>
        <NLayout has-sider>
            <NLayoutSider>
                <DefaultSidebar />
            </NLayoutSider>
            <NLayoutContent>
                <div>
                    <RouterView />
                </div>
            </NLayoutContent>
        </NLayout>
    </NLayout>
</template>
