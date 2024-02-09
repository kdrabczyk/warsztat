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
           <tr v-for="item in mag" :key="id">
                            <th scope="row">{{ item.id}}</th>
                            <td>{{ item.name }}</td>
                            <td>{{ item.quantity }}</td>
                            <td>{{ item.inServiceDisposal }}</td>
                            <td>{{ item.price }}</td>
                            
            </tr>          
        </tbody>        
      </table>
      <div v-if="User.role == 'WAREHOUSEMAN'" class="d-flex d-inline-block">
                                <!--strona gdzie wybiera się część która już jest i dopisuje ilość, cenę + dokument do bazy-->
                                <router-link class="nav-link" to="/addparts"><button type="button" class="btn btn-success">Dodaj na stan magazynu</button></router-link>
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
                <th scope="col">Lp.</th>
                <th scope="col">Nazwa artykułu</th>
                <th scope="col">Ilość dla usługi</th>
                <th scope="col">Do przyjęcia usługi serwisowej nr</th>
                <th scope="col">Data zamówienia</th>
                <th scope="col">Data wydania na serwis</th>
                <th scope="col">Status</th>
                <th scope="col">Edytuj</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in serviceOrders" :key="id">
                            <th scope="row">{{ item.id}}</th>
                            <td>{{ item.name }}</td>
                            <td>{{ item.quantity }}</td>
                            <td>{{ item.serviceOrderNumber }}</td>
                            <td>{{ item.orderDate }}</td>
                            <td>{{ item.executionDate }}</td>
                            <td>{{ item.status }}</td>
                            <td v-if="User.role == 'WAREHOUSEMAN'" class="d-flex d-inline-block">
                                <!--component gdzie wybiera się ilość wydawanych + dokument WW do bazy-->
                                <a href="#"><button type="button" class="btn btn-primary">Wydaj na warsztat</button></a>
                            </td>
            </tr>
            </tbody>
          </table>
      </div>


</template>

<script>
export default {
    name: 'Mag',
    props: {
        User: Array,
        mag: Array,
        serviceOrders: Array,
    },
}
</script>