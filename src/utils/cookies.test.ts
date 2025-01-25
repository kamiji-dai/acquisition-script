import { describe, test, expect } from 'vitest'
import { getCookieValue } from './cookies'

describe('特定のCookieを取得する', () => {
	document.cookie = 'mcvsn=test_hash'

	test('Cookieが存在する場合はCookieの値を返す', () => {
		expect(getCookieValue('mcvsn')).toBe('test_hash')
	})

	test('Cookieが存在しない場合はnullを返す', () => {
		expect(getCookieValue('not_exist_cookie')).toBeNull()
	})
})
