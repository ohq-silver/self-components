<template>
  <div :class="'base-layout-row base-layout-row ' + spacingClass + ' ' + justifyClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    spacing: { type: Boolean, default: false },
    justify: { type: String, default: '' }
  },
  computed: {
    spacingClass () {
      if (this.spacing) {
        return 'base-layout-row-spacing'
      }
      return ''
    },
    justifyClass () {
      if (this.justify !== '') {
        return 'is-justify-' + this.justify
      }
      return ''
    }
  }
}
</script>

<style lang="scss">
@import '../styles/index.scss';
</style>
