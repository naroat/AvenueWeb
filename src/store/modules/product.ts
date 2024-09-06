import { defineStore } from 'pinia'
import { productCateListAPi, productListAPi, productAddClickAPi } from '@/api/product'
import { ProductCateInfo, ProductInfo } from '@/api/product/type'

export const useProductStore = defineStore('product', {
  //用来存放变量
  state: () => ({
    cateList: [] as ProductCateInfo[],
    productList: [] as ProductInfo[],
    productListPageInfo: [] as any,
    productLoadFinish: false,
    productListParams: {},
  }),
  //方法
  actions: {
    async getProductCateList(params: any) {
      const result:any = await productCateListAPi(params)
      if (result.code == 200) {
        this.cateList = result.data
        return this.cateList
      } else {
        return Promise.reject(new Error(result.message))
      }
    },
    async getProductList(params: any) {
      const result:any = await productListAPi(params)
      if (result.code == 200) {
        if (params.loadmore == true) {
          this.productList.push(...result.data.items)
        } else {
          this.productList = result.data.items
        }
        this.productListPageInfo = result.data.pageInfo
        this.productLoadFinish = true
        return this.productList
      } else {
        return Promise.reject(new Error(result.message))
      }
    },
    addClick(id: any) {
      const result:any = productAddClickAPi(id)
      if (result.code == 200) {
        return true;
      } else {
        return Promise.reject(new Error(result.message))
      }
    },
  }
})