<script setup lang="ts">
  import { defineProps } from 'vue'

  const props = defineProps({
    msg: {
      type: String,
      default: '',
    },
  })
</script>

<template>
  <h1 data-testid="message">{{ msg }}</h1>
</template>

<style lang="postcss"></style>
