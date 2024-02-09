<template>
  <div id="nabar">
  <nav class="navbar navbar-expand-md bg-body-tertiary" data-bs-theme="dark">
  <div class="container-fluid">
    <div class="rounded border border-white text-center d-flex align-items-center p-2">
            <router-link class="navbar-brand" to="/">
            <img src="../assets/logo2.jpg" alt="Logo" height="65" class="rounded d-inline-block align-text-top">
          </router-link>
            <a>
                <span class="text-center text-white fw-bold">Wrenches & Chances</span>
            </a>
    </div>
  
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" v-if="$store.state.isLogged !== false" to="/" active-class="active">Przegląd</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" v-if="$store.state.isLogged !== false" to="/services">Usługa serwisowa</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" v-if="$store.state.isLogged == true && $store.state.user.role !== 'CLIENT'" to="/warehouse">Magazyn</router-link>
        </li>
      </ul>
    </div>
  </div>
  </nav>

  <div class="bg-secondary ">
    <div class="d-flex flex-row" v-if="isLogged">
      <div class="p-2 flex-grow-1" v-if="user && user.name">Witaj {{user.name}}! Zalogowałeś się jako 
        <span v-if="user.role === 'CLIENT'">Klient</span>
        <span v-else-if="user.role === 'ADMIN'">Administrator</span>
        <span v-else-if="user.role === 'WAREHOUSEMAN'">Magazynier</span>
        <span v-else-if="user.role === 'SERVICEMAN'">Serwisant</span>
      
      </div>
      <div class="p-2"><button @click="logOut">Wyloguj się</button></div>
    </div>
    <div class="d-flex flex-row" v-else>
      <div class="p-2 flex-grow-1">Witaj Gościu!</div>
      <router-link class="nav-link" to="/signup"><button>Zarejestruj się</button></router-link>
      <router-link class="nav-link" to="/login"><button>Zaloguj się</button></router-link>
    </div>
  </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Service',
  computed: {
    ...mapState(['isLogged', 'user'])
  },
  methods: {
    logOut() {
      this.$store.dispatch('logOut');
      this.$router.push('/login');
    }
  }
};  
</script>