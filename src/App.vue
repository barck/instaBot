<template>
  <div id="app">
    <div class="content-wrapper" :class="{space_bg: this.$route.name === 'vacancies'}">
      <header-block></header-block>
      <router-view/>
    </div>
    <footer-block></footer-block>
  </div>
</template>

<script>
import HeaderBlock from './components/elements/Header';
import FooterBlock from './components/elements/Footer';

export default {
  name: 'App',
  data: () => ({
  }),
  computed: {
  },
  methods: {
  },
  components: {
    HeaderBlock,
    FooterBlock
  }
};
</script>

<style lang="stylus">
  @import './assets/styles/index.styl';
</style>
