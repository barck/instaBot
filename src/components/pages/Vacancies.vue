<template>
  <div class="vacanties">
    <div class="vacanties-content">
      <div class="container">
        <h1>Наши вакансии</h1>
        <div class="vacanties-item">
          <p class="vacanties-head">WEB-ДИЗАЙНЕР</p>
          <p class="vacanties-text">
            Мы создаём и развиваем развлекательные веб-проекты. Нам нужен веб-дизайнер,
            активно интересующийся дизайном пользовательского интерфейса. Если посещая
            каждый третий сайт, вы задумываетесь, что в нём не так и как это улучшить,
            мы найдем общий язык. Вас ожидает работа в продуктовой команде с внутренним
            заказчиком. Работа в паре с арт-директором, опытным проектировщиком интерфейса.
            Собеседование по результатам решения тестового задания.
            Решения присылать на почту <a href="">job@max.team</a>
          </p>
          <router-link :to="{ name: 'designer' }" tag="a" class="more">
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
            Резюме присылать на почту <a href="">job@max.team</a>
          </p>
          <router-link :to="{ name: 'frontend' }" tag="a" class="more">
            подробнее
          </router-link>
        </div>
        <div class="vacanties-item">
          <p class="vacanties-head">BACKEND РАЗРАБОТЧИК</p>
          <p class="vacanties-text">
            Развиваем проекты на Java, Spring, Hibernate, строим микросервисную
            архитектуру на Scala, Play, Akka. Используем REST для взаимодействия
            между сервисами, храним данные в mySQL и MongoDB. В данный момент у нас
            150 виртуалок и, в среднем, 10 000 запросов в секунду. Практикуем
            Continuous Integration и Continuous Delivery.
            Резюме присылать на почту <a href="">job@max.team</a>
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

