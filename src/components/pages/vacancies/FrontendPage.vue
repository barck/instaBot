<template>
  <div class="vacancies-page fadeInDown">
    <div class="container">
      <img
          @click="$router.go(-1)"
          class="arrow-back"
          src="../../../assets/img/arrow_back.png" alt="">
      <div class="vacanvies-page-content">
        <h1>Frontend Разработчик</h1>
        <p class="vacancies-page-text">
          В связи с расширением наша компания набирает новых сотрудников.
          У нас много интересных задач, хороший офис и достойная оплата.
          От вас помимо знаний мы ожидаем разделение корпоративных ценностей,
          стремление развиваться и расти, энтузиазм и желание делать продукты,
          которыми будут пользоваться тысячи людей.
        Резюме присылать на почту <a href="">job@max.team</a>
        </p>
        <p class="vacancies-page-sub-head">Обязанности</p>
        <ul>
          <li>
            Поддержка существующих проектов, в основном high load
          </li>
          <li>
            Разработка новых
          </li>
        </ul>
        <p class="vacancies-page-sub-head">Требования</p>
        <ul>
          <li>
            Отличное владение JavaScript (native, es6)
          </li>
          <li>
            Знание CSS и HTML
          </li>
          <li>
            Понимание REST, AJAX
          </li>
          <li>
            Знание хотя бы одного фреймворка (Vue.js, React.js, Angular.js)
          </li>
        </ul>
        <p class="vacancies-page-sub-head">Условия работы</p>
        <ul>
          <li>
            Гибкий график
          </li>
          <li>
            плавающее начало рабочего дня
          </li>
          <li>
            Бесплатные обеды
          </li>
          <li>
            Спортзал
          </li>
          <li>
            Возможность профессионального роста
          </li>
        </ul>
        <a class="send-message" href="mailto:admin@max.team">Написать нам</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FrontendPage',
  data: () => ({
  }),
  methods: {
  },
  components: {
  }
};
</script>

