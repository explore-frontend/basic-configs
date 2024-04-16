import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import Pages from 'vite-plugin-pages';
import Layouts from 'vite-plugin-vue-layouts';
import Inspect from 'vite-plugin-inspect';
import Unocss from 'unocss/vite';
import { fileURLToPath, URL } from 'url';
import { presetAttributify, presetWind, transformerDirectives, transformerVariantGroup } from 'unocss';

export default defineConfig({
    base: process.env.CDN_BASE,
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
    plugins: [
        Vue(),

        // https://github.com/hannoeru/vite-plugin-pages
        Pages({
            extensions: ['vue'],
        }),

        // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
        Layouts(),
        // analyze(),

        // https://github.com/antfu/vite-plugin-inspect
        Inspect({
            // change this to enable inspect for debugging
            enabled: false,
        }),
        Unocss({
            presets: [presetWind(), presetAttributify()],
            transformers: [transformerDirectives(), transformerVariantGroup()],
        }),
    ],

    // https://github.com/antfu/vite-ssg
    // ssgOptions: {
    //     script: 'async',
    //     formatting: 'minify',
    // },

    // optimizeDeps: {
    //     include: ['vue', 'vue-router', '@vueuse/core'],
    //     exclude: ['vue-demi'],
    // },
});
