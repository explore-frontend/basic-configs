<script lang="ts">
// eslint-disable-next-line import/no-cycle -- 循环依赖
import { identity } from './TheBar.vue';

export const value = 1;

console.log(identity(value));
</script>
<template>
    <div>TheBar</div>
</template>
