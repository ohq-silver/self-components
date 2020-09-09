<template>
  <div class="border-components"
  >
    <h2>Border边框</h2>
    <div>我们对边框进行统一规范，可用于按钮、卡片、弹窗等组件里</div>
    <h3>圆角</h3>
    <div>我们提供了以下几种圆角样式，以供选择。</div>
    <div class="border-radius-box">
      <div
      v-for="(item, idx) in borderRadius"
      :key="idx"
    >
        <div class="title">
          {{ item.title }}
        </div>
        <div class="describe">
          {{ item.describe }}
        </div>
        <div :class="'border-radius-item-' + idx"></div>
      </div>
    </div>
    <h3>投影</h3>
    <div>我们提供了以下几种投影样式，以供选择</div>
    <div class="box-shadow-box">
      <div
        v-for="(item, idx) in borderBoxShadows"
        :key="idx"
      >
        <div :class="'box-shadow-item-' + idx"></div>
        <div class="describe">
          {{ item.describe }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BorderComponents from '../mixins/BorderComponents'

export default {
  mixins: [BorderComponents],
  data() {
    return {
      borderRadius: [
        {
          title: '无圆角',
          describe: 'border-radius: 0px'
        },
        {
          title: '小圆角',
          describe: 'border-radius: 2px'
        },
        {
          title: '大圆角',
          describe: 'border-radius: 4px'
        },
        {
          title: '圆形圆角',
          describe: 'border-radius: 30px'
        }
      ],
      borderBoxShadows: [
        { describe: '基础投影 box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)' },
        { describe: '浅色投影 box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)' }
      ]
    }
  }
}
</script>

<style lang="scss">
@import '../styles/index.scss';
</style>
