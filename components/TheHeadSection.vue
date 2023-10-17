<template>
  <section class="head-section">
    <the-container class="head-section__container">
      <div class="head-section__content">
        <h1 class="head-section__title">Main Heaader 1</h1>
        <p class="head-section__subtitle">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <p class="head-section__description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an
        </p>
        <my-button>Read More</my-button>
      </div>

      <img
        class="head-section__image"
        width="614"
        :src="globalStore.testTaskHeaderImage"
      />
    </the-container>
  </section>
</template>

<script setup>
import { useGlobalStore } from "@/stores/globalStore";
const globalStore = useGlobalStore();
</script>

<style lang="scss" scoped>
.head-section {
  background: $sub-bg-color;
  padding: 45px 0 75px;

  &__container {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
    gap: 50px;
  }

  &__content {
    padding: 25px 25px 15px;
  }

  &__title {
    font-size: 25px;
    font-weight: 500;
    margin-bottom: 14px;
  }

  &__subtitle {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 14px;
  }

  &__description {
    margin-bottom: 50px;
    font-family: "Inter", sans-serif;
  }

  &__image {
    background: $img-filler;
  }
}
</style>