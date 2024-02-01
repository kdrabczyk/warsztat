<template>
    <Docs :docs="docs" :User="User"/>
</template>

<script>
import Docs from '../components/Docs.vue'
export default {
name: 'Documents',
  components: {
    Docs,
  },

  //jaki propsy przyjmuje
  props: {
    User: Array,
    docs: Array,
    },
}



</script>