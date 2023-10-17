<template>
    <div class="container">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "main-container",
    }
</script>

<style lang="scss" scoped>
.container {
    width: 100%;
    padding: 0 60px;
    margin: auto;

    @media screen and (min-width: 1440px) {
        width: 1440px;
    }
}
</style>