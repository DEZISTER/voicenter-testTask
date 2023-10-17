<template>
  <footer>
    <nav class="nav">
      <the-container class="nav__container">
        <ul class="nav__content">
          <li class="nav__page">
            <nuxt-link class="nav__link" to="/" exact no-prefetch
              >contacts</nuxt-link
            >
          </li>
          <li class="nav__page">
            <nuxt-link class="nav__link" to="/nav2" exact no-prefetch
              >social Links</nuxt-link
            >
          </li>
        </ul>
      </the-container>
    </nav>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.nav {
  background: $main-bg-color;

  &__content {
    height: 100px;
    display: flex;
    flex-flow: row;
    justify-content: flex-start;
    align-items: center;
    gap: 280px;
  }

  &__link {
    width: 200px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition-property: color;
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;

    &:hover {
      color: $accent-color;
    }
  }
}
</style>