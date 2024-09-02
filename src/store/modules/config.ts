import { defineStore } from 'pinia'
// import { getSearchEngineList } from '@/store/data/search-engine';
import { getConfigByCodeApi } from '@/api/config'
import { ConfigInfo } from '@/api/config/type'

export const useConfigStore = defineStore('config', {
  //用来存放变量
  state: () => ({
    configInfo: {} as ConfigInfo,
  }),
  //方法
  actions: {
    async getConfigByCode(params: any) {
      const result:any = await getConfigByCodeApi(params)
      if (result.code == 200) {
        this.configInfo = result.data
      } else {
        return Promise.reject(new Error(result.message))
      }
    },
  }
})