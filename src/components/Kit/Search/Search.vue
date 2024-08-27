<script setup lang="ts">
import { ref } from 'vue'
import { useSearchStore } from '@/store/modules/search'
import { Search } from '@element-plus/icons-vue'
import { useProductStore } from '@/store/modules/product'

const productStore = useProductStore()

const searchStore = useSearchStore()
const keyword = ref('')
//search
const search = () => {
  productStore.getProductList({
    title: keyword.value
  })
}
defineExpose({
  
})
</script>

<template>
<!-- content -->
<div class="flex justify-center flex-col h-[280px] items-center">
  <div class="flex justify-center flex-col items-center">
    <div class="font-bold text-5xl">
      实用的导航平台收录
    </div>
    <div class="text-1xl mt-3 mb-3">
      专注收录全球最新优质的导航平台，人工严选，持续更新
    </div>
  </div>
  <!-- seatch box -->
  <div class="flex flex-col items-center">
    <div class="search-input pl-3">
      <el-image src="/public/logo.png" style="width: 25px; height: 25px;"></el-image>
      <!-- <SvgIcon name="baidu" style="width: 25px; height: 25px; cursor: pointer;"></SvgIcon> -->

      <input type="text" class="outline-none h-12 bg-[rgba(255,255,255,0)] w-[85%] ml-3 mr-3" v-model="keyword" @keyup.enter="search">
      <Search class="w-6 h-6 cursor-pointer" @click="search"/>
    </div>
  </div>
</div>
</template>

<style scoped>
/* .search-input{
  @apply w-[600px] rounded-md flex items-center border-[1px] border-[#dfe1e5] shadow-[0_0_5px_rgba(32,33,36,.28)] border-transparent bg-white
} */
.search-input{
  @apply w-[600px] rounded-md flex items-center bg-white
}
:deep(.set-engine-show-dialog){
  @apply w-[800px] rounded-md h-[500px]
}
.el-button+.el-button{
  @apply ml-0
}
</style>