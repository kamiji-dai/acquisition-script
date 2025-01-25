import { defineConfig } from 'vitest/config'

export default defineConfig({
	test: {
		globals: true, // グローバルに使用可能なAPI
		environment: 'jsdom', // ブラウザ環境をエミュレート
		include: ['**/*.{test,spec}.{js,ts,jsx,tsx}'], // テストファイルを指定
		exclude: ['**/node_modules/**', '**/dist/**'], // 除外するディレクトリを指定
	},
})
