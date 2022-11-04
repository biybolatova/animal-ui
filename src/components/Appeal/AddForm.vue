``
<template>
  <form @submit.prevent>
    <div class="content">
      <h4 class="title">Обьявление о найденном животном</h4>
      <AppealList
          :city-search-result="citySearchResult"
          :street-search-result="streetSearchResult"
          @create="createAppeal"
      >
      </AppealList>
    </div>
  </form>
</template>

<script>

import AppealList from "./AppealList.vue";

export default {
  name: 'appeal-form',
  components: {AppealList},
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
    createAppeal(animalAppeal) {
      this.$emit('create', animalAppeal)
    }
  }
}
</script>
<style scoped>
.title {
  color: #3D5D79;
  text-align: center;
  text-transform: uppercase;
}

.content {
  display: grid;
  grid-template-columns: 1fr;
  /* Добавить когда сделаю все инпуты*/
  /*grid-template-rows: repeat(9, 1fr);*/
}

.content input {
  /*display: flex;*/
  /*flex: 1 1 100%;*/
}

</style>``