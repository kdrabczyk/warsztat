<template>
  <Navbar />
  <router-view> </router-view>

  <Footer />
</template>

<script>
import axios from 'axios'
import Navbar from './components/Navbar.vue'
import 'bootstrap/dist/css/bootstrap.css'
import Footer from './components/Footer.vue'
import Service from './components/Service.vue'
import LogIn from './components/LogIn.vue'
import Docs from './components/Docs.vue'
import Mag from './components/Mag.vue'
import Part from './components/Part.vue'
import Parts from './views/Parts.vue'
import AddParts from './views/AddParts.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
    Service,
    LogIn,
    Docs,
    Mag,
    Part,
    Parts,
    AddParts,
    
  },
  props: {
    
    },
  data() {
    return {
      //dokumenty
      docs: [],
      // części na magazynie ogólnie
      mag:[],
      //zamówienia części- kupno/sprzedaż
      buyOrders: [],
      //zamówienia części- dla usług serwisowych
      serviceOrders: [],
    }
  },
  methods: {
    // async fetchParts() {
    //         try {
    //           const response = await axios.get('api/Part/GetAll');
    //           this.mag = response.data;
    //           console.log(this.response.data);
    //         } catch (error) {
    //           console.error(error);
    //         }
    //       },
},

  created() {
    
    this.buyOrders= [
      {
        id: 1,
        name: 'Pasek rozrządu VW Golf 3',
        quantity: 3,
        orderDate: '12.01.24',
        executionDate: '22.01.24',
        status: 'W trakcie',
      },

    ]
    this.mag =[
      {
        id: 1,
        name: 'Pasek rozrządu VW Golf 3',
        quantity: 3,
        inServiceDisposal: 1,
        price: 100,
      },
    ]
    this.docs=[
      {
        id: 1,
        type: 'Faktura VAT',
        serviceNumber: 'FV 1/24',
        issueDate: '12.01.24',
        executionDate: '22.01.24',
        article: 'pasek rozrządu VW Bora',
        service: 'nie dotyczy',
        value: 'Wartość',
        document: 'link do dokumentu'
      },
      
    ]
    this.serviceOrders= [
      {
        id: 1,
        name: 'Pasek rozrządu VW Golf 3',
        quantity: 1,
        serviceOrderNumber: 1,
        orderDate: '12.01.24',
        executionDate: null,
        status: 'W trakcie',
      },
    ]

  },
  mounted() {
  }
}

</script>