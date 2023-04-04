<script setup lang="ts">
import { defineAsyncComponent } from 'vue';

const TodoList = defineAsyncComponent(() => import('./components/TodoList.vue'))
</script>

<template>
  <div class="main">
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <TodoList />
    </div>
  </div>
</template>

<style scoped>
.logo {
  display: block;
  margin: 0 auto;
}

@media (min-width: 1024px) {
  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
