<template>
  <search-button
      @click="showDialog"
  >
    Я потерял
  </search-button>
  <my-dialog
      v-model:show="dialogVisible"
  >
    <appeal-form
        @create="createAppeal"
        :citySearchResult="citySearchResult"
        :streetSearchResult="streetSearchResult"
    >
    </appeal-form>
  </my-dialog>

  <div class="appeals">
    <div class="appeals__content">
      <div v-for="animal in animalAppeals">
        <strong class="appeal">id: </strong> {{ animal.id }}
        <strong class="appeal">город: </strong> {{ animal.city }}
        <strong class="appeal">адрес: </strong> {{ animal.address }}
        <strong class="appeal">тип животного: </strong> {{ animal.type }}
        <strong class="appeal">дата когда нашли: </strong> {{ animal.findDate }}
        <strong class="appeal">телефон для связи: </strong> {{ animal.contactPhone }}
        <strong class="appeal">доп. информация: </strong> {{ animal.additionalInfo }}
        <strong class="appeal">фото: </strong> {{ animal.photo }}
      </div>
    </div>
  </div>

</template>

<script>
import AppealForm from "./components/Appeal/AddForm.vue";

export default {
  components: {AppealForm, SearchForm: AppealForm},
  data() {
    return {
      animalAppeals: [
        {
          id: 1,
          city: 'Тюмень',
          address: 'ул.Республики 1',
          type: 'cat',
          findDate: '11-11-11',
          contactPhone: '+7(921)063827',
          additionalInfo: 'нашёл в подвале',
          photo: 'image1.png'
        },
      ],
      citySearchResult: [
        {
          id: 1,
          title: 'Тюмень',
        },
        {
          id: 2,
          title: 'Санкт-Петербург',
        },
        {
          id: 3,
          title: 'Москва',
        },
        {
          id: 4,
          title: 'Ишим',
        },
      ],
      streetSearchResult: [
        {
          id: 1,
          title: 'Авангардная 12',
        },
        {
          id: 2,
          title: 'Республики 7',
        },
        {
          id: 3,
          title: 'Проспект дружбы 10',
        },
        {
          id: 4,
          title: 'Пушкина 22',
        },
      ],
      dialogVisible: false
    }
  },
  methods: {
    createAppeal(animalAppeal) {
      this.animalAppeals.push(animalAppeal)

      this.dialogVisible = false
    },
    showDialog() {
      this.dialogVisible = true
    }
  }
}
</script>

<style scoped>
.appeals__content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 200px;
}

.appeal {
  padding: 0 15px;
}
</style>
