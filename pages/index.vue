<template>
  <div>
    <the-head-section />
    
    <the-side-bar>
      <template v-slot:title>section Title</template>
      <template v-slot:links>
        <ul class="section__sidebar-list">
          <li class="section__sidebar-item">
            <a class="section__sidebar-link" :href="`#item_1`">Item 1</a>
          </li>
          <li class="section__sidebar-item">
            <a class="section__sidebar-link" :href="`#item_2`">Item 2</a>
          </li>
          <li class="section__sidebar-item">
            <a class="section__sidebar-link" :href="`#item_3`">Item 3</a>
          </li>
        </ul>
      </template>
      <template v-slot:content>
        <section
          :key="elem.key"
          v-for="elem in globalStore.testTaskSecondDescriptiveBlockItems"
          :class="
            globalStore.testTaskSecondDescriptiveBlockItems.indexOf(elem) %
              2 ===
            0
              ? 'item-section'
              : 'item-section  item-section--reverse'
          "
          :id="`item_${
            globalStore.testTaskSecondDescriptiveBlockItems.indexOf(elem) + 1
          }`"
        >
          <img
            class="item-section__img"
            width="476"
            :src="elem.image"
          />
          <div class="item-section__content">
            <h3 class="item-section__title">{{ elem.title }}</h3>
            <p class="item-section__subtitle">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the i
            </p>
            <p class="item-section__description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
            </p>

            <my-button class="item-section__btn">Read More</my-button>
          </div>
        </section>
      </template>
    </the-side-bar>

    <the-slider>
      <template v-slot:title>slides Section</template>
      <template v-slot:content>
        <SplideSlide
          class="slide-section__slide"
          :key="elem.key"
          v-for="elem in globalStore.testTaskSlidesBlockSlides"
        >
          <div class="slide__inner">
            <div class="slide__content">
              <h3 class="slide__title">{{elem.title}}</h3>
              <p class="slide__subtitle">
                Lorem Ipsum is simply dummy text of the printing and
              </p>
              <p class="slide__description">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standa typesetting
                industry. Lorem Ipsum has been the industry's standa
              </p>
              <my-button class="slide__btn">Read More</my-button>
            </div>
            <img class="slide__img" alt="Sample 1" width="577" :src="elem.image" />
          </div>
        </SplideSlide>
      </template>
    </the-slider>
  </div>
</template>

<script setup>
import { useGlobalStore } from "@/stores/globalStore";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";

const globalStore = useGlobalStore();
</script>

<style lang="scss" scoped>
.item-section {
  width: 100%;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  gap: 70px;

  &--reverse {
    flex-flow: row-reverse;
  }

  &__content {
    display: flex;
    flex-flow: column;
    justify-content: space-between;
  }

  &__title {
    font-weight: 700;
    text-transform: uppercase;
    height: 45px;
  }

  &__subtitle {
    font-weight: 500;
    height: 65px;
  }

  &__btn {
    width: 200px;
  }
}

.slide {
  display: flex;
  justify-content: center;
  align-items: center;

  &__inner {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    margin: 0 80px;
    gap: 40px;
  }

  &__content {
    margin-top: 50px;
    flex: 1;
    display: flex;
    flex-flow: column;
    gap: 25px;
  }

  &__title {
    font-size: 20px;
    font-weight: 700;
  }

  &__subtitle {
    font-size: 20px;
    line-height: 145%;
  }

  &__description {
    font-size: 20px;
    font-weight: 700;
  }

  &__btn {
    width: 200px;
  }

  &__img {
    background: $img-filler;
  }
}
</style>