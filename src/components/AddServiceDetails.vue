<template>
    <div class="container-fluid col-6 text-center rounded border border-black mt-2 p-3">
      <h1 class="text-center">Szczegóły usługi</h1>
    <form  @submit.prevent="submitForm">
      <div class="mb-3">
        <label for="car" class="form-label fw-bold">Marka:</label><br>
        <p id="car">{{ service.car }}</p><br>
  
        <label for="model" class="form-label fw-bold">Model:</label><br>
        <p id="model">{{ service.model }}</p><br>
  
        <label for="plates" class="form-label fw-bold">Numer Rejestracyjny:</label><br>
        <p id="plates">{{ service.plates }}</p><br>
  
        <label for="name" class="form-label fw-bold">Nazwa usługi:</label><br>
        <input type="text" class="form-control" id="name" name="name" v-model="form.name"><br>
  
        <label for="orderDate" class="form-label fw-bold">Data wizyty:</label><br>
        <p id="orderDate">{{ formatDate(service.orderDate) }}</p><br>
  
        <label for="part" class="form-label fw-bold">Część:</label><br>
        <select class="form-select" id="part" name="part" v-model="form.partId">
            <option v-for="part in Parts" :key="part.id" :value="part.id">{{ part.name }}</option>
        </select><br>
  
        <label for="status" class="form-label fw-bold">Status:</label><br>
        <p id="status">{{ service.status }}</p><br>
  
        <a href="#"><button type="button" class="btn btn-success" @click="submitForm">Dodaj dane</button></a>
            <a href="#"></a>
      </div>
    </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import { mapState } from 'vuex';

  export default {
    name: 'AddServiceDetails',
    computed: {
    ...mapState(['isLogged', 'Parts'])
  },
  data() {
    return {
      form: {
        id: this.service.id,
        name: null,
        partId: null,
        executionDate: "2024-02-09T18:05:09.399Z",
        status: "string",
      },
    };
  },
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
        const response = await axios.put('/api/Service', this.form);
        console.log(response.data);
        this.$store.dispatch('fetchdbServices');
        this.$router.push('/services');
      } catch (error) {
        console.error(error);
      }
    },
    },
    mounted() {
    this.$store.dispatch('fetchParts');
  },
  };
  </script>