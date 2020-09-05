<template>
  <div class="icon-components"
  >
    <h2>Icon图标集合</h2>
    <div>提供一套常用的图标集合，是基于font-awesome封装的</div>
    <i :class="icon"></i>
  </div>
</template>

<script>
import IconComponents from '../mixins/IconComponents'

export default {
  props: {
    icon: { type: String, default: '' }
  },
  mixins: [IconComponents]
}
</script>

<style lang="scss">
@import '../styles/index.scss';
</style>
