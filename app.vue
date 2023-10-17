<template>
  <div>
    <the-navigation />

    <main>
      <nuxtPage />
    </main>

    <the-footer />
  </div>
</template>

<script setup>
import { useGlobalStore } from "@/stores/globalStore";
const globalStore = useGlobalStore();

onServerPrefetch(async () => {
  await globalStore.getImages();
})
</script>