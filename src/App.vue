<script setup>

// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from './components/HelloWorld.vue'
import ToDoItem from './components/ToDoItem.vue'
import ToDoForm from './components/ToDoForm.vue'
import uniqueId from 'lodash.uniqueid';
import {ref} from "vue";
let ToDoItems = ref([
  { id:uniqueId("to-do"), label: 'Learn Vue', done: false },
  { id:uniqueId("to-do"), label: 'Create a Vue project with the CLI', done: true },
  { id:uniqueId("to-do"), label: 'Have fun', done: true },
  { id:uniqueId("to-do"), label: 'Create a to-do list', done: false }
])

function addTodo(label) {
  ToDoItems.value.push({ id:uniqueId("to-do"), label: label, done: false })
}
function delTodo(label) {
  console.log("现在label："+label)
  ToDoItems.value.splice(ToDoItems.value.indexOf(ToDoItems.value.find(item=>item.label===label)), 1)
}

</script>

<template>
  <div >

    <h1>To-Do List</h1>
    <!--  <HelloWorld msg="Vite + Vue" />-->
    <ToDoForm @todo-added="addTodo" @todo-del="delTodo"/>
    <ul>
      <li v-for="item in ToDoItems" :key="item.id">
        <ToDoItem :id="item.id" :done="item.done" :label="item.label" />
      </li>

    </ul>


  </div>

</template>

<style scoped>

</style>
