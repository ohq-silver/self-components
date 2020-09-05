<template>
  <div
    class="code-components-close-tag"
  >
    <span>&lt;</span><span>/{{ tag }}</span><span>&gt;</span>
  </div>
</template>

<script>
export default {
  props: {
    tag: { type: String, default: '' }
  }
}
</script>

<style>

</style>
