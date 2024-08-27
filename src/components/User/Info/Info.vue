<script setup lang="ts">
import { onMounted,ref } from 'vue';
// import { RouterLink } from "vue-router"
// import { ElMessage } from 'element-plus'
// import { useRoute } from "vue-router"

// const route = useRoute()
// const keyword = ref('')
// const getToolsCate = async () => {
//   try {
//     await toolsStore.getToolCate()
//   } catch (error: any) {
//     ElMessage.error(error.message)
//   }
// }

const sex = ref('0')

onMounted(() => {
})
</script>

<template>
  <div class="c-xs:mr-0">
    <div class="flex c-xs:ml-3 rounded-xl w-full items-center bg-white">
      <!-- left -->
      <div class="mr-4 flex justify-center flex-col w-4/12">
        <div class="flex justify-center">
          <el-image style="width: 100px; height: 100px" src="/public/images/default_avatar.png" fit="cover" />
        </div>
        <!-- <div class="mt-3 flex justify-center">
          <el-text>注册时间：2024-07-04 23:15:23</el-text>
        </div> -->
        <div class="mt-3 flex justify-center">
          <el-button class="mt-3 w-6/12">修改头像</el-button>
        </div>
        <el-divider>
          其他操作
        </el-divider>
        <div class="mt-3 flex flex-col items-center">
          <el-button class="w-6/12" type="danger">修改密码</el-button>
        </div>
        <div class="mt-3 flex flex-col items-center">
          <el-button class="w-6/12" type="primary">退出登录</el-button>
        </div>
      </div>
      <!-- right -->
      <div class="w-7/12 pl-6 pr-6">
        <el-divider>
          个人信息
        </el-divider>
        <div class="mt-4 flex">
          <div class="w-12"><el-text>email: </el-text></div>
          <el-input value="user001@163.com"></el-input>
        </div>
        <div class="mt-4 flex">
          <div class="w-12"><el-text>昵称: </el-text></div>
          <el-input value="user001"></el-input>
        </div>
        <div class="mt-4 flex">
          <div class="w-12"><el-text>手机: </el-text></div>
          <el-input value=""></el-input>
        </div>
        <div class="mt-4 flex">
          <div class="w-12"><el-text>性别: </el-text></div>
          <el-radio-group v-model="sex" class="ml-4">
            <el-radio label="0" size="small">保密</el-radio>
            <el-radio label="1" size="small">男</el-radio>
            <el-radio label="2" size="small">女</el-radio>
          </el-radio-group>
        </div>
        <div class="mt-4 flex">
          <div class="w-12"><el-text>备注: </el-text></div>
          <el-input type="textarea" value="-暂无备注-"></el-input>
        </div>
        <div class="mt-4 flex justify-center">
          <el-button type="primary">保存</el-button>
        </div>
      </div>
    </div>
   
  </div>
</template>

<style scoped>
</style>