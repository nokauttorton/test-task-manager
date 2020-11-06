<template>
  <div>
    <employer-task-card title="Tasks list" :tasks="tasks" :employer="choosenEmployer" :isDesktop="isDesktop" :isTablet="isTablet" :isMobile="isMobile"/>
  </div>
</template>
<script>
import employerTaskCard from '@/components/Employer-tasks-card.vue'
import { mapState } from 'vuex'

export default {
  name: 'EmployerCard',
  components: {
    employerTaskCard
  },

  computed: {
    ...mapState(['tasks', 'choosenEmployer', 'isDesktop', 'isTablet', 'isMobile'])
  },

  async beforeCreate () {
    await this.$store.dispatch('getEmployerTasks', this.$route.params.id)
  }
}
</script>