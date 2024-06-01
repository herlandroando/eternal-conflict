import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwind from "tailwindcss"
import autoprefixer from "autoprefixer"
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
    base: './',
    css: {
        postcss: {
            plugins: [tailwind(), autoprefixer(),]
        }
    },
    plugins: [
        vue(),
    ],
    resolve: {
        alias: [
            { find: '@', replacement: path.resolve(__dirname, '/src') }
        ]
        // {
        //     '@': fileURLToPath(new URL('./src', import.meta.url))

        // }
    },
    server: {
        port: 8080
    }
})
