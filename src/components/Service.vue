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
                    <th scope="col">Pojazd</th>
                    <th scope="col">Usługa</th>
                    <th scope="col">Data przyjęcia</th>
                    <th scope="col">Data wykonania</th>
                    <th scope="col">Artykuły</th>
                    <th scope="col">Status</th>
                    <th scope="col">Edytuj</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="service in dbServices" :key="service.id">
                    <th scope="row">{{ service.id }}</th>
                    <td>{{ service.car }}</td>
                    <td>{{ service.name }}</td>
                    <td>{{ formatDate(service.orderDate) }}</td>
                    <td>{{ formatDate(service.executionDate) }}</td>
                    <td>{{ service.part }}</td>
                    <td>{{ service.status }}</td>
                    <td>Edytuj zamówienie nr {{ service.id  }}</td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
    
    <router-link class="nav-link" v-if="isLoggedIn !== false" to="/addtimetable"><button type="button" class="btn btn-success">Dodaj zamówienie</button></router-link>
</template>

<script>
import { formatDate } from 'date-fns';
export default {
    name: 'Service',
    props: {
        dbServices: Array,
        User: Array
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
        }
        
  },

};
</script>