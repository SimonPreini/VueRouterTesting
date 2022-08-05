<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
const routeToHome = () => {
  router.push('/home');
}
</script>

<template>
  <button class="test-button" @click="routeToHome">Home</button>
</template>

<style scoped>

</style>
