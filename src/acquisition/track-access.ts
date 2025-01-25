/**
 * アクセス計測のためのCookieを設定する
 * mcvsn: meet_regist_id と アクセス日時 をハッシュ化したもの
 */
const trackAccess = (): void => {
	const urlParams: URLSearchParams = new URLSearchParams(window.location.search)
	console.log('urlParams', urlParams)
	const mcvsn: string | null = urlParams.get('mcvsn')
	console.log('mcvsn', mcvsn)

	if (mcvsn !== null) {
		document.cookie = `mcvsn=${mcvsn}; max-age=604800; path=/`
	}
	console.log('document.cookie', document.cookie)
}

export default trackAccess
trackAccess()
