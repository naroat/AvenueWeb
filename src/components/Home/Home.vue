<script setup lang="ts">
import { onMounted } from 'vue';
// import Header from '@/components/Layout/Header/Header.vue'
// import Floor from '@/components/Layout/Floor/Floor.vue'
import NavBox from '@/components/Kit/NavBox/NavBox.vue'
import Search from '@/components/Kit/Search/Search.vue'
import { CaretTop } from '@element-plus/icons-vue'


onMounted(() => {

})
</script>

<template>
  <div class="">

    <!-- box -->
    <div class="">
      <div class="bg-[#F7BA1E]">
        <Search></Search>
      </div>

      <div class="box">
        <NavBox/>
      </div>
      
    </div>

    <el-backtop :bottom="100" :right="20">
      <div class="flex items-center">
        <!-- <el-icon><Top /></el-icon> -->
        <el-icon color="#F7BA1E"><CaretTop /></el-icon>
      </div>
    </el-backtop>

  </div>
</template>

<style scoped>
.search-input{
  @apply w-[600px] rounded-md flex items-center border-[1px] border-[#dfe1e5] shadow-[0_0_5px_rgba(32,33,36,.28)] border-transparent bg-white
}
:deep(.set-engine-show-dialog){
  @apply w-[800px] rounded-md h-[500px]
}
.el-button+.el-button{
  @apply ml-0
}
.box{
  @apply min-h-[350px]
}
</style>

