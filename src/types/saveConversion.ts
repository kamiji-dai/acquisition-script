import type { ApiResponse } from './client'

type SaveConversionRequest = {
	user_id: string
	conversion_key: string
}

export type SaveConversionResponse = {
	code: number
	message: string
}

export type SaveConversion = (
	params: SaveConversionRequest,
) => Promise<ApiResponse<SaveConversionResponse>>
