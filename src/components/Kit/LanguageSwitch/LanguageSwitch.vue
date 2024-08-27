<script setup lang="ts">
import { ref, getCurrentInstance } from 'vue'
import SvgIcon from "@/components/Icons/SvgIcon.vue";

const nowLanguage = ref(localStorage.getItem('nowLanguage'))
const isDisabled = (language: string) => {
  if (nowLanguage.value == language) {
    return true
  }
}
//切换语言
const { proxy } = getCurrentInstance() as any;
const chooseLanguage = (language: string) => {
  nowLanguage.value = language
  if (nowLanguage.value === 'en') {
    proxy.$i18n.locale = 'en';
  } else {
    proxy.$i18n.locale = 'zh_CN';
  }
  nowLanguage.value = proxy.$i18n.locale;
  localStorage.setItem('nowLanguage', language)
}

defineExpose({
  
})
</script>

<template>
  <el-popover
    placement="bottom"
    title=""
    :width="200"
    trigger="click"
  >

    <div class="flex flex-col">
      <!--  v-if="language == 'en'" -->
      <div><el-button link :disabled="isDisabled('zh_CN')" @click="chooseLanguage('zh_CN')">中文</el-button></div>
      <div><el-button link :disabled="isDisabled('en')" @click="chooseLanguage('en')">English</el-button></div>
    </div>

    <template #reference>
      <el-icon style="width: 1.5rem; height: 1.5rem;">
        <SvgIcon name="zh_en"></SvgIcon>
      </el-icon>
    </template>
  </el-popover>
</template>

<style scoped>

</style>