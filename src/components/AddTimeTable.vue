<template>
    <form  @submit.prevent="submitForm">
        <div class="mb-3">
        <label for="name">Car:</label><br>
        <input type="text" id="name" name="name" v-model="form.car"><br>
        </div>
        <label for="orderDate">Order Date:</label><br>
        <input type="datetime-local" id="orderDate" name="orderDate" v-model="form.orderDate" :step="1"><br>
        <input type="submit" value="Submit">
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
          'Authorization': `Bearer ${this.User.token}`
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