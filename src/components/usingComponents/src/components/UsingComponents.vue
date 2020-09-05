<template>
  <div class="using-components"
  >
    轮子主页面
    <nav-menu-components></nav-menu-components>
  </div>
</template>

<script>
import UsingComponents from '../mixins/UsingComponents'
import NavMenuComponents from '../../../navMenuComponents/src/components/NavMenuComponents'

export default {
  components: {
    NavMenuComponents
  },
  mixins: [UsingComponents]
}
</script>

<style lang="scss">
@import '../styles/index.scss';
</style>
