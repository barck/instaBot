<template>
  <div class="index">
    <hero></hero>
    <div class="main-content">
      <advantages></advantages>
      <proccess></proccess>
      <map-screen></map-screen>
      <contacts></contacts>
    </div>
  </div>
</template>

<script>
import Hero from '../screens/Hero';
import Advantages from '../screens/Advantages';
import Proccess from '../screens/Proccess';
import MapScreen from '../screens/Map';
import Contacts from '../screens/Contacts';

export default {
  name: 'Index',
  data: () => ({
  }),
  methods: {
  },
  components: {
    Hero,
    Advantages,
    Proccess,
    MapScreen,
    Contacts
  }
};
</script>

