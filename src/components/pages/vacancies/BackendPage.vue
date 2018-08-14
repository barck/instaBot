<template>
  <div class="vacancies-page fadeInDown">
    <div class="container">
      <img
          @click="$router.go(-1)"
          class="arrow-back"
          src="../../../assets/img/arrow_back.png" alt="">
      <div class="vacanvies-page-content">
        <h1>Backend Разработчик</h1>
        <p class="vacancies-page-text">
         Развиваем проекты на Java, Spring, Hibernate, строим микросервисную
          архитектуру на Scala, Play, Akka. Используем REST для взаимодействия
          между сервисами, храним данные в mySQL и MongoDB. В данный момент у нас
          150 виртуалок и, в среднем, 10 000 запросов в секунду. Практикуем
          Continuous Integration и Continuous Delivery.
          Резюме присылать на почту <a href="">job@max.team</a>
        </p>
        <p class="vacancies-page-sub-head">Обязанности</p>
        <ul>
          <li>
            Опыт работы с Java от двух лет (либо аналогично С# или C++ и знакомство с Java)
          </li>
          <li>
            Представление о шаблонах проектирования: KISS, SOLID и TDD
          </li>
          <li>
            Умение написать многопоточное приложение
          </li>
          <li>
            Знание реляционных БД
          </li>
        </ul>
        <p class="vacancies-page-sub-head">Условия работы</p>
        <ul>
          <li>
            полный рабочий день, пятидневная рабочая неделя
          </li>
          <li>
            плавающее начало рабочего дня
          </li>
          <li>
            зарплата пересматривается при профессиональном прогрессе сотрудника
          </li>
          <li>
            возможность выдвигать интересные идеи, успешно их реализовывать и гордиться собой
          </li>
          <li>
            столовая в офисе, неограниченные чай/кофе/газировка
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

