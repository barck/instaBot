<template>
  <header class="header">
    <hamburger
      :stroke='2'
      :gap='5'
      color='#fff'
      :open.sync='mobileNavIsOpen'>
    </hamburger>
    <transition name="slide-fade">
      <div v-if="mobileNavIsOpen" class="mobile-menu">
        <a @click="toVacanc">ВАКАНСИИ</a>
        <a v-if="this.$route.name == 'index'"
          v-scroll-to="{ element: '#contacts', duration: 2000, offset: 100, }"
          >СВЯЗАТЬСЯ С НАМИ</a>
        <a v-else @click="toContacts">СВЯЗАТЬСЯ С НАМИ</a>
      </div>
    </transition>
    <router-link :to="{ name: 'vacancies' }" tag="a">
      ВАКАНСИИ
    </router-link>
    <div class="logo">
    <router-link class="logo" :to="{ name: 'index' }" tag="img" src="./static/logo.png">
    </router-link>
    </div>
    <a v-if="this.$route.name == 'index'"
      v-scroll-to="{ element: '#contacts', duration: 2000, offset: 100, }"
      >СВЯЗАТЬСЯ С НАМИ</a>
    <router-link v-else :to="{ name: 'contacts' }" tag="a">
      СВЯЗАТЬСЯ С НАМИ
    </router-link>
    </header>
</template>

<script>
import 'vue-hamburger/index.css';
import Hamburger from 'vue-hamburger';
import router from '@/router';

export default {
  name: 'Header',
  data: () => ({
    mobileNavIsOpen: false
  }),
  methods: {
    toVacanc() {
      router.push('vacancies');
      this.mobileNavIsOpen = !this.mobileNavIsOpen;
    },
    toContacts() {
      router.push('contacts');
      this.mobileNavIsOpen = !this.mobileNavIsOpen;
    }
  },
  components: {
    Hamburger
  }
};
</script>
