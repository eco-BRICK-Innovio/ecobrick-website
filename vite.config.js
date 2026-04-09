import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    base: './',
    plugins: [react()],
    build: {
        rollupOptions: {
            input: {
                main: 'index.html',
                privacy: 'privacy.html',
                terms: 'terms.html',
                accessibility: 'accessibility.html',
                'technical-library': 'technical-library.html',
                'One-Pager': 'One-Pager/index.html',
                'market-insights': 'market-insights.html',
                'Financial-Pitch': 'Financial-Pitch/index.html',
                'Contact': 'Contact/index.html',
                'Ashdod-Facility': 'Ashdod-Facility/index.html',
                'iHLS-One-Pager': 'iHLS-One-Pager/index.html',
                'shelter': 'shelter.html',
                'presentation': 'presentation/index.html'
            }
        }
    }
})
