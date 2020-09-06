<template>
  <div
    class="code-components-code-body-content"
  >
    <div v-for="(item, idx) in body" :key="idx">
      {{ item.text }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    body: { type: Array, default: null }
  }

}
</script>

<style>

</style>
