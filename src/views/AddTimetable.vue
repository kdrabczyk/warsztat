<template>
    <AddTimeTable :User="User" />
</template>

<script>
import AddTimeTable from '../components/AddTimeTable.vue'
export default {
name: 'addTimetable',
  components: {
    AddTimeTable,
  },

  //jaki propsy przyjmuje
  props: {
    User: Object,
    },
}

</script>