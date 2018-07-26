<template>
  <div class="panel-container">
    <header class="header">
      <div class="container">
        <div class="header-flex">
          <div class="logo">
            <a href="/">
              <img src="../../../assets/img/logo.png" width="133" alt="InstaPlus">
            </a>
          </div>
          <div class="info">
            <p class="info-access">
              Доступ до
              19.07.2018
            </p>
            <a id="ember476" href="/prices" class="info-btn ember-view">ПРОДЛИТЬ</a>
          </div>
          <div class="auth">
            <p class="auth-user-name">
              sutogan4ik@mail.ru
            </p>
            <button class="block-btn">Выйти</button>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <p class="headline">Добавить аккаунт Instagram</p>
      <div class="add-account block">
        <div class="add-account-flex">
          <input type="text" placeholder="Логин Instagram без @">
          <input type="text" placeholder="Пароль от аккаунта Instagram">
          <button class="block-btn">Добавить аккаунт</button>
        </div>
      </div>
      <p class="headline">Мои аккаунты Instagram</p>
      <div class="my-accounts block">
        <div class="my-accounts-flex">
          <span class="account-name">@avtoman</span>
          <span class="account-state">активен</span>
          <span class="account-subscribe">120 подписчиков</span>
          <span class="account-subscribers">50 подписок</span>
          <button class="block-btn">Измнить</button>
          <button class="block-btn">Удалить</button>
        </div>
        <div class="my-accounts-flex">
          <span class="account-name">@pop_art_74</span>
          <span class="account-state">активен</span>
          <span class="account-subscribe">987 подписчиков</span>
          <span class="account-subscribers">9877 подписок</span>
          <button class="block-btn">Измнить</button>
          <button class="block-btn">Удалить</button>
        </div>
        <div class="my-accounts-flex">
          <span class="account-name">@avto174</span>
          <span class="account-state wrong-pass">неверный пароль</span>
          <span class="account-subscribe">34 подписчиков</span>
          <span class="account-subscribers">543 подписок</span>
          <button class="block-btn">Измнить</button>
          <button class="block-btn">Удалить</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Wallet'
};
</script>
