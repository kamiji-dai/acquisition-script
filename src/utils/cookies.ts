/**
 * 特定のCookieを取得
 * @param name
 * @returns
 */
const getCookieValue = (name: string): string | null => {
	const cookies: string[] = document.cookie.split('; ')
	console.log('cookies', cookies)

	const cookie: string | undefined = cookies.find((c) =>
		c.startsWith(`${name}=`),
	)
	console.log('cookie', cookie)

	const cookieValue: string | null = cookie ? cookie.split('=')[1] : null
	console.log('cookieValue', cookieValue)

	return cookieValue
}

export { getCookieValue }
