<script setup lang="ts">
import { ref } from 'vue'
// import SvgIcon from "@/components/Icons/SvgIcon.vue";
import { Sunny, Moon } from '@element-plus/icons-vue'
// TODO: 暗黑模式 - 无
const value = ref(false)
defineExpose({
  
})
</script>

<template>
  <!-- <el-icon><Moon /></el-icon> -->
  <el-switch
    v-model="value"
    style="--el-switch-on-color: #000;"
  >
    <template #active-action>
      <el-icon style=""><Moon /></el-icon>
    </template>
    <template #inactive-action>
      <el-icon style="color: #000;"><Sunny /></el-icon> 
    </template>
  </el-switch>
</template>

<style scoped>
</style>