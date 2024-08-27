import request from '@/utils/request'
import { ResponseData } from "../common"

import type {
  TreeListReq,
  TreeListResponse,
  AddSearchEngineCategoryReq,
  UpdateSearchEngineCategoryReq,
  DelSearchEngineCategoryReq,
  AddSearchEngineReq,
  UpdateSearchEngineReq,
  DelSearchEngineReq,
} from './type'

//request 
enum API {
  SEARCH_ENGINE_TREELIST = '/manage/search/engine/treelist',
  ADD_SEARCH_ENGINE_CATEGORY = '/manage/search/engine/category/store',
  UPDATE_SEARCH_ENGINE_CATEGORY = '/manage/search/engine/category/update',
  DEL_SEARCH_ENGINE_CATEGORY = '/manage/search/engine/category/destroy',
  ADD_SEARCH_ENGINE = '/manage/search/engine/store',
  UPDATE_SEARCH_ENGINE = '/manage/search/engine/update',
  DEL_SEARCH_ENGINE = '/manage/search/engine/destroy',
}

//treelist
export const searchEngineTreeList = (data: TreeListReq) => request.post<any, TreeListResponse>(API.SEARCH_ENGINE_TREELIST, data)
//add cate
export const addSearchEngineCateGory= (data: AddSearchEngineCategoryReq) => request.post<any, ResponseData>(API.ADD_SEARCH_ENGINE_CATEGORY, data)
//update cate
export const updateSearchEngineCateGory= (data: UpdateSearchEngineCategoryReq) => request.post<any, ResponseData>(API.UPDATE_SEARCH_ENGINE_CATEGORY, data)
//del cate
export const delSearchEngineCateGory= (data: DelSearchEngineCategoryReq) => request.post<any, ResponseData>(API.DEL_SEARCH_ENGINE_CATEGORY, data)
//add engine
export const addSearchEngine= (data: AddSearchEngineReq) => request.post<any, ResponseData>(API.ADD_SEARCH_ENGINE, data)
//update ResponseData
export const updateSearchEngine= (data: UpdateSearchEngineReq) => request.post<any, ResponseData>(API.UPDATE_SEARCH_ENGINE, data)
//del engine
export const delSearchEngine= (data: DelSearchEngineReq) => request.post<any, ResponseData>(API.DEL_SEARCH_ENGINE, data)