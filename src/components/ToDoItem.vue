<template>
  <div>
    <input type="checkbox" :id="id" :checked="done" />
    <label :for="id">{{ label }}</label>
  </div>
</template>

<script setup>
import {ref} from "vue";

defineProps({
  id:{required:true, type:String},
  label:{required:true, type:String},
  done:{required:true, default:false, type:Boolean}
})

// 响应式状态
const isDone = ref()

// export default {
//   name: "ToDoItem"
// }
</script>

<style scoped>

</style>