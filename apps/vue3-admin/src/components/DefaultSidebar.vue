<script setup lang="ts">
import { NMenu, type MenuOption } from 'naive-ui';
import { h } from 'vue';
import { RouterLink } from 'vue-router';

const menuOptions: MenuOption[] = [
    {
        key: '/',
        label: () =>
            h(
                RouterLink,
                {
                    to: {
                        path: '/',
                    },
                },
                { default: () => '菜单1' },
            ),
    },
    {
        key: '/two',
        label: () =>
            h(
                RouterLink,
                {
                    to: {
                        path: '/two',
                    },
                },
                { default: () => '菜单2' },
            ),
    },
];
</script>
<template>
    <NMenu :options="menuOptions" value="/"></NMenu>
</template>
