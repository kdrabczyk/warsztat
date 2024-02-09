<template>
    <div class="container-fluid col-6 text-center rounded border border-black mt-2 p-3">
            
            <header class="text-center">
                <h2 class="text-2xl font-bold uppercase mb-1">
                    Zarejestruj się
                </h2>
                <p class="mb-4">Zarejestruj się na portalu</p>
            </header>

            <form action="" @submit.prevent="registerUser">
                <div class="mb-6">
                    <label for="name" class="inline-block text-lg mb-2">
                        Imię
                    </label>
                    <input
                        type="text"
                        class="border border-gray-200 rounded p-2 w-full"
                        name="name"
                        v-model="form.name"
                    />
                </div>
                <div class="mb-6">
                    <label for="surname" class="inline-block text-lg mb-2">
                        Nazwisko
                    </label>
                    <input
                        type="text"
                        class="border border-gray-200 rounded p-2 w-full"
                        name="surname"
                        v-model="form.surname"
                    />
                </div>

                <div class="mb-6">
                    <label for="email" class="inline-block text-lg mb-2"
                        >Email</label
                    >
                    <input
                        type="email"
                        class="border border-gray-200 rounded p-2 w-full"
                        name="email"
                        v-model="form.email"
                    />
                    <!-- Error Example -->
                    <p class="text-red-500 text-xs mt-1">
                        Please enter a valid email
                    </p>
                </div>
                <div class="mb-6">
                    <label for="nip" class="inline-block text-lg mb-2"
                        >NIP</label
                    >
                    <input
                        type="text"
                        class="border border-gray-200 rounded p-2 w-full"
                        name="nip"
                        v-model="form.nip"
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
                        type="password"
                        class="border border-gray-200 rounded p-2 w-full"
                        name="password"
                        v-model="form.password"
                    />
                </div>

                <div class="mb-6">
                    <button
                        type="submit"
                        class="bg-dark text-white rounded py-2 px-4 hover:bg-black"
    
                    >
                        Zarejestruj się
                    </button>
                </div>

                <div class="mt-8">
                    <p>
                        Masz już konto?
                        <a href="login.html" class="text-laravel"
                            >Zaloguj się</a
                        >
                    </p>
                </div>
            </form>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'SignUp',
    props: {
        User: Array
    },
    data() {
    return {
      form: {
        id: 0,
        name: null,
        surname: null,
        email: null,
        password: null,
        nip: null,
        role: "CLIENT",
      },
    };
  },
  methods: {
    async registerUser() {
      try {
        const response = await axios.post('/api/User', this.form);
        console.log(response.data);
        this.$router.push('/login');
      } catch (error) {
        console.error(error);
      }
    },
  },
}
</script>