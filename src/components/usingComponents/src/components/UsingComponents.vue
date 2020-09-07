<template>
  <div class="using-components"
  >
    <nav-menu-components
      :titles="titles"
      :showContent="showContent"
      @clickeTitle="clickeTitle"
    ></nav-menu-components>
    <!-- <base-button :buttonAttr="buttonAttr"></base-button> -->
  </div>
</template>

<script>
import UsingComponents from '../mixins/UsingComponents'
import NavMenuComponents from '../../../navMenuComponents/src/components/NavMenuComponents'
// import Icon from '../../../iconComponents/src/components/Icon'
// import BaseButton from '../../../buttonComponents/src/components/BaseButton'

export default {
  components: {
    // Icon,
    // BaseButton,
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
      // buttonAttr: {
      //   pre: {
      //     icon: 'fa fa-search'
      //   },
      //   type: 'base-button-danger',
      //   label: '默认按钮'
      // }
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
