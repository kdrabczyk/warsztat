<template>
    <AddServiceDetails :service="service"/>
</template>

<script>
import AddServiceDetails from '../components/AddServiceDetails.vue'
export default {
    name: 'ServiceDetails',
      components: {
        AddServiceDetails
      },
      props: {
        service: {
            type: Object,
            required: true
        },
    },
    
    }
</script>