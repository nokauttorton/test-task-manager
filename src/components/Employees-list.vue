<template>
  <div>
    <table width="100%" cols="4" cellspacing="0">
      <caption>{{ title }}</caption>
      <tr class="table-head" align="left">
        <th width="15%"></th>
        <th width="15%">ID</th>
        <th width="35%">NAME</th>
        <th width="35%">EMAIL</th>
      </tr>
      <tr v-for="employer in employeesList" :key="employer.id" @click="openEmployerCard(employer)" align="left" class="employer-block">
        <td class="employer-logo"><div class="logo" :style="`background-color: #${randomizeColor()};`"></div></td>
        <td class="employer-id">{{ employer.id }}</td>
        <td class="employer-name">{{ employer.name }}</td>
        <td class="employer-mail">{{ employer.email }}</td>
      </tr>
    </table>
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

<style scoped lang="scss">
  $gray: #BAB6B6;
  $grayBackground: #E2E2E2;

  table {
    -webkit-border-vertical-spacing: 30px;
  }

  caption {
    margin-bottom: 50px;
    font-size: 40px;
    text-align: left;
    font-weight: 700;
  }

  th {
    color: $gray;
    font-size: 24px;
    line-height: 28px;
    font-weight: 700;
    border-bottom: 0.5px solid $gray;
  }

  .employer-block {
    height: 100px;
    cursor: pointer;
    background-color: $grayBackground;
  }

  .employer-logo {
    border-radius: 10px 0 0 10px;
  }

  .logo {
    margin-left: 28px;
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }

  .employer-id {
    font-size: 36px;
  }

  .employer-mail,
  .employer-name {
    font-size: 26px;
  }

  .employer-mail {
    text-transform: lowercase;
    border-radius: 0 10px 10px 0;
  }

  @media screen and (max-width: 1023px) { /* смартфоны и фаблеты */
    .employer-mail,
    .employer-name {
      font-size: 20px;
    }

    .logo {
      margin: 0 20px;
    }
  }
</style>
