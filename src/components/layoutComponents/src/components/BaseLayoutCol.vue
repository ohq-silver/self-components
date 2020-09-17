<template>
  <div
    :class="'base-layout-col base-layout-col-' + span + ' ' + offsetClass"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    span: { type: Number, default: 0 },
    offset: { type: Number, default: 0 }
  },
  computed: {
    offsetClass () {
      if (this.offset !== 0) {
        return 'base-layout-col-offset-' + this.offset
      }
      return ''
    }
  }
}
</script>

<style lang="scss">
@import '../styles/index.scss';
</style>
