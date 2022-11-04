<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'search-button',
  components: {},

}
</script>

<style scoped>
.btn {
  background-color: #BEF8EA;
  border-radius: 6px;
  border: none;
  color: #3D5D79;
  cursor: pointer;
  font-size: 100%;
  height: 44px;
  line-height: 1.15;
  outline: none;
  overflow: hidden;
  padding: 0 25px;
}
.btn:disabled {
  cursor: default;
}
</style>