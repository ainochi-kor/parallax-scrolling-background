import { defineConfig } from 'vite';
export default defineConfig({
    base: './',
    build: {
        rollupOptions: {
            output: {
                entryFileNames: 'assets/js/[name]-[hash].js',
            },
        },
    },
});
//# sourceMappingURL=vite.config.js.map