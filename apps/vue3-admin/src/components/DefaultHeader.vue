<script setup lang="ts">
import { NAvatar } from 'naive-ui';
import { useRouter } from 'vue-router';

const router = useRouter();
const backToHome = () => {
    router.push('/');
};
</script>
<template>
    <div class="flex justify-between items-center h-full">
        <div class="flex cursor-pointer" @click="backToHome">
            <img
                src="http://ali.static.yximgs.com/udata/pkg/fe/kwai_icon.0fa49427.ico"
                alt=""
                class="w-5 h-5 align-middle mr-5px"
            />
            配置平台
        </div>
        <div>
            <NAvatar size="medium" src="https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_1280.jpg" />
        </div>
    </div>
</template>
