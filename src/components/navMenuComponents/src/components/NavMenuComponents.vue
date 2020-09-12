<template>
  <div class="nav-menu-components"
  >
    <nav-menu-components-titles
      :titles="titles"
      :describe="describe"
      @clickTitle="clickTitle"
    ></nav-menu-components-titles>
    <nav-menu-components-content
      :showContent="showContent"
    ></nav-menu-components-content>
  </div>
</template>

<script>
import NavMenuComponents from '../mixins/NavMenuComponents'
import NavMenuComponentsTitles from './NavMenuComponentsTitles'
import NavMenuComponentsContent from './NavMenuComponentsContent'

export default {
  components: {
    NavMenuComponentsTitles,
    NavMenuComponentsContent
  },
  props: {
    titles: { type: Array, default: () => ([]) },
    showContent: { type: String, default: '' },
    describe: { type: String, default: '' }
  },
  mixins: [NavMenuComponents],
  data() {
    return {
    }
  },
  methods: {
    clickTitle(obj) {
      this.$emit('clickedTitle', obj)
    }
  }
}
</script>

<style lang="scss">
@import '../styles/index.scss';
</style>
