<template>

  <form @submit.prevent="onSubmit">

    <div class="inputText flex justify-content-between flex-wrap align-items-center">
      <TextareaPrime class="col-9" :autoResize="true" v-model="body" required placeholder="Новая задача"></TextareaPrime>
      <CalendarPrime class="death col-3" placeholder="Срок" v-model="deathLine" :showButtonBar="true"></CalendarPrime>
    </div>
    <ButtonPrime class="col-12" type="submit" label="Создать"/>
  </form>

</template>

<script>
import { ref } from 'vue'
export default {
  emits: ['onSubmit'],
  setup(_, { emit }) {
    const body = ref('')
    const deathLine = ref('')

    const onSubmit = () => {
      emit('OnSubmit', {
         id: Math.round(Math.random() * 30),
         body: body.value,
         date: new Date(Date.now()).toLocaleString(),
         deathLine: deathLine.value
       })
      body.value = ''
      deathLine.value = ''
    }
    return {body, deathLine, onSubmit}
  }
}

</script>

<style>
  form {
    background-color: aliceblue;
    padding:20px;
    border-radius: 10px;
    margin-bottom: 50px;
  }
  .inputText {
    margin-bottom:10px;
  }
  .death {
    height: 70px;
  }
</style>