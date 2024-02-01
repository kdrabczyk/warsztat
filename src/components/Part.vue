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
                <th scope="col">Ilość</th>
                <th scope="col">Data zamówienia</th>
                <th scope="col">Data wydania klientowi</th>
                <th scope="col">Status</th>
                <th scope="col">Edytuj</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in buyOrders" :key="id">
                            <th scope="row">{{ item.id}}</th>
                            <td>{{ item.name }}</td>
                            <td>{{ item.quantity }}</td>
                            <td>{{ item.orderDate }}</td>
                            <td>{{ item.executionDate }}</td>
                            <td>{{ item.status }}</td>
                            <td v-if="User.role == 'WAREHOUSEMAN'" class="d-flex d-inline-block">
                              
                              <!-- magazynier wydaje na zewnątz- WZ + FV-->
                              <a href="#"><button type="button" class="btn btn-danger">Wydaj klientowi</button></a>
                            </td>
                            <td v-else-if="User.role == 'CUSTOMER'" class="d-flex d-inline-block">
                                <!--klient dodaje zamówienie do bazy tworzy dane dla dokumentów w tabeli dokumentów ZL-->
                              <a href="#"><button type="button" class="btn btn-success">Zamów</button></a>
            
                            </td>
                            <td v-else="User.ROLE == 'customer'" class="d-flex d-inline-block">
                            
                            </td>


                          
              </tr>
            </tbody>
          </table>
      </div>

      

</template>

<script>
export default {
    name: 'Part',
    props: {
        mag: Array,
        User: Array,
        buyOrders: Array,
    },
    
}
</script>