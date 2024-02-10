<template>
    <div class="container-fluid text-center rounded border border-black mt-2 p-3">
        <div class="row">
            <div class="col-12">
                <h2 class="text-center">Usługi</h2>
            </div>
        </div>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Lp.</th>
                    <th scope="col">Marka</th>
                    <th scope="col">Model</th>
                    <th scope="col">Rejestracja</th>
                    <th scope="col">Usługa</th>
                    <th scope="col">Data przyjęcia</th>
                    <th scope="col">Data ostatniej zmiany statusu</th>
                    <th scope="col">Numer id artykułu</th>
                    <th scope="col">Status</th>
                    <th scope="col">Edytuj</th>
                </tr>
            </thead>
            <tbody>
                <tr v-if="this.user.role !== 'CLIENT'" v-for="service in $store.state.dbServices" :key="service.id">
                    <th scope="row">{{ service.id }}</th>
                    <td>{{ service.car }}</td>
                    <td>{{ service.model }}</td>
                    <td>{{ service.plates }}</td>
                    <td>{{ service.name }}</td>
                    <td>{{ formatDate(service.orderDate) }}</td>
                    <td>{{ formatDate(service.executionDate) }}</td>
                    <td>{{ service.part }}</td>
                    <td>{{ service.status }}</td>
                    <td>
                       
                        <router-link v-if="user.role == 'SERVICEMAN' && service.status == 'SERVICE1'"
                        :to="{ 
                            name: 'ServiceDetails', 
                            params: { id: service.id }}"
                        >
                        <button type="button" class="btn btn-success">Dodaj opis i część serwisową</button>
                        </router-link>
                        <button @click="Zakończ(service.id)" v-if="user.role == 'SERVICEMAN' && service.status == 'SERVICE2'" type="button" class="btn btn-success" >Zatwierdz wykonanie</button>
                        <router-link class="nav-link" v-else-if="user.role == 'CLIENT'" to="/addtimetable"><button type="button" class="btn btn-success">Reklamacja</button></router-link>
                    </td>
                </tr>
                <tr v-if="this.user.role == 'CLIENT'" v-for="service in clientdbServices" :key="service.id">
                    <th scope="row">{{ service.id }}</th>
                    <td>{{ service.car }}</td>
                    <td>{{ service.model }}</td>
                    <td>{{ service.plates }}</td>
                    <td>{{ service.name }}</td>
                    <td>{{ formatDate(service.orderDate) }}</td>
                    <td>{{ formatDate(service.executionDate) }}</td>
                    <td>{{ service.part }}</td>
                    <td>{{ service.status }}</td>
                    <td>
                       
                        <router-link v-if="user.role == 'SERVICEMAN' && service.status == 'SERVICE1'"
                        :to="{ 
                            name: 'ServiceDetails', 
                            params: { id: service.id }}"
                        >
                        <button type="button" class="btn btn-success">Dodaj opis i część serwisową</button>
                        </router-link>
                        <button @click="Zakończ(service.id)" v-if="user.role == 'SERVICEMAN' && service.status == 'SERVICE2'" type="button" class="btn btn-success" >Zatwierdz wykonanie</button>
                        <router-link class="nav-link" v-else-if="user.role == 'CLIENT' && service.status == 'FINISHED'" to="/addtimetable"><button type="button" class="btn btn-success">Reklamacja</button></router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    
    <router-link class="nav-link" v-if="this.$store.isLogged !== false" to="/addtimetable"><button type="button" class="btn btn-success">Dodaj zamówienie</button></router-link>
</template>

<script>
import { mapState } from 'vuex';
import axios from 'axios';

import { formatDate } from 'date-fns';
export default {
    name: 'Service',
    props: {
    },
    computed: {
    ...mapState(['isLogged', 'user', 'dbServices']),
    clientdbServices() {
        return this.dbServices.filter(service => service.userId === this.user.id);
    }
  },
    methods: {
    // Definiowanie formatowania daty- uwaga filtry już nie są wspierane w Vue 3
    formatDate(value) {
        if (value){
            const date = new Date(value);
        const formattedDate = formatDate(date, 'dd.MM.yyyy');
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes} ${formattedDate}`;
        }
        },
    async Zakończ(idToSent) {
        try{
            const response2 = await axios.put('/api/Service/EndOrder', {id: idToSent});
            console.log(response2.data);
            this.$store.dispatch('fetchdbServices'); 
        } catch (error) {
        console.error(error);
        }
    },
    mounted(){
      this.$store.dispatch('fetchdbServices');
    }
    

},
}
</script>