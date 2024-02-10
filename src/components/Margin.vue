<template>
<div class="container-fluid text-center rounded border border-black mt-2 p-3">
        <div class="row">
                <div class="col-12">
                        <h2 class="text-center">Części- zakup</h2>
                </div>
        </div>
        <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Lp.</th>
                        <th scope="col">Nazwa artykułu</th>
                        <th scope="col">Stara marża</th>
                        <th scope="col">Nowa marża</th>
                        <th scope="col">Edytuj</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in Parts">
                                                <th scope="row">{{ item.id}}</th>
                                                <td>{{ item.name }}</td>
                                                <td>{{ item.margin }}</td>
                                                <td>
                                                    <input type="text" v-model="item.newMargin" />
                                                </td>
                                                <td class="d-flex d-inline-block">
                                                    
                                                    <!-- magazynier wydaje na zewnątz- WZ + FV-->
                                                    <a href="#"><button type="button" class="btn btn-danger" @click="updateMargin(item)">Zmień marże</button></a>
                                                
                                                </td>


                                            
                    </tr>
                </tbody>
            </table>
    </div>
</template>
<script>
import { mapState } from 'vuex';
import axios from 'axios';

export default {
        name: 'Margin',
        props: {
        },
        computed: {
        ...mapState([ 'user', 'Parts', 'dbServices']),
        },
        methods: {
  async updateMargin(item) {
    try {
      const response = await axios.put(`/api/Part/${item.id}`, {
        
            id: item.id,
            name: item.name,
            quantity: item.quantity,
            inServiceDisposal: item.inServiceDisposal,
            price: item.price,
            margin: item.newMargin,
        });
        this.$store.dispatch('fetchParts');
        }
        catch (error) {
        console.error(error);
        }
  },
}
        
}
</script>
