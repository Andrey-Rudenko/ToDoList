<template>

  <select v-model="sortBy">
    <option value="date">Сортировка по дате</option>
    <option value="deathLine">Сортировка по срокам</option>
  </select>
  <ul>
    <item-of-list v-for="item in sorteredItems" :key="item.id" :item="item" @remove="$emit('remove', item)"/>
    <ScrollTop></ScrollTop>
  </ul>
</template>

<script>
import {ref, computed} from 'vue'
import ItemOfList from "@/components/ItemOfList";

export default {
  components: {ItemOfList},
  props: {
    items: {
      type: Array,
      reqired: true
    }
  },

  setup(props) {
    const sortBy = ref('date')
    const sorteredItems = computed(() => {
      return props.items.sort((a, b) => {
        if (a[sortBy.value] > b[sortBy.value]) return -1
        if (a[sortBy.value] < b[sortBy.value]) return 1
      })
    })
    return {sortBy, sorteredItems}
  }
}
</script>
<style>
select {
  border-radius: 5px;
  border-color: aliceblue;
  background-color: aliceblue;
  padding:5px;
}
</style>