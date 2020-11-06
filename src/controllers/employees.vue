<template>
  <div>
    <employees-list v-if="!isMobile" title="Employees" :employeesList="list"/>
    <employees-list-mobile v-else title="Employees" :employeesList="list"/>
  </div>
</template>
<script>
import employeesList from '@/components/Employees-list.vue'
import employeesListMobile from '@/components/Employees-list-mobile.vue'
import { mapState } from 'vuex'

export default {
  name: 'Employees',
  components: {
    employeesList,
    employeesListMobile
  },

  computed: {
    ...mapState(['list', 'isMobile'])
  },

  async beforeCreate () {
    await this.$store.dispatch('fetchEmployeesList')
  }
}
</script>
