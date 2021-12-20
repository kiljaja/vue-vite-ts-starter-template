<script setup lang="ts">
// eslint-disable-next-line no-undef
defineProps<{ msg: string }>()
</script>

<template>
  <h1 data-testid="message">{{ msg }}</h1>
</template>

<style lang="postcss"></style>
