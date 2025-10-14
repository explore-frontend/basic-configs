import { setupLayouts } from 'virtual:generated-layouts';
import { ViteSSG } from 'vite-ssg';

import App from './App.vue';

import generatedRoutes from '~pages';

import './styles/main.css';
import 'uno.css';

const routes = setupLayouts(generatedRoutes);

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(App, { routes }, (ctx) => {
    // install all modules under `modules/`
    Object.values(import.meta.glob('./init/*.ts', { eager: true })).forEach((i: any) => i.install?.(ctx));
});
