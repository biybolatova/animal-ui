<template>
  <search-button
      @click="showDialog"
  >
    Я потерял
  </search-button>
  <my-dialog
      v-model:show="dialogVisible"
  >
    <search-form
        @create="createAppeal"
    >
    </search-form>
  </my-dialog>

  <div class="appeals">
    <div class="appeals__content">
      <div v-for="animal in animalAppeals">
        <strong class="item">id: </strong> {{ animal.id }}
        <strong class="item">город: </strong> {{ animal.city }}
        <strong class="item">адрес: </strong> {{ animal.address }}
        <strong class="item">тип животного: </strong> {{ animal.type }}
        <strong class="item">дата когда нашли: </strong> {{ animal.findDate }}
        <strong class="item">телефон для связи: </strong> {{ animal.contactPhone }}
        <strong class="item">доп. информация: </strong> {{ animal.additionalInfo }}
        <strong class="item">фото: </strong> {{ animal.photo }}
      </div>
    </div>
  </div>

</template>

<script>
import SearchForm from "./components/AddAppealForm.vue";

export default {
  components: {SearchForm},
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
.item {
  padding: 0 15px;
}
</style>
