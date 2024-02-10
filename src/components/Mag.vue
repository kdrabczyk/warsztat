<template>
<div class="container-fluid text-center rounded border border-black mt-2 p-3">
    <div class="row">
        <div class="col-12">
            <h2 class="text-center">Magazyn</h2>
        </div>
    </div>
    <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Lp.</th>
            <th scope="col">Nazwa artykułu</th>
            <th scope="col">Ilość</th>
            <th scope="col">Wydane do usługi serwisowej</th>
            <th scope="col">Cena</th>
          </tr>
        </thead>
        <tbody>
           <tr v-for="item in Parts" :key="item.id">
                            <th scope="row">{{ item.id}}</th>
                            <td>{{ item.name }}</td>
                            <td>{{ item.quantity }}</td>
                            <td>{{ item.inServiceDisposal }}</td>
                            <td>{{ item.price }}</td>
                            
            </tr>          
        </tbody>        
      </table>
      <div v-if="user.role == 'WAREHOUSEMAN'" class="d-flex d-inline-block">
                                <!--strona gdzie wybiera się część która już jest i dopisuje ilość, cenę + dokument do bazy-->
                                <router-link class="nav-link" to="/addparts"><button type="button" class="btn btn-success">Dodaj na stan magazynu</button></router-link>
    
                                <!--strona gdzie wybiera się część która już jest i dopisuje ilość, cenę + dokument do bazy-->
                                <router-link class="nav-link" to="/margin"><button type="button" class="btn btn-danger">Zmień marże części</button></router-link>
      </div>
  </div>
    
  <div class="container-fluid text-center rounded border border-black mt-2 p-3">
        <div class="row">
            <div class="col-12">
                <h2 class="text-center">Części dla usług serwisowych</h2>
            </div>
        </div>
        <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">Numer id usługi</th>
                <th scope="col">Nazwa usługi</th>
                <th scope="col">Numer id artykułu</th>
                <th scope="col">Nazwa artykułu potrzebnego do wykonania usługi</th>
                <th scope="col">Data ostatniej zmiany statusu usługi</th>
                <th scope="col">Status</th>
                <th scope="col">Akcja magazyniera</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in warehouseServices" :key="item.id" >
                            <th scope="row" >{{ item.id}}</th>
                            <td>{{ item.name }}</td>
                            <td>{{ item.part }}</td>
                            <td>{{ Parts.find(part => part.id === item.part)?.name }}</td>
                            <td>{{ item.orderDate }}</td>
                            <td>{{ item.status }}</td>
                            <td v-if="user.role == 'WAREHOUSEMAN'" class="d-flex d-inline-block">
                                <!--component gdzie wybiera się ilość wydawanych + dokument WW do bazy-->
                                <button type="button" class="btn btn-primary" @click="wydaj(item.part, item.id)">Wydaj na warsztat</button>
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
    name: 'Mag',
    props: {
    },
    computed: {
    ...mapState(['isLogged', 'user', 'Parts', 'dbServices']),
  warehouseServices() {
    return this.dbServices.filter(service => service.status === 'WAREHOUSE');
  }
  },
  mounted() {
    this.$store.dispatch('fetchdbServices');
    this.$store.dispatch('fetchParts');
  },
  methods: {
    async wydaj(partId, serviceId) {
      try {
        const response = await axios.put('/api/Warehouse', {partId: partId, partQuantity: 1});
        
        const response2 = await axios.put('/api/Warehouse/ChangeToService2Status', {id: serviceId});
     
        this.$store.dispatch('fetchParts');

        this.$store.dispatch('fetchdbServices');
        this.$router.push('/warehouse');
        
      } catch (error) {
        console.error(error);
      }
    },
  }
  
    
}
</script>