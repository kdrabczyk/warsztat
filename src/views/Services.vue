<template>
    <Service  :dbServices = "dbServices" :User="User"/>
</template>

<script>
import Service from '../components/Service.vue'
export default {
    name: 'Services',
      components: {
        Service
      },
    
      //jaki propsy przyjmuje
      props: {
        User: Array,
        dbServices: Array,
        },
    }
</script>