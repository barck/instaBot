<template>
  <div class="welcome">
    <div class="container">
     <div><img src="../../assets/img/logo.png" alt=""></div>
     <div class="auth">
       <form>
          <input type="email"
          placeholder="Логин"
          autocomplete="current-email"
          v-model.trim="userName">
          <input type="password"
          placeholder="Пароль"
          autocomplete="off"
          v-model.trim="password">
       </form>
       <a @click="login">Войти в панель управления</a>
       <p>{{ token }}</p>
     </div>
    </div>
  </div>
</template>

<script>
// import api from '@/api';
import router from '@/router';

export default {
  name: 'Index',
  data: () => ({
    userName: null,
    password: null,
    token: ''
  }),
  methods: {
    // async login() {
    //   const response = await api
    //     .post(api.url.authorization.signIn, { login: this.userName, password: this.password });
    //   if (response.data.status === true) {
    //     this.token = response.data.token;
    //   }
    // },
    login() {
      router.push({ name: 'panel' });
    }
  }
};
</script>

