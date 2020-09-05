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
        { id: 1, title: 'Button 按钮' },
        { id: 2, title: 'Icon 图标' },
        { id: 3, title: 'Layout 布局' }
      ],
      showContent: 'Button'
    }
  },
  methods: {
    clickTitle(obj) {
      // eslint-disable-next-line
      const [englishTitle, chineseTitle] = obj.title.split(' ')
      this.showContent = englishTitle
    }
  }
}
</script>

<style lang="scss">
@import '../styles/index.scss';
</style>
