import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // You might need to install @types/node

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@sass': path.resolve(__dirname, './src/sass'),
        },
    },
})
