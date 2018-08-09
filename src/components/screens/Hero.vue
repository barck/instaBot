<template>
  <div class="hero-screen">
    <div class="hero-clouds">
      <div class="hero-content">
        <div class="container">
          <h1 class="fadeInDown">Создаем высоконагруженные веб-сервисы</h1>
          <p>
            Проектируем и реализуем масштабируемые и
            отказоустойчивые интернет-проекты под высокие нагрузки.
          </p>
          <img
            v-scroll-to="{ element: '#advantages', duration: 2000, offset: -100, }"
            class="arrow" src="../../assets/img/arrow.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero',
  data: () => ({
  }),
  methods: {
    headerScroll() {
      const headerElement = document.querySelector('.header');
      const endOfHeroScreen = (document.querySelector('.advantages-screen').getBoundingClientRect().top + window.pageYOffset) - 150;
      window.onscroll = () => {
        if (headerElement.classList.contains('header-colored') && window.pageYOffset < endOfHeroScreen) {
          headerElement.classList.remove('header-colored');
        } else if (window.pageYOffset > endOfHeroScreen) {
          headerElement.classList.add('header-colored');
        }
      };
    }
  },
  mounted() {
    this.headerScroll();
  }
};
</script>

