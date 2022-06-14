<template>
  <h1>To Do List</h1>
  <form-task @onSubmit="handleSubmit"/>
  <task-list :items="items" @remove="removeItem"/>
</template>

<script>
import { ref } from 'vue'
import TaskList from '@/components/TaskList';
import FormTask from '@/components/FormTask';

export default {
  components: {
    FormTask, TaskList
  },
  setup() {
    const items = ref([
      {
        id: 1,
        body: 'hello vue 1',
        date: new Date(Date.now()).toLocaleString(),
        deathLine: new Date(Date.now()).toLocaleString(),
      },
      {
        id: 2,
        body: 'hello vue 2',
        date: new Date(Date.now()).toLocaleString(),
        deathLine: new Date(Date.now()).toLocaleString(),
      },
      {
        id: 3,
        body: 'hello vue 3',
        date: new Date(Date.now()).toLocaleString(),
        deathLine: new Date(Date.now()).toLocaleString(),
      },
    ])

    const handleSubmit = item =>items.value.push(item)

    return {
      items,
      handleSubmit
    }
  },
  methods: {
    removeItem(item) {
      this.items = this.items.filter(p =>p.id !== item.id)
    }
  }
}
</script>

<style>
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 80px;
  padding-right: 80px;
}

html {
  background: #C9FFBF; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #FFAFBD, #C9FFBF); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #FFAFBD, #C9FFBF); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

li {
  list-style-type: none; /* Убираем маркеры */
}

ul {
  margin-left: 0;
  padding-left: 0;
}
</style>