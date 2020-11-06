<template>
  <div id="app" class="content-block">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'default',
  methods: {
    windowResize () {
      const windowInnerWidth = window.innerWidth
      const isMobile = windowInnerWidth < 768
      const isTablet = windowInnerWidth >= 768 && windowInnerWidth < 1024
      const isDesktop = windowInnerWidth >= 1024

      const store = this.$store
      store.commit('SET_IS_DESKTOP', isDesktop)
      store.commit('SET_IS_TABLET', isTablet)
      store.commit('SET_IS_MOBILE', isMobile)
    }
  },
  created () {
    this.windowResize()
  },
  mounted () {
    // Блок проверок ширины экрана пользователя
    window.addEventListener('resize', this.windowResize)
  },
  destroyed () {
    window.removeEventListener('resize')
  }
}

</script>

<style lang="scss">
  .content-block {
    padding: 50px 30px;
  }

  @media screen and (max-width: 1024px) { /* смартфоны и фаблеты */
    .content-block {
      padding: 50px 20px;
    }
  }
</style>
