<template>
  <div class="link-components"
  >
    <h2>Link 文字按钮</h2>
    <div>文字超链接</div>
    <h3>基础用法</h3>
    <div>基础的文字链接用法</div>
    <div
      class="base-link-box"
    >
      <base-link
        v-for="(item,idx) in baseLinks"
        :key="idx"
        :disabled="item.disabled"
        :href="item.href"
        :label="item.label"
        :type="item.type"
        :preIcon="item.preIcon"
        :sufIcon="item.sufIcon"
        :target="item.target"
      ></base-link>
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
    <div>基础的文字链接用法</div>
    <div
      class="base-link-ban-box"
    >
      <base-link
        v-for="(item,idx) in bankLinks"
        :key="idx"
        :disabled="item.disabled"
        :href="item.href"
        :label="item.label"
        :type="item.type"
        :target="item.target"
      ></base-link>
    </div>
    <code-controller
      :codes="banCodes"
      :codeControllerIcon="banCodeControllerIcon"
      :codeControllerLabel="banCodeControllerLabel"
      :isShowCode="isShowBanCode"
      @showCode="showBanCode"
      @hideCode="hideBanCode"
    ></code-controller>

    <h3>下划线</h3>
    <div
      class="base-link-under-line-box"
    >
      <base-link
        v-for="(item,idx) in underLineLinks"
        :key="idx"
        :label="item.label"
        :underLine="item.underLine"
      ></base-link>
    </div>
    <code-controller
      :codes="underLineCodes"
      :codeControllerIcon="underLineCodeControllerIcon"
      :codeControllerLabel="underLineCodeControllerLabel"
      :isShowCode="isShowUnderLineCode"
      @showCode="showUnderLineCode"
      @hideCode="hideUnderLineCode"
    ></code-controller>

    <h3>图标</h3>
    <div>带图标的按钮可增强识别度</div>
    <div
      class="base-link-icon-box"
    >
      <base-link
        v-for="(item,idx) in iconLinks"
        :key="idx"
        :label="item.label"
        :preIcon="item.preIcon"
        :sufIcon="item.sufIcon"
      ></base-link>
    </div>
    <code-controller
      :codes="iconCodes"
      :codeControllerIcon="iconCodeControllerIcon"
      :codeControllerLabel="iconCodeControllerLabel"
      :isShowCode="isShowIconCode"
      @showCode="showIconCode"
      @hideCode="hideIconCode"
    ></code-controller>
  </div>
</template>

<script>
import LinkComponents from '../mixins/LinkComponents'
import CodeController from '../../../codeController/src/components/CodeController'

