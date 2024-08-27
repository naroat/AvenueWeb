import { ResponseData } from "../common"

// product cate
export interface ProductCateInfo {
  id: number,
  title: string,
}

export interface ProductCateList extends ResponseData {
  data: ProductCateInfo[]
}
// product cate //

// product
export interface ProductInfo {
  id: number,
  title: string,
  logo: string,
  desc: string,
  link: string,
  sort: number,
  cate_id: string
  new: number,
  click: number,
  cate_text: string,
}

export interface ProductList extends ResponseData {
  data: ProductInfo[]
}
// product //
