<template>
  <AddPart :User="User"/>
</template>

<script>
import AddPart from '../components/AddPart.vue';
export default {
name: 'Documents',
  components: {
    AddPart,
    AddPart
},

  //jaki propsy przyjmuje
  props: {
    User: Array,
    },
}

</script>