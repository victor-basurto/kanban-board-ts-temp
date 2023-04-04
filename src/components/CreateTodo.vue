<script setup lang="ts">
import { reactive, ref } from 'vue';
import type { TodoStatus, NewTodoCreateType } from '@/types/todo-types';
import useTodos from '@/store/useTodos';

interface Props {
  status: TodoStatus
}
const props = defineProps<Props>()
const { addNewTodo } = useTodos()
const shouldDisplayForm = ref(false)
const newTodo = reactive<NewTodoCreateType>({
  title: '',
  description: '',
  status: props.status
})
const resetForm = () => {
  shouldDisplayForm.value = false;
  newTodo.title = '',
  newTodo.description = ''
}
const handleOnSubmit = () => {
  addNewTodo({
    id: Math.random() * 1000000000,
    ...newTodo
  })
  resetForm()
}
</script>
<template>
  <div>
    <h3 v-if="!shouldDisplayForm" @click="shouldDisplayForm = !shouldDisplayForm">Add New</h3>
    <template v-else>
      <form  @submit.prevent="handleOnSubmit">
        <div>
          <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text" placeholder="Title" v-model="newTodo.title">
        </div>
        <div>
          <textarea class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
           type="text" placeholder="Description" v-model="newTodo.description"></textarea>
        </div>
        <div class="flex flex-col">
          <button
            bg="gray-500 hover:gray-600"
            text="sm gray-100"
            font="font-medium"
            p="y-2 x-6"
            border="rounded">
            Submit
          </button>
          <button
            @click="resetForm"
            bg="red-500 hover:red-600"
            text="sm gray-100"
            font="font-medium"
            p="y-2 x-6"
            border="rounded">
            Cancel
          </button>
        </div>
      </form>
    </template>
  </div>
</template>


<style scoped>

</style>
