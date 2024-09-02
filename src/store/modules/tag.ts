import { defineStore } from 'pinia'
import { tagListAPi } from '@/api/tag'
import { TagInfo } from '@/api/tag/type'

export const useTagStore = defineStore('tag', {
  //用来存放变量
  state: () => ({
    tagList: [] as TagInfo[],
  }),
  //方法
  actions: {
    async getTagList(params: any) {
      const result:any = await tagListAPi(params)
      if (result.code == 200) {
        this.tagList = result.data
        return this.tagList
      } else {
        return Promise.reject(new Error(result.message))
      }
    },
  }
})