<template>
  <div class="radio-components"
  >
    <h2>Radio单选框</h2>
    <div>在一组备选项中进行单选</div>
    <h3>基础用法</h3>
    <div>由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器，因为单选框通常都有多个备选项，所以这里建议使用循环来做单选框的组件</div>
    <div
      class="base-radio-box"
    >
      <base-radio
        v-for="(item, idx) in baseRadios"
        :key="idx"
        :value="item.value"
        :label="item.label"
        :name="item.name"
        :checked="item.checked"
        :disabled="item.disabled"
        @click="clickBaseRadio"
        @change="changeInputStatus(idx)"
      ></base-radio>
    </div>
    <code-controller
      :codes="baseCodes"
      :codeControllerIcon="baseCodeControllerIcon"
      :codeControllerLabel="baseCodeControllerLabel"
      :isShowCode="isShowBaseCode"
      @showCode="showBaseCode"
      @hideCode="hideBaseCode"
    ></code-controller>
    <h3>禁用状态</h3>
    <div>单选框不可用状态</div>
    <div
      class="base-radio-box"
    >
      <base-radio
        v-for="(item, idx) in banRadios"
        :key="idx"
        :value="item.value"
        :label="item.label"
        :name="item.name"
        :checked="item.checked"
        :disabled="item.disabled"
      ></base-radio>
    </div>
    <code-controller
      :codes="banCodes"
      :codeControllerIcon="banCodeControllerIcon"
      :codeControllerLabel="banCodeControllerLabel"
      :isShowCode="isShowBanCode"
      @showCode="showBanCode"
      @hideCode="hideBanCode"
    ></code-controller>
    <h3>单选框组</h3>
    <div>适用于在多个互斥的选项中选择的场景</div>
    <div
      class="base-radio-box"
    >
      <!-- <base-radio
        v-for="(item, idx) in banRadios"
        :key="idx"
        :value="item.value"
        :label="item.label"
        :name="item.name"
        :checked="item.checked"
        :disabled="item.disabled"
      ></base-radio> -->
    </div>
  </div>
</template>

<script>
import RadioComponents from '../mixins/RadioComponents'
import CodeController from '../../../codeController/src/components/CodeController'

import BaseRadio from './BaseRadio'
export default {
  components: {
    BaseRadio,
    CodeController
  },
  mixins: [RadioComponents],
  data() {
    return {
      baseRadios: [
        {
          value: '备选项1',
          label: '备选项',
          name: '备选项',
          checked: true
        },
        {
          value: '备选项2',
          label: '备选项',
          name: '备选项',
          checked: false
        }
      ],
      baseCodes: [
        {
          tag: 'base-radio',
          attr: [
            { name: 'value', attr: '备选项' },
            { name: 'label', attr: '备选项' },
            { name: 'name', attr: '备选项' },
            { name: 'checked', attr: 'true' },
            { name: '@click', attr: 'click' },
            { name: '@change', attr: 'change' }
          ]
        },
        {
          tag: 'base-radio',
          attr: [
            { name: 'value', attr: '备选项' },
            { name: 'label', attr: '备选项' },
            { name: 'name', attr: '备选项' },
            { name: 'checked', attr: 'false' },
            { name: '@click', attr: 'click' },
            { name: '@change', attr: 'change' }
          ]
        }
      ],
      banRadios: [
        {
          value: '备选项1',
          label: '备选项',
          name: '禁用备选项',
          checked: true,
          disabled: true
        },
        {
          value: '备选项2',
          label: '备选项',
          name: '禁用备选项',
          checked: false,
          disabled: true
        }
      ],
      banCodes: [
        {
          tag: 'base-radio',
          attr: [
            { name: 'value', attr: '备选项' },
            { name: 'label', attr: '备选项' },
            { name: 'name', attr: '备选项' },
            { name: 'checked', attr: 'true' },
            { name: 'disabled', attr: 'true' }
          ]
        },
        {
          tag: 'base-radio',
          attr: [
            { name: 'value', attr: '备选项' },
            { name: 'label', attr: '备选项' },
            { name: 'name', attr: '备选项' },
            { name: 'checked', attr: 'false' },
            { name: 'disabled', attr: 'true' }
          ]
        }
      ],
      isShowBaseCode: false,
      baseCodeControllerIcon: 'fa fa-plus-circle',
      baseCodeControllerLabel: '显示代码',
      isShowBanCode: false,
      banCodeControllerIcon: 'fa fa-plus-circle',
      banCodeControllerLabel: '显示代码'
    }
  },
  methods: {
    changeInputStatus(index) {
      this.baseRadios.map((val, idx) => {
        if (idx === index) {
          val.checked = true
        } else {
          val.checked = false
        }
      })
    },
    clickBaseRadio({ value, checked }) {
      console.log(value, checked)
    },
    showBaseCode() {
      this.isShowBaseCode = true
      this.baseCodeControllerIcon = 'fa fa-minus-circle'
      this.baseCodeControllerLabel = '隐藏代码'
    },
    hideBaseCode() {
      this.isShowBaseCode = false
      this.baseCodeControllerIcon = 'fa fa-plus-circle'
      this.baseCodeControllerLabel = '显示代码'
    },
    showBanCode() {
      this.isShowBanCode = true
      this.banCodeControllerIcon = 'fa fa-minus-circle'
      this.banCodeControllerLabel = '隐藏代码'
    },
    hideBanCode() {
      this.isShowBanCode = false
      this.banCodeControllerIcon = 'fa fa-plus-circle'
      this.banCodeControllerLabel = '显示代码'
    }
  }
}
</script>
