import request from '@/utils/request'
// import { ResponseData } from "../common"

import type {
  TagList,
} from './type'

//request 
enum API {
  TAG_LIST = '/v1/avenue/tag/index',
}

//method
export const tagListAPi = (data: object) => request.get<any, TagList>(API.TAG_LIST, {
  params: data
})