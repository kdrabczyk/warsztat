<template>
  <nav class="navbar navbar-expand-md bg-body-tertiary" data-bs-theme="dark">
  <div class="container-fluid">
    <div class="rounded border border-white text-center d-flex align-items-center p-2">
            <router-link class="navbar-brand" to="/">
            <img src="../assets/logo.jpg" alt="Logo" height="65" class="rounded d-inline-block align-text-top">
          </router-link>
            <a>
                <span class="text-center text-white">Warsztat u Henia</span>
            </a>
            </div>
  
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" v-if="isLoggedIn !== false" to="/" active-class="active">Przegląd</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" v-if="isLoggedIn !== false" to="/services">Usługa serwisowa</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" v-if="isLoggedIn !== false" to="/parts">Części</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" v-if="isLoggedIn !== false" to="/warehouse">Magazyn</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
      <div class="bg-secondary ">
        <div class="d-flex flex-row" v-if="isLoggedIn !== false">
          <div class="p-2 flex-grow-1" v-if="User && User.name">Witaj {{User.name}}!</div>
          <div class="p-2"><button @click="logOut">Wyloguj się</button></div>
        </div>
        <div class="d-flex flex-row" v-else="isLoggedIn !== false">
          <div class="p-2 flex-grow-1">Witaj Gościu!</div>
          <router-link class="nav-link" to="/signup"><button>Zarejestruj się</button></router-link>
          <router-link class="nav-link" to="/login"><button>Zaloguj się</button></router-link>
        </div>
      </div>
</template>

<script>
export default {
    name: 'Service',
    props: {
        User: Array,
        isLoggedIn: Boolean,
    },
    methods: {
        logOut() {
            this.$emit('logOut');
        }
    }
}    


</script>