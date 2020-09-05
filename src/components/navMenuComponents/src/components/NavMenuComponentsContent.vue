<template>
  <div
    class="nav-menu-components-content"
  >
    <component 
      :is="componentFactory"
    ></component>
  </div>
</template>

<script>
import button from './button'
import layout from './layout'
export default {
  props: {
    showContent: { type: String, default: '' }
  },
  data() {
    return {
    }
  },
  computed: {
    componentFactory() {
      console.log(this.showContent)
      switch (this.currentComponent) {
        case 'Button':
          return button
        case 'Layout':
          return layout
        default:
          return null
      }
    },
    currentComponent() {
      return this.showContent
    }
  },
  methods: {
  }
}
</script>

<style>

</style>
