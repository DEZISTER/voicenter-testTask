<template>
  <button type="button" class="my-button">
    <slot></slot>
  </button>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.my-button {
  height: 55px;
  min-width: 200px;
  padding: 0 35px;
  background: $accent-color;
  color: $light-text;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid $accent-color;
  transition-property: background, color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:hover {
    color: $accent-color;
    background: none;
  }
}
</style>