<template>
  <div
    class="nav-menu-components-content"
  >
    <component 
      :is="componentFactory"
      :icon="icon"
    ></component>
  </div>
</template>

<script>
import ButtonComponents from '../../../buttonComponents/src/components/ButtonComponents'
import IconComponents from '../../../iconComponents/src/components/IconComponents'
import LayoutComponents from '../../../layoutComponents/src/components/LayoutComponents'
export default {
  props: {
    showContent: { type: String, default: '' }
  },
  data() {
    return {
      icon: 'fa fa-adjust'
    }
  },
  computed: {
    componentFactory() {
      switch (this.currentComponent) {
        case 'Button':
          return ButtonComponents
        case 'Icon':
          return IconComponents
        case 'Layout':
          return LayoutComponents
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
