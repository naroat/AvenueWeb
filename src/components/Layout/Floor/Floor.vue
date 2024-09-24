<script setup lang="ts">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { goto } from '@/utils/url.ts';

const router = useRouter();

function goRouter(path: string) {
  router.push(path);
}

const currentDade = new Date()
const currentYear = currentDade.getFullYear()

onMounted(() => {

})
</script>

<template>
  <div class="w-full border-t-[1px] border-gray-200 mt-10 p-5">

    <div class="flex justify-between c-md:justify-between c-md:flex-row c-sm:flex-col c-xs:flex-col">
      <div>
        <div class="text-2xl font-bold flex items-center cursor-pointer" @click="router.push('/');">
          <el-image style="width: 30px; height: 30px" src="/logo.png" fit="cover" />
          <div class="ml-2">Avenue</div>
        </div>
        <div class="mt-5">
          <el-text>分享各种导航收录，让查找产品更加方便!</el-text>
        </div>
      </div>

      <div class="flex flex-col c-md:mt-0 c-sm:mt-5 c-xs:mt-5">
        <div class="grid grid-cols-3 gap-10">
          <div>
            <div class="font-bold">产品</div>
            <div class="mt-2 cursor-pointer"><el-text @click="goto('https://tools.ranblogs.com/')">Tools-Web</el-text></div>
          </div>
          <div>
            <div class="font-bold">关于网站</div>
            <div class="mt-2 cursor-pointer"><el-text @click="goRouter('/about')">关于我们</el-text></div>
            <div class="mt-2 cursor-pointer"><el-text @click="goRouter('/changelog')">更新日志</el-text></div>
          </div>
          <div>
            <div class="font-bold">法律信息</div>
            <div class="mt-2 cursor-pointer"><el-text @click="goRouter('/privacy')">隐私政策</el-text></div>
            <div class="mt-2 cursor-pointer"><el-text  @click="goRouter('/terms')">服务条款</el-text></div>
          </div>
        </div>
      </div>
    </div>

  </div>

  <div class="w-full border-t-[1px] border-gray-200 mt-3 p-5 pt-3 pb-3 flex justify-between items-center">
    <div class="">
      <el-text>©{{ currentYear }} Avenue, All Rights Reserved.</el-text>
    </div>
    <div class="cursor-pointer hover:bg-gray-200 rounded-md" @click="goto('https://github.com/naroat/Avenue')">
      <svg t="1723688961971" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13170" width="25" height="25"><path d="M64 512c0 195.2 124.8 361.6 300.8 422.4 22.4 6.4 19.2-9.6 19.2-22.4v-76.8c-134.4 16-140.8-73.6-150.4-89.6-19.2-32-60.8-38.4-48-54.4 32-16 64 3.2 99.2 57.6 25.6 38.4 76.8 32 105.6 25.6 6.4-22.4 19.2-44.8 35.2-60.8-144-22.4-201.6-108.8-201.6-211.2 0-48 16-96 48-131.2-22.4-60.8 0-115.2 3.2-121.6 57.6-6.4 118.4 41.6 124.8 44.8 32-9.6 70.4-12.8 112-12.8 41.6 0 80 6.4 112 12.8 12.8-9.6 67.2-48 121.6-44.8 3.2 6.4 25.6 57.6 6.4 118.4 32 38.4 48 83.2 48 131.2 0 102.4-57.6 188.8-201.6 214.4 22.4 22.4 38.4 54.4 38.4 92.8v112c0 9.6 0 19.2 16 19.2C832 876.8 960 710.4 960 512c0-246.4-201.6-448-448-448S64 265.6 64 512z" fill="#040000" p-id="13171"></path></svg>
    </div>
  </div>


</template>

<style scoped>
.xs_layout{
  @apply flex-col
}
.sm_layout{
  @apply flex-col
}
.md_layout{
  @apply flex-col
}
</style>