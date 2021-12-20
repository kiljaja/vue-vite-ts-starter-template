<script setup lang="ts">
  import { ref } from 'vue';

  defineProps<{ msg: string }>();
</script>

<template>
  <h1>{{ msg }}</h1>
</template>

<style lang="postcss"></style>
