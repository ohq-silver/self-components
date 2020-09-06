<template>
  <div class="using-components"
  >
    <nav-menu-components
      :titles="titles"
      :showContent="showContent"
      @clickeTitle="clickeTitle"
    ></nav-menu-components>
  </div>
</template>

<script>
import UsingComponents from '../mixins/UsingComponents'
import NavMenuComponents from '../../../navMenuComponents/src/components/NavMenuComponents'
// import Icon from '../../../iconComponents/src/components/Icon'

export default {
  components: {
    // Icon,
    NavMenuComponents
  },
  mixins: [UsingComponents],
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
    clickeTitle(obj) {
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
