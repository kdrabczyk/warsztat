<template>
    <SignUp />
</template>

<script>
import SignUp from '../components/SignUp.vue'
export default {
    name: 'Signup',
      components: {
        SignUp
      },
    
      //jaki propsy przyjmuje
      props: {
        User: Array,
        },
    }
</script>