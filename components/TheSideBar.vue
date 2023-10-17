<template>
  <div class="section">
    <h2 class="section__title">
      <slot name="title">Here must be your title...</slot>
    </h2>

    <the-container class="section__container">
      <div class="section__sidebar">
        <h3 class="section__sidebar-title">Nav</h3>
        <slot name="links">Here must be your links...</slot>
      </div>

      <div class="section__content">
        <slot name="content">Here must be your content...</slot>
      </div>
    </the-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },

  mounted() {
  },
};
</script>

<style lang="scss">
.section {
  margin-bottom: 110px;

  &__title {
    text-align: center;
    height: 85px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
    font-size: 20px;
    font-weight: 700;
  }

  &__sidebar {
    width: 170px;
    flex: 170px 0;
    position: -webkit-sticky;
    position: sticky;
    top: 30px;
  }

  &__sidebar-title {
    margin-bottom: 40px;
    font-weight: 700;
    text-transform: uppercase;
  }

  &__sidebar-link {
    height: 33px;
    text-transform: uppercase;
    font-weight: 700;
    transition-property: color;
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      color: $accent-color;
    }
  }

  &__content {
    flex: 1 auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 110px;
  }

  &__container {
    display: flex;
    flex-flow: row;
    align-items: flex-start;
    justify-content: center;
    gap: 35px;
  }
}
</style>