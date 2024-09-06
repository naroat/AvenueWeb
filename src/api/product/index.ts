import request from '@/utils/request'
// import { ResponseData } from "../common"

import type {
  ProductCateList,
  ProductList,
} from './type'

//request 
enum API {
  PRODUCT_CATE_LIST = '/v1/avenue/productCategory/index',
  PRODUCT_LIST = '/v1/avenue/product/index',
  PRODUCT_ADD_CLICK = '/v1/avenue/product/addClick',
}

//method
export const productCateListAPi = (data: object) => request.get<any, ProductCateList>(API.PRODUCT_CATE_LIST, {
  params: data
})
export const productListAPi = (data: object) => request.get<any, ProductList>(API.PRODUCT_LIST, {
  params: data
})
export const productAddClickAPi = (id: number) => request.put<any, ProductList>(API.PRODUCT_ADD_CLICK + '/' + id)