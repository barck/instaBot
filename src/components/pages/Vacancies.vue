<template>
  <div class="vacanties">
    <div class="vacanties-content fadeInDown">
      <div class="container">
        <img
          @click="$router.go(-1)"
          class="arrow-back"
          src="../../assets/img/arrow_back.png" alt="">
        <h1>Наши вакансии</h1>
        <div class="vacanties-item">
          <p class="vacanties-head">HR - generalist</p>
          <p class="vacanties-text">
            В связи с расширением наша компания набирает новых сотрудников.
          У нас много интересных задач, хороший офис и достойная оплата.
          От вас помимо знаний мы ожидаем разделение корпоративных ценностей,
          стремление развиваться и расти, энтузиазм и желание делать продукты,
          которыми будут пользоваться тысячи людей.
          </p>
          <router-link :to="{ name: 'hr' }" tag="a" class="more">
            подробнее
          </router-link>
        </div>
        <div class="vacanties-item">
          <p class="vacanties-head">Тестировщик web-интерфейсов</p>
          <p class="vacanties-text">
            Приглашаем присоединиться к нашей дружной команде тестировщика
            web-интерфейсов и реализовывать вместе интересные задачи
            по разработке собственных проектов.
          </p>
          <router-link :to="{ name: 'tester' }" tag="a" class="more">
            подробнее
          </router-link>
        </div>
        <div class="vacanties-item">
          <p class="vacanties-head">FRONTEND РАЗРАБОТЧИК</p>
          <p class="vacanties-text">
             В связи с расширением наша компания набирает новых сотрудников.
             У нас много интересных задач, хороший офис и достойная оплата.
             От вас помимо знаний мы ожидаем разделение корпоративных ценностей,
             стремление развиваться и расти, энтузиазм и желание делать продукты,
             которыми будут пользоваться тысячи людей.
          </p>
          <router-link :to="{ name: 'frontend' }" tag="a" class="more">
            подробнее
          </router-link>
        </div>
        <div class="vacanties-item">
          <p class="vacanties-head">BACKEND РАЗРАБОТЧИК</p>
          <p class="vacanties-text">
            В связи с расширением наша компания набирает новых сотрудников.
          У нас много интересных задач, хороший офис и достойная оплата.
          От вас помимо знаний мы ожидаем разделение корпоративных ценностей,
          стремление развиваться и расти, энтузиазм и желание делать продукты,
          которыми будут пользоваться тысячи людей.
          </p>
          <router-link :to="{ name: 'backend' }" tag="a" class="more">
            подробнее
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data: () => ({
  }),
  methods: {
  },
  components: {
  },
  mounted() {
  }
};
</script>

