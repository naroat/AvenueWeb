<script setup lang="ts">
import { ref,reactive, onMounted } from 'vue'
import { Edit, Delete } from '@element-plus/icons-vue'
import type { FormInstance, FormRules } from 'element-plus'
import { useSearchStore } from '@/store/modules/search'
import { ElMessage } from 'element-plus'

const searchStore = useSearchStore()
const cateFormRef = ref<FormInstance>()
const updateCateFormRef = ref<FormInstance>()
const cateForm = reactive({
  title: '',
  sort: 0,
})
const updateCateForm = reactive({
  title: '',
  sort: 0,
})
const updateCateId = ref(0)


const cateFormRules = reactive<FormRules>({
  title: [
    {required: true, message: '请输入分类名称', trigger: 'blur'},
    {min: 1, max: 4, message: '长度范围: 1-4', trigger: 'blur'},
  ],
})
const updateCateFormRules = reactive<FormRules>({
  title: [
    {required: true, message: '请输入分类名称', trigger: 'blur'},
    {min: 1, max: 4, message: '长度范围: 1-4', trigger: 'blur'},
  ],
})

//add or update
const saveCate = async (formEl: FormInstance|undefined, type: string) => {
    if (!formEl) return
    await formEl.validate(async (valid) => {
      if (!valid) {
        //验证不通过
        return
      }
      try {
        switch (type) {
          case 'add':
            await searchStore.addCate(cateForm)
            ElMessage.success('操作成功')
            break;
          case 'edit':
            await searchStore.updateCate({
              id: updateCateId.value,
              title: updateCateForm.title,
              sort: updateCateForm.sort,
            })
            ElMessage.success('操作成功')
            updateCateDialog.value = false
            break;
          default:
            throw new Error('save error')
            break;
        }
      } catch (error: any) {
        ElMessage.error(error.message)
      }
    })
}

const updateCateDialog = ref(false)
const updateCateShow = (row) => {
  updateCateId.value = row.id
  updateCateForm.title = row.title
  updateCateForm.sort = row.sort
  updateCateDialog.value = true
}

const delCate = async (id: number) => {
  try {
    await searchStore.delCate({
      id: id
    })
  } catch (error: any) {
    ElMessage.error(error.message)
  }
}

/** search engine */
const engineDialog = ref(false)
const engineFormRef = ref<FormInstance>()
const initialEngine = {
  title: '',
  logo: '',
  desc: '',
  link: 'https://www.baidu.com',
  sort: 0,
  cate_id: 0,
}
const engineForm = reactive({
  ...initialEngine
})
const resetEngineForm = () => {
  Object.assign(engineForm, initialEngine)
}
const engineFormRules = reactive<FormRules>({
  title: [
    {required: true, message: '请输入名称', trigger: 'blur'},
    {min: 1, max: 4, message: '长度范围: 1-4', trigger: 'blur'},
  ],
  logo: [
    {required: true, message: '请输入logo地址', trigger: 'blur'},
  ],
  link: [
    {required: true, message: '请输入链接', trigger: 'blur'},
  ]
})
const updateEngineId = ref(0)
const chooseCateId = ref(0)
const engineHandleType = ref('')
const addEngineShow = (cateId) => {
  engineHandleType.value = 'add'
  chooseCateId.value = cateId
  engineDialog.value = true
}
const updateEngineShow = (row) => {
  console.log(row)
  updateEngineId.value = row.id
  engineHandleType.value = 'edit'
  engineForm.title = row.title
  engineForm.logo = row.logo
  engineForm.desc = row.desc
  engineForm.link = row.link
  engineForm.sort = row.sort
  engineForm.cate_id = row.cate_id
  engineDialog.value = true
}
const engineShowClose = () => {
  updateEngineId.value = 0   
  engineHandleType.value = ''
}

const saveEngine = async (formEl: FormInstance|undefined, type: string) => {
  console.log(type)
  if (!formEl) return
  await formEl.validate(async (valid) => {
    if (!valid) {
      //验证不通过
      return
    }
    try {
      switch (type) {
        case 'add':
          engineForm.cate_id = chooseCateId.value
          await searchStore.addEngine(engineForm)
          ElMessage.success('操作成功')
          engineDialog.value = false
          resetEngineForm()
          break;
        case 'edit':
          let data = {id: updateEngineId.value, ...engineForm}
          await searchStore.updateEngine(data)
          ElMessage.success('操作成功')
          engineDialog.value = false
          resetEngineForm()
          break;
        default:
          throw new Error('save error')
          break;
      }
    } catch (error: any) {
      ElMessage.error(error.message)
    }
  })
}
const delEngine = async (id: number) => {
  try {
    await searchStore.delEngine({
      id: id
    })
    ElMessage.success('操作成功')
  } catch (error: any) {
    ElMessage.error(error.message)
  }
}

