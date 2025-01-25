// モックするAPIリクエストの定義
import { http } from 'msw'
import type { SaveConversionResponse } from '../types/saveConversion'

const toUrl = (path: string) => `${import.meta.env.VITE_API}${path}`

const SAVE_CONVERSION_RESPONSE: SaveConversionResponse = {
	code: 200000,
	message: 'OK',
}

export const handlers = [
	http.get(toUrl('saveConversion'), () => {
		return new Response(JSON.stringify(SAVE_CONVERSION_RESPONSE))
	}),
]
