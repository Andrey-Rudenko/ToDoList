<template>
  <li>
    <div class="card">
      <div class="flex justify-content-between flex-wrap card-container purple-container">
        <div class="task_content ">
          <p>{{item.date}}, срок: {{item.deathLine}}</p>
          <h4>{{ item.body }}</h4>
        </div>
        <div ><ButtonPrime v-on:click="$emit('remove', item)" label="Сделано" icon="pi pi-check" class="button_done"  /></div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      reqired: true
    }
  }
}
</script>
<style>
li {
  background-color: aliceblue;
  border-radius: 10px;
}
.task_content {
  width: 70%;
  word-wrap: break-word;
}
.card {
  margin-bottom: 10px;
  padding:15px;
}
p {
  margin:0;
}
h4 {
  margin: 5px;
}
</style>