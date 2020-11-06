import Vue from 'vue'
import VueRouter from 'vue-router'
import Employees from '../controllers/employees.vue'
import EmployerCard from '../controllers/employer-card.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/employer/:id', name: 'EmployerCard', component: EmployerCard },
    { path: '/', name: 'Employees', component: Employees }
  ]
})

export default router
