<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import Draggable from 'vuedraggable'
import { TodoStatus, type GroupLabelRecord } from '../types/todo-types'
import useTodos from '@/store/useTodos';

const CreateTodo = defineAsyncComponent(() => import('./CreateTodo.vue'))

interface Props {
  status: TodoStatus;
}
const props = defineProps<Props>()
const { getTodosByStatus, deleteTodo, updateTodo } = useTodos()
const todoList = getTodosByStatus(props.status)

const groupLabel: GroupLabelRecord = {
  [TodoStatus.Pending]: 'Pending',
  [TodoStatus.InProgress]: 'In Progress',
  [TodoStatus.Completed]: 'Completed'
}

const onDraggableChange = (payload: any) => {
  console.log(payload)
  if (payload?.added?.element) {
    updateTodo(payload?.added?.element, props.status)
  }
}

</script>
<template>
  <div class="group-wrapper flex-1 p-5 ">
    <h3>{{ groupLabel[props.status] }}</h3>
      <Draggable :list="todoList" class="draggable" group="todos" item-key="id" @change="onDraggableChange">
        <template #item="{ element: todo }">
          <li class="p-4 mb-3">
            {{ todo.title }}
            <span class="delete-todo cursor-pointer float-right" @click="deleteTodo(todo)">x</span>
            <span class="element-description">{{ todo.description }}</span>
          </li>
        </template>
      </Draggable>
      <CreateTodo :status="props.status" />
  </div>
</template>


<style scoped lang="scss">
.group-wrapper {
  background-color: rgb(85, 122, 134);
  width: 300px;

  .draggable {
    min-height: 200px;
  }

  li {
    color: rgb(85, 122, 134);
    background-color: aliceblue;

    .todo-description {
      font-size: 12px;
    }
  }

}
</style>
