<script setup lang="ts">
import { ref } from 'vue'
import SearchEngine from "@/components/Setting/SearchEngine/SearchEngine.vue";
import Geneal from "@/components/Setting/Geneal/Geneal.vue";
import UserInfo from "@/components/User/Info/Info.vue";
import { CircleCloseFilled } from '@element-plus/icons-vue'
const drawerShow = ref(false)
const activeName = ref('searchengine')

const isShow = () => {
  drawerShow.value = !drawerShow.value
}

const close = () => {
  isShow()
  activeName.value = 'searchengine'
}

// const tabsClick = (pane, e) => {
//   if (pane.paneName == 'searchengine') {

//   }
// }



defineExpose({
  isShow
})
</script>

<template>
    <el-drawer
    v-model="drawerShow"
    title=""
    direction="rtl"
    size="100%"
    :show-close="false"
  >
     <template #header="{ titleId, titleClass }">
      <h4 :id="titleId" :class="titleClass">Avenue 设置</h4>
      <el-button type="danger" @click="close">
        <el-icon class="el-icon--left"><CircleCloseFilled /></el-icon>
        Close
      </el-button>
    </template>
    <el-tabs
      v-model="activeName"
      class="demo-tabs"
      tab-position="left"
    >
      <el-tab-pane label="用户信息" name="user">
        <UserInfo v-if="activeName == 'user'"></UserInfo>
      </el-tab-pane>

      <el-tab-pane label="常规设置" name="general">
        <Geneal v-if="activeName == 'general'"/>
      </el-tab-pane>

      <el-tab-pane label="搜索引擎" name="searchengine" >
        <SearchEngine v-if="activeName == 'searchengine'"/>
      </el-tab-pane>

      <el-tab-pane label="收录管理" name="product" >
        <SearchEngine v-if="activeName == 'product'"/>
      </el-tab-pane>

      <el-tab-pane label="关于" name="fourth">关于</el-tab-pane>
    </el-tabs>
  </el-drawer>

</template>
<style scoped>
</style>