<script setup>
import {ref} from "vue";
import {Check} from '@element-plus/icons-vue';
const emit = defineEmits(['todo-added','todo-del'])
const label = ref('')
defineProps({
  // label:String
})

function onSubmitAdd() {
  if (label.value === ''){
    return;
  }
  console.log('format')
  console.log(label.value)
  // defineEmits()
  emit("todo-added", label.value)
}
function onSubmitDel() {
  if (label.value === ''){
    return;
  }
  console.log('format')
  console.log(label.value)
  // defineEmits()
  emit("todo-del", label.value)
}


</script>

<template>
  <div>

      <label for="new-todo-list"> What needs to be done? </label>
      <input type="text" id="new-todo-list" autocomplete="off" v-model.trim.lazy="label"/>

<!--    <form  @submit.prevent="onSubmitAdd">-->
<!--      <button  type="submit" >Add</button>-->
<!--    </form>-->
<!--&lt;!&ndash;    <form @submit.prevent="onSubmitDel">&ndash;&gt;-->
<!--    <form @submit.prevent="onSubmitDel">-->
<!--&lt;!&ndash;      <button type="submit" >Del</button>&ndash;&gt;-->
<!--      <button type="submit" @click="onSubmitDel">Del</button>-->
<!--    </form>-->

    <el-row :gutter="20">
      <el-col :span="6">
        <el-button  type="success" :icon="Check" circle  @click="onSubmitAdd"></el-button>
        <div class="grid-content ep-bg-purple" />
      </el-col>
      <el-col :span="6"><el-button type="primary" @click="onSubmitDel">Del</el-button>
        <div class="grid-content ep-bg-purple" />
      </el-col>
<!--      <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>-->
<!--      <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>-->
       </el-row>
  </div>

</template>

<style scoped>

</style>
