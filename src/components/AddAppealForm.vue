<template>
  <form @submit.prevent>
    <h4>Добавление поста</h4>
    <my-input
        class="input"
        v-model="animalAppeal.city"
        placeholder="Город">
    </my-input>
    <my-input
        class="input"
        v-model="animalAppeal.address"
        placeholder="Адрес">
    </my-input>
    <my-input
        class="input"
        v-model="animalAppeal.type"
        placeholder="Тип">
    </my-input>
    <my-input
        class="input"
        v-model="animalAppeal.findDate"
        placeholder="Дата">
    </my-input>
    <my-input
        class="input"
        v-model="animalAppeal.contactPhone"
        placeholder="Телефон">
    </my-input>
    <my-input
        class="input"
        v-model="animalAppeal.additionalInfo"
        placeholder="Доп.информация">
    </my-input>
    <my-input
        class="input"
        v-model="animalAppeal.photo"
        placeholder="Фото">
    </my-input>

    <my-button
        class="btn"
        @click="createAppeal"
    >
      Создать
    </my-button>
  </form>
</template>

<script>

export default {
  name: 'search-form',
  data() {
    return {
      animalAppeal: {
        city: '',
        address: '',
        type: '',
        findDate: '',
        contactPhone: '',
        additionalInfo: '',
        photo: ''
      }
    }
  },
  methods: {
    createAppeal() {
      this.animalAppeal.id = Date.now()
      this.$emit('create', this.animalAppeal)

      this.animalAppeal = {
        city: '',
        address: '',
        type: '',
        findDate: '',
        contactPhone: '',
        additionalInfo: '',
        photo: ''
      }
    },
  }
}
</script>

<style scoped>

</style>