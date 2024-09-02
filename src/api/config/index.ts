import request from '@/utils/request'
// import { ResponseData } from "../common"

import type {
  ConfigData
} from './type'

//request 
enum API {
  GET_CONFIG_BY_CODE = '/api/avenue/config/getConfigByCode',
}

//method
export const getConfigByCodeApi = (data: object) => request.get<any, ConfigData>(API.GET_CONFIG_BY_CODE, {
  params: data
})