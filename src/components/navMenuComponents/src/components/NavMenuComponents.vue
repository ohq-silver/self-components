<template>
  <div class="nav-menu-components"
  >
    <nav-menu-components-titles
      :titles="titles"
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
  mixins: [NavMenuComponents],
  data() {
    return {
      titles: [
        { title: 'Layout 布局' },
        { title: 'Button 按钮' }
      ],
      showContent: 'Button'
    }
  },
  methods: {
    clickTitle(title) {
      // eslint-disable-next-line
      const [englishTitle, chineseTitle] = title.split(' ')
      this.showContent = englishTitle
    }
  }
}
</script>

<style lang="scss">
@import '../styles/index.scss';
</style>
