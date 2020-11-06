<template>
  <div class="employer-card">
    <router-link :to="{ name: 'Employees' }" class="arrow"><span >&#8592;</span> Назад к списку сотрудников</router-link>
    <div class="employer-info">
      <div v-if="!isMobile" class="logo" :style="`background-color: #${randomizeColor()};`"></div>
      <div v-else class="logo-mobile">
        <div class="logo" :style="`background-color: #${randomizeColor()};`"></div>
        <div>
          <span class="mobile-table-head">ID:</span>
          <span class="employer-id">{{ employer.id }}</span>
        </div>
      </div>
      <table v-if="isDesktop" width="90%" height="100px" cols="4" cellspacing="0">
        <tr class="table-head" align="left">
          <th width="10%">ID</th>
          <th width="30%">NAME</th>
          <th width="30%">EMAIL</th>
          <th width="30%">PHONE</th>
        </tr>
        <tr class="employer-block" align="left">
          <td class="employer-id">{{ employer.id }}</td>
          <td class="employer-name">{{ employer.name }}</td>
          <td class="employer-mail">{{ employer.email }}</td>
          <td class="employer-phone">{{ employer.phone }}</td>
        </tr>
      </table>
      <div v-else class="device-head">
        <div v-if="isTablet" grid-area="id" class="head-info">
          <span class="table-head">ID</span>
          <span class="employer-id">{{ employer.id }}</span>
        </div>
        <div grid-area="name" class="head-info">
          <span grid-area="name-title" class="table-head">NAME{{isMobile ? ':' : ''}}</span>
          <span grid-area="name-value" class="employer-name">{{ employer.name }}</span>
        </div>
        <div grid-area="email" class="head-info">
          <span grid-area="email-title" class="table-head">EMAIL{{isMobile ? ':' : ''}}</span>
          <span grid-area="email-value" class="employer-mail">{{ employer.email }}</span>
        </div>
        <div grid-area="phone" class="head-info">
          <span grid-area="phone-title" class="table-head">PHONE{{isMobile ? ':' : ''}}</span>
          <span grid-area="phone-title" class="employer-phone">{{ employer.phone }}</span>
        </div>
      </div>
    </div>
    <employer-tasks-list :title="title" :tasks="tasks"/>
  </div>
</template>

<script>
import employerTasksList from '@/components/Employer-tasks-list.vue'
import Tools from '@/mixins/Tools.js'

export default {
  props: {
    title: String,
    tasks: Array,
    employer: Object,
    isDesktop: Boolean,
    isTablet: Boolean,
    isMobile: Boolean
  },
  mixins: [
    Tools
  ],
  components: {
    employerTasksList
  }
}
</script>

<style scoped lang="scss">
  $gray: #BAB6B6;
  $grayBackground: #E2E2E2;

  .arrow {
    font-size: 24px;
    text-decoration: none;
    color: $gray;
  }

  .employer-info {
    display: flex;
    max-height: 100px;
    margin-top: 30px;
    padding: 25px;
    border-radius: 10px;
    background-color: $grayBackground;
  }

  .logo {
    margin-right: 80px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  .table-head {
    font-weight: 700;
    font-size: 26px;
  }

  .employer-id {
    font-size: 36px;
  }

  .employer-name,
  .employer-mail,
  .employer-phone {
    font-size: 26px;
  }

  @media screen and (max-width: 1023px) { /* таблеты */
    .device-head {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 50% 50%;
      grid-template-areas: 
      "id name"
      "email phone";
      width: 79%;
      height: 100%;
    }

    .logo {
      margin-right: 40px;
    }

    .employer-mail,
    .employer-name,
    .employer-phone {
      font-size: 20px;
    }

    .employer-info {
      height: 150px;
      max-height: none;
      align-items: center;
    }

    .head-info {
      display: flex;
      justify-content: center;
      flex-direction: column;
    }
  }

  @media screen and (max-width: 767px) { /* смартфоны */
    .employer-info {
      height: auto;
      flex-direction: column;
      align-items: start;
      overflow: hidden;
    }

    .logo-mobile {
      margin-bottom: 25px;
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    .logo {
      width: 80px;
      height: 80px;
      margin-right: 50px;
    }

    .mobile-table-head {
      font-size: 36px;
      font-weight: 700;
    }

    .employer-id {
      margin-left: 5px;
    }

    .device-head {
      grid-template-columns: 1fr;
      grid-template-rows: 55px 55px 55px;
      grid-template-areas: 
      "name"
      "email"
      "phone";
      width: 100%;
      height: auto;
    }

    .head-info {
      display: grid;
      grid-template-columns: 1fr 2fr;
      grid-template-rows: 30px;
      align-items: center;
      justify-content: start;
      flex-direction: row;
    }
  }

  @media screen and (max-width: 400px) { /* маленькие смартфоны */
    .employer-mail,
    .employer-name,
    .employer-phone {
      margin-left: 10px;
    }
  }
</style>
