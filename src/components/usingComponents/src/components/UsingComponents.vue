<template>
  <div class="using-components"
  >
    <nav-menu-components
      :titles="titles"
      :showContent="showContent"
      @clickeTitle="clickeTitle"
    ></nav-menu-components>
    <!-- <base-button :buttonAttr="buttonAttr"></base-button>
    <base-link
      :disabled="link.disabled"
      :href="link.href"
      :label="link.label"
      :type="link.type"
      :preIcon="link.preIcon"
      :sufIcon="link.sufIcon"
      :target="link.target"
    ></base-link> -->
  </div>
</template>

<script>
import UsingComponents from '../mixins/UsingComponents'
import NavMenuComponents from '../../../navMenuComponents/src/components/NavMenuComponents'
// import Icon from '../../../iconComponents/src/components/Icon'
// import BaseButton from '../../../buttonComponents/src/components/BaseButton'
// import BaseLink from '../../../linkComponents/src/components/BaseLink'

export default {
  components: {
    // Icon,
    // BaseButton,
    // BaseLink,
    NavMenuComponents
  },
  mixins: [UsingComponents],
  data() {
    return {
      titles: [
        { id: 1, title: 'Button 按钮' },
        { id: 2, title: 'Border 边框' },
        { id: 3, title: 'Color 色彩' },
        { id: 4, title: 'Icon 图标' },
        { id: 5, title: 'Layout 布局' },
        { id: 6, title: 'Link 文字链接' }
      ],
      showContent: 'Button'
    //   buttonAttr: {
    //     pre: {
    //       icon: 'fa fa-search'
    //     },
    //     type: 'base-button-success',
    //     disabled: true,
    //     label: '默认按钮'
    //   },
    //   link: {
    //     href: '#',
    //     label: '默认链接',
    //     disabled: true,
    //     underLine: true,
    //     preIcon: 'fa fa-eye',
    //     type: 'primary',
    //     target: '_blank'
    //   }
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
