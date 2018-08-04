<template>
  <div class="index">
    <header-block></header-block>
    <hero></hero>
    <div class="main-content">
      <advantages></advantages>
    </div>
  </div>
</template>

<script>
// import router from '@/router';
import Hero from '../screens/Hero';
import Advantages from '../screens/Advantages';
import HeaderBlock from '../elements/Header';

export default {
  name: 'Index',
  data: () => ({
  }),
  methods: {
    // login() {
    //   router.push({ name: 'panel' });
    // }
  },
  components: {
    HeaderBlock,
    Hero,
    Advantages
  }
};
</script>