import BaseLink from './BaseLink'
export default {
  components: {
    BaseLink,
    CodeController
  },
  mixins: [LinkComponents],
  data() {
    return {
      bankLinks: [
        {
          href: '#',
          label: '默认链接',
          target: '_blank',
          disabled: true
        },
        {
          label: '主要链接',
          type: 'primary',
          disabled: true
        },
        {
          label: '成功链接',
          type: 'success',
          disabled: true
        },
        {
          label: '信息链接',
          type: 'message',
          disabled: true
        },
        {
          label: '警告链接',
          type: 'warning',
          disabled: true
        },
        {
          label: '危险链接',
          type: 'danger',
          disabled: true
        }
      ],
      banCodes: [
        {
          tag: 'base-link',
          attr: [
            { name: 'href', attr: '#' },
            { name: 'label', attr: '默认链接' },
            { name: 'target', attr: '_blank' },
            { name: ':disabled', attr: 'true' }
          ]
        },
        {
          tag: 'base-link',
          attr: [
            { name: 'label', attr: '主要链接' },
            { name: 'type', attr: 'primary' },
            { name: ':disabled', attr: 'true' }
          ]
        },
        {
          tag: 'base-link',
          attr: [
            { name: 'label', attr: '成功链接' },
            { name: 'type', attr: 'success' },
            { name: ':disabled', attr: 'true' }
          ]
        },
        {
          tag: 'base-link',
          attr: [
            { name: 'label', attr: '信息链接' },
            { name: 'type', attr: 'message' },
            { name: ':disabled', attr: 'true' }
          ]
        },
        {
          tag: 'base-link',
          attr: [
            { name: 'label', attr: '警告链接' },
            { name: 'type', attr: 'warning' },
            { name: ':disabled', attr: 'true' }
          ]
        },
        {
          tag: 'base-link',
          attr: [
            { name: 'label', attr: '危险链接' },
            { name: 'type', attr: 'danger' },
            { name: ':disabled', attr: 'true' }
          ]
        }
      ],
      baseLinks: [
        {
          href: '#',
          label: '默认链接',
          target: '_blank'
        },
        {
          label: '主要链接',
          type: 'primary'
        },
        {
          label: '成功链接',
          type: 'success'
        },
        {
          label: '信息链接',
          type: 'message'
        },
        {
          label: '警告链接',
          type: 'warning'
        },
        {
          label: '危险链接',
          type: 'danger'
        }
      ],
      baseCodes: [
        {
          tag: 'base-link',
          attr: [
            { name: 'href', attr: '#' },
            { name: 'label', attr: '默认链接' },
            { name: 'target', attr: '_blank' }
          ]
        },
        {
          tag: 'base-link',
          attr: [
            { name: 'label', attr: '主要链接' },
            { name: 'type', attr: 'primary' }
          ]
        },
        {
          tag: 'base-link',
          attr: [
            { name: 'label', attr: '成功链接' },
            { name: 'type', attr: 'success' }
          ]
        },
        {
          tag: 'base-link',
          attr: [
            { name: 'label', attr: '信息链接' },
            { name: 'type', attr: 'message' }
          ]
        },
        {
          tag: 'base-link',
          attr: [
            { name: 'label', attr: '警告链接' },
            { name: 'type', attr: 'warning' }
          ]
        },
        {
          tag: 'base-link',
          attr: [
            { name: 'label', attr: '危险链接' },
            { name: 'type', attr: 'danger' }
          ]
        }
      ],
      iconLinks: [
        {
          label: '编辑',
          preIcon: 'fa fa-edit'
        },
        {
          label: '查看',
          sufIcon: 'fa fa-eye'
        }
      ],
      iconCodes: [
        {
          tag: 'base-link',
          attr: [
            { name: 'label', attr: '编辑' },
            { name: 'preIcon', attr: 'fa fa-edit' }
          ]
        },
        {
          tag: 'base-link',
          attr: [
            { name: 'label', attr: '查看' },
            { name: 'sufIcon', attr: 'fa fa-eye' }
          ]
        }
      ],
      underLineLinks: [
        {
          label: '无下划线',
          underLine: false
        },
        {
          label: '有下划线'
        }
      ],
      underLineCodes: [
        {
          tag: 'base-link',
          attr: [
            { name: 'label', attr: '无下划线' },
            { name: ':underLine', attr: 'false' }
          ]
        },
        {
          tag: 'base-link',
          attr: [
            { name: 'label', attr: '有下划线' }
          ]
        }
      ],
      isShowBaseCode: false,
      baseCodeControllerIcon: 'fa fa-plus-circle',
      baseCodeControllerLabel: '显示代码',
      isShowBanCode: false,
      banCodeControllerIcon: 'fa fa-plus-circle',
      banCodeControllerLabel: '显示代码',
      isShowUnderLineCode: false,
      underLineCodeControllerIcon: 'fa fa-plus-circle',
      underLineCodeControllerLabel: '显示代码',
      isShowIconCode: false,
      iconCodeControllerIcon: 'fa fa-plus-circle',
      iconCodeControllerLabel: '显示代码'
    }
  },
  methods: {
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
    },
    showUnderLineCode() {
      this.isShowUnderLineCode = true
      this.underLineCodeControllerIcon = 'fa fa-minus-circle'
      this.underLineCodeControllerLabel = '隐藏代码'
    },
    hideUnderLineCode() {
      this.isShowUnderLineCode = false
      this.underLineCodeControllerIcon = 'fa fa-plus-circle'
      this.underLineCodeControllerLabel = '显示代码'
    },
    showIconCode() {
      this.isShowIconCode = true
      this.iconCodeControllerIcon = 'fa fa-minus-circle'
      this.iconCodeControllerLabel = '隐藏代码'
    },
    hideIconCode() {
      this.isShowIconCode = false
      this.iconCodeControllerIcon = 'fa fa-plus-circle'
      this.iconCodeControllerLabel = '显示代码'
    }
  }
}
</script>


