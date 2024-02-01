<template>
    <LogIn :isLoggedIn="isLoggedIn" />
</template>

<script>
import LogIn from '../components/LogIn.vue'
export default {
    name: 'Login',
      components: {
        LogIn
      },
    
      //jaki propsy przyjmuje
      props: {
        User: Array,
        isLoggedIn: Boolean,
        },
        methods: {
        async isLoggedIN() {
          this.$emit('isLoggedIN');
        },
}
    }
</script>