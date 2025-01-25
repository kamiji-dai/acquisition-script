import { getCookieValue } from '../utils/cookies'
import { saveConversion } from '../api/services/saveConversion'

/**
 * CV計測のためのパラメータを取得して、APIリクエストする
 * mud: ユーザーID
 */
const trackConversion = (): void => {
	const scriptElement = document.currentScript as HTMLScriptElement
	if (!scriptElement) return
	const scriptURL = scriptElement.src
	console.log('scriptURL', scriptURL)
	const urlParams = new URL(scriptURL).searchParams
	console.log('urlParams', urlParams)
	const userId: string | null = urlParams.get('mud')
	console.log('userId', userId)

	// mcvsnの値を取得
	const mcvsn: string | null = getCookieValue('mcvsn')
	console.log('mcvsn', mcvsn)

	// CV計測保存APIリクエスト
	if (userId && mcvsn) {
		const params = {
			user_id: userId,
			conversion_key: mcvsn,
		}
		saveConversion(params)
	}
}

export default trackConversion
trackConversion()
