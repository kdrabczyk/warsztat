<template>
    <div class="container-fluid text-center rounded border border-black mt-2 p-3">
        <div class="row">
            <div class="col-12">
                <h2 class="text-center">Dokumenty</h2>
            </div>
        </div>
        <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">Lp.</th>
                <th scope="col">Rodzaj dokumentu</th>
                <th scope="col">Nr usługi</th>
                <th scope="col">Data wydania dokumentu</th>
                <th scope="col">Data wykonania/sprzedaży</th>
                <th scope="col">Artykuł</th>
                <th scope="col">Usługa</th>
                <th scope="col">Wartość</th>
                <!-- Przycisk edytuj uruchamia strone zmiany lub kontener pod nacisniętym, gdzie serwisant może zamówić rzecz lub wydać klientowi -->
                <th scope="col">Dokument</th>
              </tr>
            </thead>
            <tbody>
                <tr v-for="doc in docs" :key="doc.id">
                    <th scope="row">{{ doc.id }}</th>
                    <td>{{ doc.type }}</td>
                    <td>{{ doc.serviceNumber }}</td>
                    <td>{{ doc.issueDate }}</td>
                    <td>{{ doc.executionDate }}</td>
                    <td>{{ doc.article }}</td>
                    <td>{{ doc.service }}</td>
                    <td>{{ doc.value }}</td>
                    <td>{{ doc.document }}</td>
                    <td></td>
                </tr>
            </tbody>
          </table>
      </div>
      <a href="#"><button type="button" class="btn btn-dark">Wygeneruj raport o stanie magazynu</button></a>
</template>

<script>
export default {
    name: 'Docs',
    props: {
        docs: Array,
        User: Array
    },
    methods:{
        showDocs() {
            console.log(this.docs);
        }
    },
    
}
</script>