<template>
  <div class="button-components"
  >
    <h2>Button按钮</h2>
    <div>常用的操作按钮</div>
    <h3>基础用法</h3>
    <div
      class="button-box"
    >
      <base-button
        v-for="(item, idx) in buttons"
        :key="idx"
        :buttonAttr="item.buttonAttr"
        @click="click"
      ></base-button>
    </div>
    <code-controller
      :codes="codes"
      :codeControllerIcon="codeControllerIcon"
      :codeControllerLabel="codeControllerLabel"
      :isShowCode="isShowCode"
      @showCode="showCode"
      @hideCode="hideCode"
    ></code-controller>

  </div>
</template>

<script>
import BaseButton from './BaseButton'
import ButtonComponents from '../mixins/ButtonComponents'

import CodeController from '../../../codeController/src/components/CodeController'

export default {
  components: {
    BaseButton,
    CodeController
  },
  mixins: [ButtonComponents],
  data() {
    return {
      buttons: [
        {
          buttonAttr: {
            pre: {
              icon: 'fa fa-search'
            },
            label: '默认按钮'
          }
        },
        {
          buttonAttr: {
            suf: {
              icon: 'fa fa-search'
            },
            label: '默认按钮'
          }
        },
        {
          buttonAttr: {
            label: '主要按钮',
            type: 'base-button-primary'
          }
        },
        {
          buttonAttr: {
            label: '成功按钮',
            type: 'base-button-success'
          }
        },
        {
          buttonAttr: {
            label: '信息按钮',
            type: 'base-button-message'
          }
        },
        {
          buttonAttr: {
            label: '警告按钮',
            type: 'base-button-warning'
          }
        },
        {
          buttonAttr: {
            label: '危险按钮',
            type: 'base-button-danger'
          }
        }
      ],
      codes: [
        {
          tag: 'base-button',
          attr: [{ name: ':buttonAttr', attr: 'buttonAttr' }],
          body: [{ text: '1' }]
        },
        {
          tag: 'base-button',
          attr: [{ name: ':buttonAttr', attr: 'buttonAttr' }]
        }
        // {
        //   tag: 'icon',
        //   attr: [{ name: 'icon', attr: 'fa fa-edit' }]
        // },
        // {
        //   tag: 'icon',
        //   attr: [{ name: 'icon', attr: 'fa fa-search' }]
        // }
      ],
      isShowCode: false,
      codeControllerIcon: 'fa fa-plus-circle',
      codeControllerLabel: '显示代码'
    }
  },
  methods: {
    click({ label }) {
      console.log(label)
    },
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
