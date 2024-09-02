<script setup lang="ts">
import { onMounted } from 'vue'
import { useConfigStore } from '@/store/modules/config'

const configStore = useConfigStore()

onMounted(() => {
  configStore.getConfigByCode({
    code: 'change_log'
  })
})
</script>

<template>
  <div class="flex flex-col mt-3 flex-1 p-5" v-html="configStore.configInfo.value">
  </div>
</template>

<style scoped>
@import '@/styles/rich.css';
</style>