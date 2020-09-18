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
      <div class="code-controller-box">
        <code-controller
          :codes="baseCodes"
          :isShowCode="true"
        ></code-controller>
      </div>
      <h4>头部+主体+尾部</h4>
      <base-container>
        <base-header>Header</base-header>
        <base-main>Main</base-main>
        <base-footer>Footer</base-footer>
      </base-container>
      <div class="code-controller-box">
        <code-controller
          :codes="baseTwoCodes"
          :isShowCode="true"
        ></code-controller>
      </div>
      <h4>侧部+主体</h4>
      <base-container>
        <base-aside>Aside</base-aside>
        <base-main>Main</base-main>
      </base-container>
      <div class="code-controller-box">
        <code-controller
          :codes="baseThreeCodes"
          :isShowCode="true"
        ></code-controller>
      </div>
      <h4>头部+侧部+主体</h4>
      <base-container>
        <base-header>Header</base-header>
        <base-aside>Aside</base-aside>
        <base-main>Main</base-main>
      </base-container>
      <div class="code-controller-box">
        <code-controller
          :codes="baseFourCodes"
          :isShowCode="true"
        ></code-controller>
      </div>
      <h4>头部+侧部+主体+尾部</h4>
      <base-container>
        <base-header>Header</base-header>
        <base-aside>Aside</base-aside>
        <base-main>Main</base-main>
        <base-footer>Footer</base-footer>
      </base-container>
      <div class="code-controller-box">
        <code-controller
          :codes="baseFiveCodes"
          :isShowCode="true"
        ></code-controller>
      </div>
      <h4>头部+侧部+主体+尾部(Header以下部分是一个Container整体)</h4>
      <base-container>
        <base-header>Header</base-header>
        <base-container>
          <base-aside class="is-vertical-1">Aside</base-aside>
          <base-container class="is-vertical">
            <base-main>Main</base-main>
            <base-footer>Footer</base-footer>
          </base-container>
        </base-container>
      </base-container>
      <div class="code-controller-box">
        <div>
          <div>&lt;base-container&gt;</div>
            <div style="margin-left: 2em">&lt;base-header&gt;Header&lt;/base-header&gt;</div>
            <div style="margin-left: 3em">&lt;base-container&gt;</div>
            <div style="margin-left: 4em">&lt;base-aside&nbsp;class="is-vertical-1"&gt;Aside&lt;/base-aside&gt;</div>
            <div style="margin-left: 4em">&lt;base-container&nbsp;class="is-vertical"&gt;</div>
              <div style="margin-left: 5em">&lt;base-main&gt;Main&lt;/base-main&gt;</div>
              <div style="margin-left: 5em">&lt;base-footer&gt;Footer&lt;/base-footer&gt;</div>
            <div style="margin-left: 4em">&lt;/base-container&gt;</div>
            <div style="margin-left: 3em">&lt;/base-container&gt;</div>
          <div>&lt;/base-container&gt;</div>
        </div>
      </div>
      <h4>侧部+头部+主体(左边是Aside，右边是Container)</h4>
      <base-container>
        <base-aside class="is-vertical-1">Aside</base-aside>
        <base-container class="is-vertical">
          <base-header>Header</base-header>
          <base-main>Main</base-main>
        </base-container>
      </base-container>
      <div class="code-controller-box">
        <div>
          <div>&lt;base-container&gt;</div>
            <div style="margin-left: 2em">&lt;base-aside&nbsp;class="is-vertical-1"&gt;Aside&lt;/base-aside&gt;</div>
            <div style="margin-left: 3em">&lt;base-container&nbsp;class="is-vertical"&gt;</div>
              <div style="margin-left: 4em">&lt;base-header&gt;Header&lt;/base-header&gt;</div>
              <div style="margin-left: 4em">&lt;base-main&gt;Main&lt;/base-main&gt;</div>
            <div style="margin-left: 3em">&lt;/base-container&gt;</div>
          <div>&lt;/base-container&gt;</div>
        </div>
      </div>
      <h4>侧部+头部+主体+尾部(左边是Aside，右边是Container)</h4>
      <base-container>
        <base-aside class="is-vertical-2">Aside</base-aside>
        <base-container class="is-vertical">
          <base-header>Header</base-header>
          <base-main>Main</base-main>
          <base-footer>Main</base-footer>
        </base-container>
      </base-container>
      <div class="code-controller-box">
        <div>
          <div>&lt;base-container&gt;</div>
            <div style="margin-left: 2em">&lt;base-aside&nbsp;class="is-vertical-2"&gt;Aside&lt;/base-aside&gt;</div>
            <div style="margin-left: 3em">&lt;base-container&nbsp;class="is-vertical"&gt;</div>
              <div style="margin-left: 4em">&lt;base-header&gt;Header&lt;/base-header&gt;</div>
              <div style="margin-left: 4em">&lt;base-main&gt;Main&lt;/base-main&gt;</div>
              <div style="margin-left: 4em">&lt;base-footer&gt;Footer&lt;/base-footer&gt;</div>
            <div style="margin-left: 3em">&lt;/base-container&gt;</div>
          <div>&lt;/base-container&gt;</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContainerComponents from '../mixins/ContainerComponents.js'
import CodeController from '../../../codeController/src/components/CodeController'

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
    BaseMain,
    CodeController
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
      ],
      baseCodes: [
        {
          tag: 'base-container',
          insideTag: [
            {
              tag: 'base-header',
              label: 'Header'
            },
            {
              tag: 'base-main',
              label: 'Main'
            }
          ]
        }
      ],
      baseTwoCodes: [
        {
          tag: 'base-container',
          insideTag: [
            {
              tag: 'base-header',
              label: 'Header'
            },
            {
              tag: 'base-main',
              label: 'Main'
            },
            {
              tag: 'base-footer',
              label: 'Footer'
            }
          ]
        }
      ],
      baseThreeCodes: [
        {
          tag: 'base-container',
          insideTag: [
            {
              tag: 'base-aside',
              label: 'Aside'
            },
            {
              tag: 'base-footer',
              label: 'Footer'
            }
          ]
        }
      ],
      baseFourCodes: [
        {
          tag: 'base-container',
          insideTag: [
            {
              tag: 'base-header',
              label: 'Header'
            },
            {
              tag: 'base-aside',
              label: 'Aside'
            },
            {
              tag: 'base-footer',
              label: 'Footer'
            }
          ]
        }
      ],
      baseFiveCodes: [
        {
          tag: 'base-container',
          insideTag: [
            {
              tag: 'base-header',
              label: 'Header'
            },
            {
              tag: 'base-aside',
              label: 'Aside'
            },
            {
              tag: 'base-footer',
              label: 'Main'
            },
            {
              tag: 'base-footer',
              label: 'Footer'
            }
          ]
        }
      ],
      isShowBaseCode: true
    }
  }
}
</script>

<style lang="scss">
@import '../styles/index.scss';
</style>
