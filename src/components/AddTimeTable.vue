<template>
  <form  @submit.prevent="submitForm">
      <div class="mb-3">
      <label for="name" class="form-label fw-bold">Marka:</label><br>
      <input type="text" class="form-control" id="name" name="name" v-model="form.car"><br>
    
      <label for="name" class="form-label fw-bold">Model:</label><br>

      <input type="text" class="form-control" id="name" name="name" v-model="form.model"><br>
      <label for="name" class="form-label fw-bold">Numer Rejestracyjny:</label><br>
      <input type="text" class="form-control" id="name" name="name" v-model="form.plates"><br>

      <label for="orderDate" class="form-label fw-bold">Data wizyty:</label><br>
      <input type="datetime-local" class="form-control" id="orderDate" name="orderDate" v-model="form.orderDate" :step="1"><br>
      <input type="submit" value="Submit">
      </div>
  </form>

</template>

<script>
import axios from 'axios';

export default {
  props: {
      User: Object,
      },
  data() {
  return {
      
  form: {
      id: 0,
      userId: 0,
      user: 'string',
      orderDate: '2022-01-01T00:00:00"',
      car: '',
      model: '',
      plates: '',
      part: 0,
      name: 'string',
      executionDate: '2022-01-01T00:00:00',
      status: 'string',
      

  }
  };
  },

methods: {
  async submitForm() {
    try {
      console.log(this.form);
      const response = await axios.post('/api/TimeTable', this.form, {
      headers: {
        'Authorization': `Bearer ${this.$store.state.user.token}`
      }
      });
      console.log(response);
      this.$router.push('/services');
    } catch (error) {
      console.error(error);
    }

  },
  
  
}
}
</script>