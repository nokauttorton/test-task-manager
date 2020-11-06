<template>
  <div>
    <h1 class="mobile-title">{{ title }}</h1>
    <div v-for="employer in employeesList" :key="employer.id" @click="openEmployerCard(employer)" class="employer-block">
      <div grid-area="logo" class="employer-logo"><div class="logo" :style="`background-color: #${randomizeColor()};`"></div></div>
      <div grid-area="name" class="employer-name">{{ employer.name }}</div>
      <div grid-area="id" class="employer-id">ID:{{ employer.id }}</div>
      <div grid-area="mail" class="employer-mail">{{ employer.email }}</div>
    </div>
  </div>
</template>
<script>
import Tools from '@/mixins/Tools.js'
export default {
  props: {
    title: String,
    employeesList: Array
  },
  mixins: [
    Tools
  ],

  methods: {
    openEmployerCard(employer) {
      this.$store.commit('SET_CHOOSEN_EMPLOYER', employer)
      const employerPath = `/employer/${employer.id}`
      if (this.$route.path !== employerPath) this.$router.push({ path: employerPath })
    }
  }
}
</script>
<style lang="scss" scoped>
  $grayBackground: #E2E2E2;

  .mobile-title {
    margin-top: 0;
    margin-bottom: 40px;
  }

  .employer-block {
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 55% 45%;
    grid-template-areas: 
    "logo name"
    "id mail";
    margin-bottom: 40px;
    padding: 18px 20px;
    min-height: 160px;
    border-radius: 10px;
    background-color: $grayBackground;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .logo {
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }

  .employer-id {
    font-size: 34px;
  }

  .employer-name {
    margin-left: 10px;
    white-space: break-spaces;
    font-size: 24px;
  }

  .employer-mail {
    margin-left: 10px;
    font-size: 18px;
    text-transform: lowercase;
  }

  .employer-logo,
  .employer-id,
  .employer-mail,
  .employer-name {
    display: flex;
    align-items: center;
    overflow: hidden;
  }

  @media screen and (max-width: 400px) { /* маленькие смартфоны */
    .employer-block {
      grid-template-columns: 1fr 2fr;
    }

    .employer-mail {
      word-break: break-all;
    }
  }
</style>