const getList = async () => {
  try {
    await searchStore.getTreeList()
  } catch (error: any) {
    ElMessage.error(error.message)
  }
}

onMounted(() => {
  getList()
})
defineExpose({
  
})
</script>

<template>
<div class="grid grid-rows-2 pl-1">
  <div class="flex flex-col items-start">
    <el-form ref="cateFormRef" :inline="true" :rules="cateFormRules" :model="cateForm">
      <el-form-item label="分类名称" prop="title">
        <div><el-input v-model="cateForm.title" placeholder="请输入分类名称" type="text"></el-input></div>
      </el-form-item>
      <el-form-item label="排序" prop="sort">
        <div><el-input v-model.number="cateForm.sort" placeholder="数值越大排序越前" type="text"/></div>
      </el-form-item>
      <el-form-item><el-button type="primary" @click="saveCate(cateFormRef, 'add')">添加分类</el-button></el-form-item>
    </el-form>

    <div v-for="(item, index) in searchStore.treelist" :key="index" class="mb-3 w-full">
      <div class="bg-gray-200 w-full pl-3 pr-3 pt-2 pb-2 rounded-sm flex justify-between items-center">
        <div><el-text tag="b" size="large">{{ item.title }}</el-text></div>
        <div>
          <el-button type="primary" link @click="addEngineShow(item.id)">添加引擎</el-button>
          <el-button type="primary" link tag="div" @click="updateCateShow(item)">编辑</el-button>
          <el-button type="primary" link tag="div" @click="delCate(item.id)">删除</el-button>
        </div>
      </div>
      <div class="grid grid-auto-rows grid-cols-4 w-full" v-if="item.engine.length > 0">
        <!-- engine btn -->
        <div class="w-40 border rounded-md mr-3 mt-3 flex justify-between pt-2 pb-2 pl-3 pr-3" v-for="(_item, _index) in item.engine" :key="_index">
          <div class="flex items-center">
            <el-image  :src="_item.logo" fit="cover" class="w-4 h-4 mr-1"/>
            <el-text>{{ _item.title }}</el-text>
          </div>
          <div class="flex items-center">
            <el-divider direction="vertical" />
            <el-icon class="hover:text-[#337ecc] cursor-pointer" @click="updateEngineShow(_item)"><Edit /></el-icon>
            <el-icon class="ml-1 hover:text-[#337ecc] cursor-pointer" @click="delEngine(_item.id)"><Delete /></el-icon>
          </div>
        </div>
        <!-- engine btn / -->
      </div>
      <div v-else>

      </div>

    </div>

  </div>
</div>

<!-- update cate start -->
<el-dialog v-model="updateCateDialog" title="Shipping address" width="500">
  <el-form :model="updateCateForm" ref="updateCateFormRef" :rules="updateCateFormRules">
    <el-form-item label="分类名称" label-width="140px">
      <el-input v-model="updateCateForm.title" autocomplete="off" />
    </el-form-item>
    <el-form-item label="排序" label-width="140px">
      <el-input v-model="updateCateForm.sort" autocomplete="off" />
    </el-form-item>
  </el-form>
  <template #footer>
    <div class="dialog-footer">
      <el-button type="primary" @click="saveCate(updateCateFormRef, 'edit')">
        提交
      </el-button>
    </div>
  </template>
</el-dialog>
<!-- update cate end -->

 <!-- add engine start -->
<el-dialog v-model="engineDialog" title="添加引擎" width="500" @close="engineShowClose">
  <el-form :model="engineForm" ref="engineFormRef" :rules="engineFormRules">
    <el-form-item label="名称" label-width="140px">
      <el-input v-model="engineForm.title" autocomplete="off" />
    </el-form-item>
    <el-form-item label="link" label-width="140px">
      <el-input v-model="engineForm.link" autocomplete="off" />
    </el-form-item>
    <el-form-item label="logo" label-width="140px">
      <el-input v-model="engineForm.logo" autocomplete="off" />
    </el-form-item>
    <el-form-item label="排序" label-width="140px">
      <el-input v-model="engineForm.sort" autocomplete="off" />
    </el-form-item>
  </el-form>
  <template #footer>
    <div class="dialog-footer">
      <el-button type="primary" @click="saveEngine(engineFormRef, engineHandleType)">
        提交
      </el-button>
    </div>
  </template>
</el-dialog>
<!-- add engine end -->
</template>

<style scoped>
:deep(.el-form--inline .el-form-item){
  @apply mr-3 mb-3
}
</style>