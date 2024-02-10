import {createRouter, createWebHistory} from 'vue-router'
import store from '@/store';

import Home from '../views/Home'
import About from '../views/About'
import Documents from '../views/Documents'
import Warehouse from '../views/Warehouse'
import Parts from '../views/Parts'
import Services from '../views/Services'
import Login from '../views/Login'
import AddParts from '../views/AddParts'
import Signup from '../views/Signup'
import AddTimetable from '../views/AddTimetable'
import AddServiceDetails from '../views/ServiceDetails'
import ServiceDetails from '../views/ServiceDetails'
import Margin from '../components/Margin'

const routes = [
    {
        path:'/addtimetable',
        name:'AddTimeTable',
        component: AddTimetable
    },
    {
        path:'/signup',
        name:'Signup',
        component: Signup
    },
    {
        path:'/addparts',
        name:'AddParts',
        component: AddParts
    },
    {
        path:'/login',
        name:'Login',
        component: Login
    },
    {
        path:'/services',
        name:'Services',
        component: Services
    },
    {
        path:'/parts',
        name:'Parts',
        component: Parts
    },
    {
        path:'/warehouse',
        name:'Warehouse',
        component: Warehouse
    },
    {
        path:'/documents',
        name:'Documents',
        component: Documents
    },
    {
        path:'/',
        name:'Home',
        component: Home
    },
    {
        path:'/about',
        name:'About',
        component: About
    },
    {
        path: '/service/:id',
        name: 'ServiceDetails',
        component: ServiceDetails,
        props: (route) => {
            // Znajdź usługę o danym ID
            const service = store.state.dbServices.find(service => service.id === Number(route.params.id));
            // Zwróć usługę jako props
            return {service: service ? service : false};
          }
    },
    {
        path:'/margin',
        name:'Margin',
        component: Margin
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router