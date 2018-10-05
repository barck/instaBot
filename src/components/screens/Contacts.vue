<template>
  <div class="contacts-screen fadeInDown" id="contacts">
    <div class="container">
      <p class="contacts-head">Связаться с нами</p>
      <form action="">
        <input type="email" placeholder="E-mail">
        <textarea name="message" id="" cols="30" rows="10"
          placeholder="Ваш вопрос"></textarea>
        <button>Отправить</button>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Contacts',
  data: () => ({
  })
};
</script>

