<template>
  <v-app-bar
    app
    :dark="!isScrollPoint"
    :height="appBarHeight"
    :color="toolbarStyle.color"
    :elevation="toolbarStyle.elevation"
  >
    <app-logo
      @click.native="goTo('scroll-top')"
    />
    <app-title
      class="hidden-mobile-and-down"
    />
    <!-- 右寄せ -->
    <v-spacer />
    <v-toolbar-items class="ml-2">
      <v-btn
        v-for="(menu, i) in menus"
        :key="`menu-btn-${i}`"
        text
        @click="goTo(menu.title)"
      >
        {{ $t(`menus.${menu.title}`) }}
      </v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
export default {
  props: {
    menus: {
      type: Array,
      default: () => []
    },
    imgHeight: {
      type: Number,
      default: 0
    }
  },
  data ({ $store }) {
    return {
      scrollY: 0,
      appBarHeight: $store.state.styles.beforeLogin.appBarHeight
    }
  },
  computed: {
    // スクロール値の算出
    isScrollPoint () {
      return this.scrollY > (this.imgHeight - this.appBarHeight)
    },
    toolbarStyle () {
      const color = this.isScrollPoint ? 'white' : 'transparent'
      const elevation = this.isScrollPoint ? 4 : 0
      return { color, elevation }
    }
  },
  // マウント後実行
  mounted () {
    // スクロールのけんち
    window.addEventListener('scroll', this.onScroll)
  },
  // Vueインスタンス破壊前に実行
  beforeDestroy () {
    // イベントの削除
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    // スクロール値の代入
    onScroll () {
      this.scrollY = window.scrollY
    },
    goTo (id) {
      this.$vuetify.goTo(`#${id}`)
    }
  }
}
</script>
