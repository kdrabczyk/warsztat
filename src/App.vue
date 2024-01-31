<template>
  <Navbar :isLoggedIn="isLoggedIn" :User="User" @logOut="logOut"/>
  <router-view @isLoggedIN="isLoggedIN" :serviceOrders="serviceOrders" :buyOrders="buyOrders" :dbServices = "dbServices" :mag="mag" :docs="docs" :User="User"> </router-view>

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
    dbServices: Array,
    isLoggedIn: Boolean,
    User: Object,
    
    },
  data() {
    return {
      // dane jak niżej
      dbServices: [],
      User: {
        type: Object,
      },
      //dokumenty
      docs: [],
      // części na magazynie ogólnie
      mag:[],
      // tą wartość należy zmienić po zalogowaniu
      isLoggedIn: false,
      //zamówienia części- kupno/sprzedaż
      buyOrders: [],
      //zamówienia części- dla usług serwisowych
      serviceOrders: [],
    }
  },
  methods: {
    async fetchParts() {
            try {
              const response = await axios.get('api/Part/GetAll');
              this.mag = response.data;
              console.log(this.response.data);
            } catch (error) {
              console.error(error);
            }
          },
    async fetchServices() {
      try {
        const response = await axios.get('api/Timetable/GetAll');
        this.dbServices = response.data;
        console.log(this.response.data);
      } catch (error) {
        console.error(error);
      }
    },

    // async fetchParts() {
    //   try {
    //     const response = await axios.get('api/Part/GetAll');
    //     this.mag = response.data;
    //   } catch (error) {
    //     console.error(error);
    //   }
    // },
    async isLoggedIN(data){
      this.isLoggedIn = !this.isLoggedIn;
      this.User.name = data.name;
      this.User.role = data.role;
      this.User.token = data.token;
    },
    logOut() {
    this.isLoggedIn = false;
    this.User = {};
    this.$router.push('/login');
  }
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
      {
        id: 2,
        name: 'Pasek rozrządu VW Bora ',
        quantity: 2,
        orderDate: '12.01.24',
        executionDate: '22.01.24',
        status: 'W trakcie',
      },
      {
        id: 3,
        name: 'Tłumik wydechu Fiat Fiorino',
        quantity: 3,
        orderDate: '12.01.24',
        executionDate: '22.01.24',
        status: 'W trakcie',
      }

    ]
    this.mag =[
      {
        id: 1,
        name: 'Pasek rozrządu VW Golf 3',
        quantity: 3,
        inServiceDisposal: 1,
        price: 100,
      },
      {
        id: 2,
        name: 'Pasek rozrządu VW Bora ',
        quantity: 2,
        inServiceDisposal: 1,
        price: 50,
      },
      {
        id: 3,
        name: 'Tłumik wydechu Fiat Fiorino',
        quantity: 3,
        inServiceDisposal: 2,
        price: 200,
      }
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
      {
        id: 2,
        type: 'Faktura VAT',
        serviceNumber: 'FV 2/24',
        issueDate: '12.01.24',
        executionDate: '22.01.24',
        article: 'usługa',
        service: 'nie dotyczy',
        value: 'Wartość',
        document: 'link do dokumentu'
      },
      {
        id: 3,
        type: 'Faktura VAT',
        serviceNumber: 'FV 3/24',
        issueDate: '12.01.24',
        executionDate: '22.01.24',
        article: 'pasek rozrządu VW Bora',
        service: 'nie dotyczy',
        value: 'Wartość',
        document: 'link do dokumentu'
      }
      
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
      {
        id: 2,
        name: 'Pasek rozrządu VW Bora ',
        quantity: 1,
        serviceOrderNumber: 1,
        orderDate: '12.01.24',
        executionDate: '22.01.24',
        status: 'Wykonano',
      },
      {
        id: 3,
        name: 'Tłumik wydechu Fiat Fiorino',
        quantity: 1,
        serviceOrderNumber: 1,
        orderDate: '12.01.24',
        executionDate: '22.01.24',
        status: 'Wykonano',
      }
    ]

  },
  mounted() {
    this.fetchServices();
    this.fetchParts();
  }
}

</script>