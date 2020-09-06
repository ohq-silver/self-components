<template>
  <div class="icon-components"
  >
    <h2>Icon图标集合</h2>
    <div>提供一套常用的图标集合，是基于font-awesome封装的</div>
    <h3>使用方法</h3>
    <div>直接通过设置类名为 fa fa-iconName 来使用即可。例如：</div>
    <div class="icon-components-box">
      <div
      class="icon-components-icon"
      v-for="(item, idx) in icons" 
      :key="idx"
      >
        <icon :icon="item.icon"></icon>
      </div>
    </div>
    <code-controller
      :codes="codes"
      :codeControllerIcon="codeControllerIcon"
      :codeControllerLabel="codeControllerLabel"
      :isShowCode="isShowCode"
      @showCode="showCode"
      @hideCode="hideCode"
    ></code-controller>
    <h3>更多图标集合请进入以下网址寻找</h3>
    <a href="https://fontawesome.com/icons?d=gallery" target="_blank">font awesome</a>
  </div>
</template>

<script>
import Icon from './Icon'
import CodeController from '../../../codeController/src/components/CodeController'
import IconComponents from '../mixins/IconComponents'

export default {
  components: {
    CodeController,
    Icon
  },
  props: {
    icons: { type: Array, default: () => ([]) }
  },
  mixins: [IconComponents],
  data() {
    return {
      codes: [
        {
          tag: 'icon',
          attr: [{ name: 'icon', attr: 'fa fa-plus-circle' }]
        },
        {
          tag: 'icon',
          attr: [{ name: 'icon', attr: 'fa fa-minus-circle' }]
        },
        {
          tag: 'icon',
          attr: [{ name: 'icon', attr: 'fa fa-edit' }]
        },
        {
          tag: 'icon',
          attr: [{ name: 'icon', attr: 'fa fa-search' }]
        }
      ],
      isShowCode: false,
      codeControllerIcon: 'fa fa-plus-circle',
      codeControllerLabel: '显示代码'
    }
  },
  methods: {
    showCode() {
      this.isShowCode = true
      this.codeControllerIcon = 'fa fa-minus-circle'
      this.codeControllerLabel = '隐藏代码'
    },
    hideCode() {
      this.isShowCode = false
      this.codeControllerIcon = 'fa fa-plus-circle'
      this.codeControllerLabel = '显示代码'
    }
  }
}
</script>

<style lang="scss">
@import '../styles/index.scss';
</style>
