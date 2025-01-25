import { beforeEach, describe, test, expect } from 'vitest'
import trackAccess from '../track-access'

describe('trackAccess', () => {
	beforeEach(() => {
		// jsdomを利用してwindow.locationをモック
		const url = 'https://your-domain.com/your-page?mcvsn=test_hash'
		const jsdom = new URL(url)
		Object.defineProperty(window, 'location', {
			configurable: true,
			value: {
				...window.location,
				search: jsdom.search,
			},
		})

		// Cookieをリセット
		document.cookie = ''
	})

	test('アクセス計測のためのCookieが設定される', () => {
		trackAccess()

		// Cookieが正しく設定されたか確認
		const cookie = document.cookie
		expect(cookie).toBe('mcvsn=test_hash')
	})
})
