/**
 * APIクライアント
 * @param endpoint
 * @param method
 * @param params
 * @param body
 * @param options
 * @returns
 */
type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'
type ApiClientOptions = {
	headers?: Record<string, string>
	retry?: number
}
const DEFAULT_HEADERS = {
	Auth: import.meta.env.VITE_API_TOKEN,
}
console.log('import.meta.env', import.meta.env)

const BASE_URL = import.meta.env.VITE_API
console.log('BASE_URL', BASE_URL)

const apiClient = async <T>(
	endpoint: string,
	method: RequestMethod = 'GET',
	params?: Record<string, any>,
	body?: any,
	options?: ApiClientOptions,
): Promise<T> => {
	const url = `${BASE_URL}${endpoint}${params ? `?${new URLSearchParams(params).toString()}` : ''}`
	console.log('url', url)

	const headers = {
		...DEFAULT_HEADERS,
		...(options?.headers || {}),
	}
	console.log('headers', headers)

	const fetchOptions: RequestInit = {
		method,
		headers,
		body: body ? JSON.stringify(body) : undefined,
	}

	let response: Response
	const retries = options?.retry || 0

	for (let attempt = 0; attempt <= retries; attempt++) {
		try {
			response = await fetch(url, fetchOptions)

			if (!response.ok) {
				console.log('response.ok', response.ok)
				console.log('response.status', response.status)
				console.log('response.statusText', response.statusText)
				throw new Error(
					`HTTP Error: ${response.status} - ${response.statusText}`,
				)
			}

			const data: T = await response.json()
			return data
		} catch (error) {
			if (attempt >= retries) {
				throw error // 最後の試行でエラーが発生した場合
			}
		}
	}

	throw new Error('Unexpected error') // ここには通常到達しない
}

export default apiClient
