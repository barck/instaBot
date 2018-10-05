<template>
  <div class="vacancies-page fadeInDown">
    <div class="container">
      <img
          @click="$router.go(-1)"
          class="arrow-back"
          src="../../../assets/img/arrow_back.png" alt="">
      <div class="vacanvies-page-content">
        <h1>Senior-PHP разработчик</h1>
        <p class="vacancies-page-text">
          В связи с расширением наша компания набирает новых сотрудников.
          У нас много интересных задач, хороший офис и достойная оплата.
          От вас помимо знаний мы ожидаем разделение корпоративных ценностей,
          стремление развиваться и расти, энтузиазм и желание делать продукты,
          которыми будут пользоваться тысячи людей.
          Резюме присылать на почту <a href="">job@max.team</a>
        </p>
         <p class="vacancies-page-sub-head">От вас необходимо</p>
        <ul>
          <li>
            Разбираться в унаследованном коде;
          </li>
          <li>
            Знать Redis, Mongo, MySQL и то как они работают;
          </li>
          <li>
            Знать принципы работы Elasticsearch, Solr;
          </li>
          <li>
            Уметь работать в команде, опираться на коллег и оказывать им помощь;
          </li>
          <li>
            Работать в Linux-окружении, ясно указывать админам что именно вы хотите от сервера.
          </li>
        </ul>
        <p class="vacancies-page-sub-head">Дополнительные преимущества получит
          кандидат, который:</p>
        <ul>
          <li>
            Знаком с Python, Go;
          </li>
          <li>
            Не боится рефакторинга;
          </li>
          <li>
            Знает фреймворк PhalconPHP
          </li>
          <li>
            Любит юнит-тесты.
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
          <li>
            Уровень зарплаты обсуждается индивидуально.
          </li>
        </ul>
        <a class="send-message" href="mailto:admin@max.team">Написать нам</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BackendPage',
  data: () => ({
  }),
  methods: {
  },
  components: {
  }
};
</script>

