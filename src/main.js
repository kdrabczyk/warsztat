import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import router from './router'
import axios from 'axios'

// Create a new store instance.
const store = createStore({

    state () {
        return {
            dbServices: [],
            user:{
                id: null,
                name: null,
                token: null,
                role: null,
            },
            isLogged: false,


        }
    },
    actions: {
          fetchdbServices({ commit }) {
            axios.get('https://localhost:7275/api/Timetable/GetAll')
              .then(response => {
                commit('setdbServices', response.data);
              })
              .catch(error => {
                console.error('There was an error fetching the name:', error);
              });
          },
          logIn({ commit }, loginForm) {
            axios.post('https://localhost:7275/api/User/Login', loginForm)
              .then(response => {
                if (response.data.success) {
                    commit('setUser', {
                      token: response.data.token,
                      name: response.data.name,
                      role: response.data.role,
                       /// DOPISAĆ ID ŻEBY WYLOGOWAĆ W WIDOKU SERVICE
                    });
                    commit('setIsLogged', true); // Add this line to set isLogged to true
                  } else {
                    console.error('Login failed:', response.data);
                  }
              })
              .catch(error => {
                console.error('There was an error logging in:', error);
              });
          },
          logOut({ commit }) {
            // Log out the user, then...
            commit('setUser', { id: null, name: null, token: null });
            commit('setIsLogged', false);
          },         
        
    },

    mutations: {
        
        setdbServices(state, dbServices) {
            state.dbServices = dbServices;
        },
        setUsers(state, user){
            state.user.id = user.id;
            state.user.name = user.name;
            state.user.token = user.token;
            state.user.role = user.role;
        },
        setUser(state, user) {
            state.user = user;
          },
        setIsLogged(state, bool) {
            state.isLogged = bool;
        }
    }
})

const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')