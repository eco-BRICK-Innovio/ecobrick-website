import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: 'index.html',
                privacy: 'privacy.html',
                terms: 'terms.html',
                accessibility: 'accessibility.html',
                'technical-library': 'technical-library.html'
            }
        }
    }
})
