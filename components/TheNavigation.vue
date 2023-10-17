<template>
  <nav class="nav">
    <the-container class="nav__container">
      <nuxt-link class="nav__logo" to="/" exact no-prefetch>LOGO</nuxt-link>

      <ul class="nav__content">
        <li class="nav__page">
          <nuxt-link class="nav__link" to="/" exact no-prefetch
            >Nav 1</nuxt-link
          >
        </li>
        <li class="nav__page">
          <nuxt-link class="nav__link" to="/navTwo" exact no-prefetch
            >Nav 2</nuxt-link
          >
        </li>
        <li class="nav__page">
          <nuxt-link class="nav__link" to="/contacts" exact no-prefetch
            >Contacts</nuxt-link
          >
        </li>
      </ul>
    </the-container>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.router-link-active {
  font-weight: bold;
}
.nav {
  width: 100%;
  height: 100px;
  background: $main-bg-color;
  display: flex;
  align-items: center;

  &__container {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
  }

  &__logo {
    font-size: 25px;
    font-weight: 500;
    width: 160px;
    text-align: center;
  }

  &__content {
    display: flex;
    flex-flow: row;
    justify-content: flex-end;
  }

  &__link {
    width: 120px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    color: $dark-text;
    text-align: center;
    transition-property: color;
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;

    &.router-link-active,
    &:hover {
      color: $accent-color;
    }
  }
}
</style>