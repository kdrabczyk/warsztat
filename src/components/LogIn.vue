<template>
<div class="container-fluid col-6 text-center rounded border border-black mt-2 p-3">
            
    <header class="text-center">
        <h2 class="text-2xl font-bold uppercase mb-1">
            Zaloguj się
        </h2>
        <p class="mb-4">Zaloguj się na portalu</p>
    </header>

    <form action="" @submit.prevent="handleLogin">
        <div class="mb-6">
            <label for="email" class="inline-block text-lg mb-2"
                >Email</label
            >
            <input
                type="email"
                class="border border-gray-200 rounded p-2 w-full"
                name="email"
                v-model="loginForm.email"
            />
        </div>

        <div class="mb-6">
            <label
                for="password"
                class="inline-block text-lg mb-2"
            >
                Hasło
            </label>
            <input
                v-model="loginForm.password"
                type="password"
                class="border border-gray-200 rounded p-2 w-full"
                name="password"
            />
        </div>

        <div class="mb-6">
            <button
                type="submit"
                class="bg-dark text-white rounded py-2 px-4 hover:bg-black"
            >
                Zaloguj się
            </button>
            <p v-if="loginError" class="error">{{ loginError }}</p>
        </div>

        <div class="mt-8">
            <p>
                Nie masz konta?
                <a href="register.html" class="text-laravel"
                    >Zarejestruj się</a
                >
            </p>
        </div>
    </form>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'LogIn',
data() {
    return {
      loginForm: {
        email: '',
        password: ''
      },
      loginError: ''
    }
  },
  props: {
        User: Array,
        isLoggedIn: Boolean,
        },

  methods: {
    handleLogin(){
        this.$store.dispatch('logIn', this.loginForm)
        //przekierowanie na stronę główną
        this.$router.push('/')
    }
}
}
  </script>