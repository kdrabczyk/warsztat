<template>
<Mag :serviceOrders="serviceOrders" :mag="mag" :User="User"/>
</template>

<script>
import Mag from '../components/Mag.vue'
export default {
name: 'Warehouse',
  components: {
    Mag
  },

  //jaki propsy przyjmuje
  props: {
    User: Array,
    mag: Array,
    serviceOrders: Array
    },
}
</script>