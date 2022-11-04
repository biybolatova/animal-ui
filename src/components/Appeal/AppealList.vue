``
<template>
  <div class="appeal">
    <AppealItem
        :dropDownData="citySearchResult"
        :placeHolderText="inputTitles[0]"
        @update="fillAppealData"
    >
      <template v-slot:title>Город</template>
    </AppealItem>
    <AppealItem
        :dropDownData="streetSearchResult"
        :placeHolderText="inputTitles[1]"
        @update="fillAppealData"
    >
      <template v-slot:title>Улица</template>
    </AppealItem>
  </div>
  <!--  Вынести в addForm?-->
  <my-button
      class="btn"
      @click="createAppeal"
  >
    Создать
  </my-button>
</template>

<script>

import AppealItem from "./AppealItem.vue";

export default {
  components: {AppealItem},

  data() {
    return {
      inputTitles: [
        'Поиск по городу',
        'Поиск по улице',
      ],
      animalAppeal: {
        city: null,
        address: null,
        type: null,
        findDate: null,
        contactPhone: null,
        additionalInfo: null,
        photo: null,
      },
    }
  },
  props: {
    citySearchResult: {
      required: true,
      type: Array
    },
    streetSearchResult: {
      required: true,
      type: Array
    },
  },
  methods: {
    fillAppealData(appeal) {
      this.animalAppeal.city = appeal.city
    },
    createAppeal() {
      this.animalAppeal.id = Date.now()
      this.$emit('create', this.animalAppeal)

      this.animalAppeal = {
        title: '',
        address: '',
        type: '',
        findDate: '',
        contactPhone: '',
        additionalInfo: '',
        photo: ''
      }
    },
  },

}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.appeal {
  display: flex;
  /*justify-content: center;*/
  /*align-items: center;*/
  flex-direction: column;
}
</style>``