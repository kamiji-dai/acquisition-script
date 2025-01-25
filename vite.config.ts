import { defineConfig } from 'vite'

export default defineConfig({
	envDir: './env',
	build: {
		outDir: 'dist',
		rollupOptions: {
			input: {
				trackAccess: './src/acquisition/track-access.ts',
				trackConversion: './src/acquisition/track-conversion.ts',
			},
			output: {
				format: 'es',
				entryFileNames: '[name].js',
			},
		},
		sourcemap: false,
	},
})
