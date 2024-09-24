import request from '@/utils/request'
// import { ResponseData } from "../common"

import type {
  ProductCateList,
  ProductList,
  SubmitProduct,
  ProductResponseData
} from './type'

//request 
enum API {
  PRODUCT_CATE_LIST = '/v1/avenue/productCategory/index',
  PRODUCT_LIST = '/v1/avenue/product/index',
  PRODUCT_ADD_CLICK = '/v1/avenue/product/addClick',
  PRODUCT_SUBMIT = '/v1/avenue/product/submit',
}

//method
export const productCateListAPi = (data: object) => request.get<any, ProductCateList>(API.PRODUCT_CATE_LIST, {
  params: data
})
export const productListAPi = (data: object) => request.get<any, ProductList>(API.PRODUCT_LIST, {
  params: data
})
export const productAddClickAPi = (id: number) => request.put<any, ProductList>(API.PRODUCT_ADD_CLICK + '/' + id)
export const productSubmitApi = (data: SubmitProduct) => request.post<any, ProductResponseData>(API.PRODUCT_SUBMIT, data)