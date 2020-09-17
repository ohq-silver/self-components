<template>
  <div
    class="container-components"
  >
    <h2>Container布局容器</h2>
    <div v-for="(item, idx) in describe" :key="idx">{{ item.content }}</div>
    <h3>常见页面布局</h3>
    <div class="base-container-box">
      <h4>头部+主体</h4>
      <base-container>
        <base-header>Header</base-header>
        <base-main>Main</base-main>
      </base-container>
      <h4>头部+主体+尾部</h4>
      <base-container>
        <base-header>Header</base-header>
        <base-main>Main</base-main>
        <base-footer>Footer</base-footer>
      </base-container>
      <h4>侧部+主体</h4>
      <base-container>
        <base-aside>Aside</base-aside>
        <base-main>Main</base-main>
      </base-container>
      <h4>头部+侧部+主体</h4>
      <base-container>
        <base-header>Header</base-header>
        <base-aside>Aside</base-aside>
        <base-main>Main</base-main>
      </base-container>
      <h4>头部+侧部+主体+尾部</h4>
      <base-container>
        <base-header>Header</base-header>
        <base-aside>Aside</base-aside>
        <base-main>Main</base-main>
        <base-footer>Footer</base-footer>
      </base-container>
      <h4>头部+侧部+主体+尾部</h4>
      <base-container>
        <base-header>Header</base-header>
        <base-container>
          <base-aside>Aside</base-aside>
          <base-main>Main</base-main>
          <base-footer>Footer</base-footer>
        </base-container>
      </base-container>
    </div>
  </div>
</template>

<script>
import ContainerComponents from '../mixins/ContainerComponents.js'

import BaseAside from './BaseAside'
import BaseContainer from './BaseContainer'
import BaseFooter from './BaseFooter'
import BaseHeader from './BaseHeader'
import BaseMain from './BaseMain'
export default {
  components: {
    BaseAside,
    BaseContainer,
    BaseFooter,
    BaseHeader,
    BaseMain
  },
  mixins: [ContainerComponents],
  data() {
    return {
      describe: [
        { content: '用于布局的容器组件，方便快速搭建页面的基本结构' },
        { content: '<base-container>：外层容器' },
        { content: '<base-header>：顶栏容器' },
        { content: '<base-aside>：侧边栏容器' },
        { content: '<base-main>：主要区域容器' },
        { content: '<base-footer>：底栏容器' },
        { content: '以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。此外，<base-container> 的子元素只能是后四者，后四者的父元素也只能是 <base-container>' }
      ]
    }
  }
}
</script>

<style lang="scss">
@import '../styles/index.scss';
</style>
