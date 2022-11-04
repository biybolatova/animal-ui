<template>
  <div class="appeal__item">
    <div class="appeal__heading item" @click="showAppeal">
      <div class="appeal__title">
        <slot name="title"></slot>
      </div>
      <div class="appeal_dropdown">
        <img class="icon" :src="dropDownPath">
      </div>
    </div>
    <transition name="fade">
      <div class="appeal__input item" v-show="appealVisible">
        <!--      Изменяется-->
        <my-input
            v-model="animalAppeal.city"
            :placeholder="placeHolderText"
            :isChosen="appealIsChosen"
            @update:modelValue="updateCity"
        >
        </my-input>
      </div>
    </transition>
    <!--  только в двух компонентах -->
    <div class="appeal__choose item" v-show="searchResultVisible">
      <div class="appeal__city" v-for="searchResult in dropDownData" @click="chooseCity($event)">
        {{ searchResult.title }}
      </div>
    </div>
  </div>
  <!--      <my-input-->
  <!--          class="input"-->
  <!--          v-model="animalAppeal.address"-->
  <!--          placeholder="Адрес">-->
  <!--      </my-input>-->
  <!--      <my-input-->
  <!--          class="input"-->
  <!--          v-model="animalAppeal.type"-->
  <!--          placeholder="Тип">-->
  <!--      </my-input>-->
  <!--      <my-input-->
  <!--          class="input"-->
  <!--          v-model="animalAppeal.findDate"-->
  <!--          placeholder="Дата">-->
  <!--      </my-input>-->
  <!--      <my-input-->
  <!--          class="input"-->
  <!--          v-model="animalAppeal.contactPhone"-->
  <!--          placeholder="Телефон">-->
  <!--      </my-input>-->
  <!--      <my-input-->
  <!--          class="input"-->
  <!--          v-model="animalAppeal.additionalInfo"-->
  <!--          placeholder="Доп.информация">-->
  <!--      </my-input>-->
  <!--      <my-input-->
  <!--          class="input"-->
  <!--          v-model="animalAppeal.photo"-->
  <!--          placeholder="Фото">-->
  <!--      </my-input>-->
</template>

<script>
import expandDown from "../../assets/svg/Expand_down.svg";
import expandUp from "../../assets/svg/Expand_up.svg";

export default {
  name: 'appeal-item',
  data() {
    return {
      searchResultVisible: false,
      appealVisible: false,
      appealIsChosen: false,
      animalAppeal: {
        city: null,
        address: null,
        type: null,
        findDate: null,
        contactPhone: null,
        additionalInfo: null,
        photo: null,
      },
      dropDownSource: [expandDown, expandUp],
      dropDownPath: null,
    }
  },
  props: {
    dropDownData: {
      required: true,
      type: Array
    },
    placeHolderText: {
      required: true,
      type: String
    }
  },
  watch: {
    'animalAppeal.city'(newValue, oldValue) {

    }
  },
  setup() {
    return [expandDown, expandUp]
  },
  methods: {
    updateCity(newValue) {
      this.searchResultVisible = true;
      this.appealIsChosen = false;

      // Если был выбран элемент из выпадающего списка, скрывать результат выдачи.
      this.dropDownData.forEach(item => {
        if (item.title === newValue) {
          this.searchResultVisible = false;
          this.appealIsChosen = true;
        }

        //  todo: Менять цвет при выборе элемента на зеленый
        //  fixme: Убрать баг, когда пишешь название города и он совпадает - закрывается список городов
      })
    },
    chooseCity(event) {
      this.animalAppeal.city = event.target.innerHTML
      this.$emit('create', this.animalAppeal)

      // Город был выбран
      this.appealIsChosen = true;
      console.log('appeal change:', this.appealIsChosen)
      this.searchResultVisible = false;
    },
    showAppeal() {
      this.searchResultVisible = false;

      console.log('click dropdown');
      let currentIndex = this.dropDownSource.findIndex(svg => svg === this.dropDownPath);

      console.log('currentIndex: ', currentIndex);
      console.log('dropDownPath: ', this.dropDownPath);

      let nextIndex = currentIndex + 1;
      if (!this.dropDownSource[nextIndex]) {
        nextIndex = 0;
      }

      this.dropDownPath = this.dropDownSource[nextIndex];
      console.log('dropDownPath2: ', this.dropDownPath);

      this.appealVisible = !this.appealVisible
    },
  },
  mounted() {
    this.dropDownPath = this.dropDownSource[0];
  },
}
</script>

<style scoped>
.appeal__title {
  padding: 10px;
  border-radius: 8px;
}

.icon {
  vertical-align: middle;
}

.appeal__city {
  padding: 10px;
  border-bottom: 1px solid lightgrey;
  cursor: pointer;
}

.item {
  margin-top: 10px;
}

.appeal__item {
  display: flex;
  flex-direction: column;
}

.appeal__heading {
  display: flex;
  background-color: lightgrey;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

.appeal_dropdown {
  border-radius: 50%;
  background-color: #6B6464;
  padding: 10px;
  margin-right: 15px;
}


/* <transition name='fade'> */
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

/* <transition name='fade'> */
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}


</style>