<script setup lang="ts">
import Header from '@/components/Layout/Header/Header.vue'
import Floor from '@/components/Layout/Floor/Floor.vue'
// import Right from '@/components/Layout/Right/Right.vue'
// import { useComponentStore } from '@/store/modules/component'

//store
// const componentStore = useComponentStore()

</script>

<template>
  <el-container>
    <el-header>
      <Header/>
    </el-header>
    
    <el-main>
      <router-view v-slot="{ Component, route }">
          <component :is="Component" :key="route.path"></component>
      </router-view>
    </el-main>
    
    <el-footer>
      <Floor />
    </el-footer>
  </el-container>
</template>

<style scoped>
:deep(.el-main){
  @apply p-0
}
:deep(.el-header){
  @apply p-0
}
:deep(.el-footer){
  @apply p-0
}
</style>
