<script setup lang="ts">
import { ref } from 'vue'
import { Flag } from '@element-plus/icons-vue'
const input = ref('')
const nowColor = ref('gray')
const list = ref([
  {
    id: 1,
    color: 'gray',
    value: '1111',
    status: 0,
  },
  {
    id: 2,
    color: 'gray',
    value: '2222',
  },
  {
    id: 3,
    color: 'gray',
    value: '啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
    status: 0,
  },
  {
    id: 4,
    color: 'red',
    value: '4444',
    status: 0,
  },
  {
    id: 5,
    color: 'red',
    value: '555',
    status: 0,
  },
  {
    id: 6,
    color: 'gold',
    value: '66666',
    status: 0,
  },
])
const colors = [
  {
    value: 'red',
    label: 'red',
  },
  {
    value: 'orange',
    label: 'orange',
  },
  {
    value: 'gold',
    label: 'gold',
  },
  {
    value: 'green',
    label: 'green',
  },
  {
    value: 'cyan',
    label: 'cyan',
  },
  {
    value: 'blue',
    label: 'blue',
  },
  {
    value: 'purple',
    label: 'purple',
  },
  {
    value: 'gray',
    label: 'gray',
  },
]

const checkChange = (bool, e, id) => {
  console.log(bool, e, id)
  if (bool == true) {
    list.value = list.value.filter(item => item.id !== id)
  }
}

const chooseColor = (color) => {
  nowColor.value = color
}

defineExpose({
  
})
</script>

<template>
<div class="grid mt-5 bg-[#f8f8f8] min-h-[320px] w-[70%] grid-cols-[2fr_1fr] h-full">
  <div class="p-3">
    <div class="grid grid-auto-rows" v-if="list.length > 0">
      <TransitionGroup tag="div" name="fade">
        <div class="w-[97%] bg-white ml-2 mb-3 p-2 flex" v-for="(item, index) in list" :key="index">
          <div class="h-full flex flex-col">
            <el-checkbox v-model='item.id' label="" size='large' class="flex flex-col" @change="(bol, e) => checkChange(bol, e, item.id)">
              <el-icon class="mt-1" :color="item.color"><Flag /></el-icon>
            </el-checkbox>
          </div>
          
          <div class="h-full grid">
            <el-text class="" style="align-self: start;" :class="item.status==1 ? 'checked-text' : ''">{{ item.value }}</el-text>
          </div>
        </div>
      </TransitionGroup>

    </div>

    <div class="bg-white h-full w-full flex items-center justify-center" v-else>
      no list
    </div>


  </div>
  <div class="mt-3 justify-self-end h-full pr-3 w-full">
    <div class="">
      <el-input v-model="input" class="" placeholder="Please input" type="textarea" rows="9" maxlength="200" resize="none"></el-input>
    </div>
    <div class="bg-white p-2 mt-2">
      <div class="grid grid-cols-8 mt-2 gap-1">
        <el-tag v-for="(item, index) in colors" :key="index" :color="item.value" class="cursor-pointer hover:shadow-[0_0_5px_rgba(32,33,36,.28)]" @click="chooseColor(item.value)">
          <el-icon color="white" v-if="nowColor == item.value"><Flag /></el-icon>
        </el-tag>
      </div>
      <div class="mt-2 flex flex-row-reverse">
        <el-button type="info">清空</el-button>
        <el-button type="primary" class="mr-2">保存</el-button>
      </div>
    </div>
  </div>

</div>
</template>

<style scoped>
:deep(.el-checkbox__input.is-checked .el-checkbox__inner){
  @apply bg-[#d1d5db] border-[#d1d5db]
}
:deep(.el-checkbox.el-checkbox--large .el-checkbox__inner){
  @apply h-4 w-4
}
:deep(.el-checkbox__inner:hover){
  @apply border-[#e5e7eb] shadow-[0_0_5px_#e5e7eb]
}
:deep(.el-checkbox__inner:after){
  @apply top-[2px] left-[5px]
}
:deep(.el-checkbox:last-of-type){
  @apply mr-2
}
:deep(.el-checkbox__label){
  @apply pl-0
}
.checked-text{
  @apply text-gray-400 line-through
}
.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>