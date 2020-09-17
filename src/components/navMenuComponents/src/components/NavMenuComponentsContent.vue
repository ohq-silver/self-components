<template>
  <div
    class="nav-menu-components-content"
  >
    <component 
      :is="componentFactory"
      :icons="icons"
    ></component>
  </div>
</template>

<script>
import ButtonComponents from '../../../buttonComponents/src/components/ButtonComponents'
import BorderComponents from '../../../borderComponents/src/components/BorderComponents'
import ColorComponents from '../../../colorComponents/src/components/ColorComponents'
import ContainerComponents from '../../../containerConponents/src/components/ContainerComponents'
import IconComponents from '../../../iconComponents/src/components/IconComponents'
import LayoutComponents from '../../../layoutComponents/src/components/LayoutComponents'
import LinkComponents from '../../../linkComponents/src/components/LinkComponents'
import RadioComponents from '../../../radioComponents/src/components/RadioComponents'
export default {
  props: {
    showContent: { type: String, default: '' }
  },
  data() {
    return {
      icons: [
        { icon: 'fa fa-plus-circle' },
        { icon: 'fa fa-minus-circle' },
        { icon: 'fa fa-edit' },
        { icon: 'fa fa-search' }
      ]
    }
  },
  computed: {
    componentFactory() {
      switch (this.currentComponent) {
        case 'Button':
          return ButtonComponents
        case 'Border':
          return BorderComponents
        case 'Color':
          return ColorComponents
        case 'Container':
          return ContainerComponents
        case 'Icon':
          return IconComponents
        case 'Layout':
          return LayoutComponents
        case 'Link':
          return LinkComponents
        case 'Radio':
          return RadioComponents
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
