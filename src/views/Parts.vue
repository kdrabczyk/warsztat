<template>
    <Part :mag="mag" :User="User" :buyOrders="buyOrders"/>
</template>

<script>
import Part from '../components/Part.vue'

export default {
name: 'Partss',
  components: {
    Part
  },

  //jaki propsy przyjmuje
  props: {
    buyOrders: Array,
    User: Array,
    parts: Array,
    },
}
</script>