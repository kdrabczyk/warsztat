<template>
    <form  @submit.prevent="submitForm">
      <div class="mb-3">
        <label for="car" class="form-label fw-bold">Marka:</label><br>
        <p id="car">{{ service.car }}</p><br>
  
        <label for="model" class="form-label fw-bold">Model:</label><br>
        <p id="model">{{ service.model }}</p><br>
  
        <label for="plates" class="form-label fw-bold">Numer Rejestracyjny:</label><br>
        <p id="plates">{{ service.plates }}</p><br>
  
        <label for="name" class="form-label fw-bold">Nazwa usługi:</label><br>
        <input type="text" class="form-control" id="name" name="name" v-model="service.name"><br>
  
        <label for="orderDate" class="form-label fw-bold">Data wizyty:</label><br>
        <p id="orderDate">{{ formatDate(service.orderDate) }}</p><br>
  
        <label for="executionDate" class="form-label fw-bold">Data wykonania:</label><br>
        <input type="datetime-local" class="form-control" id="executionDate" name="executionDate" v-model="service.executionDate" :step="1"><br>
  
        <label for="part" class="form-label fw-bold">Część:</label><br>
        <p id="part">{{ service.part }}</p><br>
  
        <label for="status" class="form-label fw-bold">Status:</label><br>
        <p id="status">{{ service.status }}</p><br>
  
        <input type="submit" value="Submit">
      </div>
    </form>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'AddServiceDetails',
    props: {
      service: {
        type: Object,
        required: true,
      },
    },
    methods: {
      formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
      },
      async submitForm() {
        try {
          console.log(this.service);
          const response = await axios.put(`/api/TimeTable/${this.service.id}`, this.service, {
            headers: {
              'Authorization': `Bearer ${this.$store.state.user.token}`
            }
          });
          this.$store.dispatch('fetchdbServices');
          console.log(response);
          this.$router.push('/services');
        } catch (error) {
          console.error(error);
        }
      },
    },
  };
  </script>