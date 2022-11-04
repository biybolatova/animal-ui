<template>
  <input
      :class="{ 'input': true, 'chosen': isChosen }"
      :value="modelValue"
      @input="updateInput"
      type="text"
  >
</template>

<script>
export default {
  name: 'my-input',
  props: {
    modelValue: [String, Number],
    isChosen: Boolean,
  },
  methods: {
    updateInput(event) {
      this.$emit('update:isChosen', false);
      this.$emit('update:modelValue', event.target.value);
    }
  }
}
</script>

<style scoped>
.input {
  width: 100%;
  border: 1px solid black;
  border-radius: 8px;
  padding: 10px 15px;
  box-sizing: border-box;
}

.chosen {
  background-color: #CFF3F3;
}
</style>