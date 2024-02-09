<template>
    <div class="container-fluid  rounded border border-black mt-2 p-3">
            <form>
                <div class="mb-3">
                    <label for="name" class="form-label">Nazwa artykułu</label>
                    <input type="text" class="form-control" id="name" v-model="form.name">
                </div>
                <div class="mb-3">
                    <label for="quantity" class="form-label">Ilość</label>
                    <input type="number" class="form-control" id="quantity" v-model="form.quantity">
                </div>
                <div class="mb-3">
                    <label for="price" class="form-label">Cena</label>
                    <input type="number" class="form-control" id="price" v-model="form.price">
                </div>
                <div class="mb-3">
                    <label for="margin" class="form-label">Marża</label>
                    <input type="number" class="form-control" id="margin" v-model="form.margin">
                </div>
            </form>
        </div>
          <a href="#"><button type="button" class="btn btn-success" @click="submitForm">Dodaj</button></a>
            <a href="#"></a>
            <router-link class="nav-link"  to="/warehouse"><button type="button" class="btn btn-danger" >Anuluj</button></router-link>
    
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      form: {
        id: 0,
        name: null,
        quantity: null,
        inServiceDisposal: 0,
        price: null,
        margin: null,
      },
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await axios.post('/api/Part', this.form);
        console.log(response.data);
        this.$router.push('/warehouse');
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>