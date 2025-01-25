/**
 * コンバージョンを保存する
 */
import apiClient from '../client'
import type { SaveConversion } from '../../types/saveConversion'

export const saveConversion: SaveConversion = (params) =>
	apiClient('saveConversion', 'GET', params)
