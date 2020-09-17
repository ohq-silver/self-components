<template>
  <div class="using-components"
  >
    <nav-menu-components
      :describe="basic.describe"
      :titles="basic.titles"
      :showContent="basic.showContent"
      @clickedTitle="clickedBasicTitle"
    ></nav-menu-components>
    <!-- <nav-menu-components
      :describe="describe"
      :titles="titles"
      :showContent="showContent"
      @clickeTitle="clickeTitle"
    ></nav-menu-components> -->
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
    <!-- <base-radio
      :value="radio.value"
      :label="radio.label"
      :name="radio.name"
      :checked="radio.checked"
      :disabled="radio.disabled"
    ></base-radio> -->
  </div>
</template>

<script>
import UsingComponents from '../mixins/UsingComponents'
import NavMenuComponents from '../../../navMenuComponents/src/components/NavMenuComponents'
// import Icon from '../../../iconComponents/src/components/Icon'
// import BaseButton from '../../../buttonComponents/src/components/BaseButton'
// import BaseLink from '../../../linkComponents/src/components/BaseLink'
// import BaseRadio from '../../../radioComponents/src/components/BaseRadio'

export default {
  components: {
    // Icon,
    // BaseButton,
    // BaseLink,
    // BaseRadio,
    NavMenuComponents
  },
  mixins: [UsingComponents],
  data() {
    return {
      basic: {
        titles: [
          { describe: 'Basic' },
          { id: 1, title: 'Button 按钮' },
          { id: 2, title: 'Border 边框' },
          { id: 3, title: 'Color 色彩' },
          { id: 4, title: 'Container 布局容器' },
          { id: 5, title: 'Icon 图标' },
          { id: 6, title: 'Layout 布局' },
          { id: 7, title: 'Link 文字链接' },
          { describe: 'Form' },
          { id: 7, title: 'Radio 单选框' }
          // { id: 8, title: 'Border 边框' },
          // { id: 9, title: 'Color 色彩' },
          // { id: 10, title: 'Icon 图标' },
          // { id: 11, title: 'Layout 布局' },
          // { id: 12, title: 'Link 文字链接' }
        ],
        describe: 'Basic',
        showContent: 'Button'
      }
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
      // radio: {
      //   value: '备选项1',
      //   label: '备选项',
      //   name: '备选项',
      //   checked: false
      // }
    }
  },
  methods: {
    clickedBasicTitle(obj) {
      // eslint-disable-next-line
      const [englishTitle, chineseTitle] = obj.title.split(' ')
      this.basic.showContent = englishTitle
    }
  }
}
</script>

<style lang="scss">
@import '../styles/index.scss';
</style>
