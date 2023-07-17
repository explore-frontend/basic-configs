<script lang="ts">
// eslint-disable-next-line import/no-cycle -- 循环依赖
import { value } from './foo';

export const identity = <T,>(x: T): T => x;

console.log(identity(value));
</script>
<template>
    <div>TheBar</div>
</template>
