<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { TodoStatus } from '../types/todo-types'

const TodoGroup = defineAsyncComponent(() => import('./TodoGroup.vue'))
</script>
<template>
  <div class="groups-wrapper flex justify-around gap-4">
    <TodoGroup :status="TodoStatus.Pending" />
    <TodoGroup :status="TodoStatus.InProgress" />
    <TodoGroup :status="TodoStatus.Completed" />
  </div>
</template>


<style scoped>

</style>
