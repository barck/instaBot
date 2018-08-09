<template>
  <div class="contacts-screen" id="contacts">
    <div class="container">
      <p class="contacts-head">Связаться с нами</p>
      <form action="">
        <input type="text" placeholder="Телефон">
        <textarea name="message" id="" cols="30" rows="10"
          placeholder="Введите сообщение"></textarea>
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

