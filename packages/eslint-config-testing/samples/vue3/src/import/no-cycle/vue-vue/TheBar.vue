<script lang="ts">
// eslint-disable-next-line import/no-cycle -- 循环依赖
import { value } from './TheFoo.vue';

export const identity = <T,>(x: T): T => x;

console.log(identity(value));
</script>
<template>
    <div>TheBar</div>
</template>
./TheFoo
