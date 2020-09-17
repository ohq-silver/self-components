<template>
  <div class="layout-components"
  >
    <h2>Layout 布局</h2>
    <div>通过基础的 24 分栏，迅速简便地创建布局</div>
    <h3>基础布局</h3>
    <div>使用单一分栏创建基础的栅格布局</div>
    <div class="base-layout-box">
      <base-layout-row>
          <base-layout-col :span="24">
          </base-layout-col>
      </base-layout-row>
      <base-layout-row>
          <base-layout-col :span="12">
          </base-layout-col>
          <base-layout-col :span="12">
          </base-layout-col>
      </base-layout-row>
      <base-layout-row>
          <base-layout-col :span="8">
          </base-layout-col>
          <base-layout-col :span="8">
          </base-layout-col>
          <base-layout-col :span="8">
          </base-layout-col>
      </base-layout-row>
      <base-layout-row>
          <base-layout-col :span="6">
          </base-layout-col>
          <base-layout-col :span="6">
          </base-layout-col>
          <base-layout-col :span="6">
          </base-layout-col>
          <base-layout-col :span="6">
          </base-layout-col>
      </base-layout-row>
      <base-layout-row>
          <base-layout-col :span="4">
          </base-layout-col>
          <base-layout-col :span="4">
          </base-layout-col>
          <base-layout-col :span="4">
          </base-layout-col>
          <base-layout-col :span="4">
          </base-layout-col>
          <base-layout-col :span="4">
          </base-layout-col>
          <base-layout-col :span="4">
          </base-layout-col>
      </base-layout-row>
    </div>
    <code-controller
      :codes="baseCodes"
      :codeControllerIcon="baseCodeControllerIcon"
      :codeControllerLabel="baseCodeControllerLabel"
      :isShowCode="isShowBaseCode"
      @showCode="showBaseCode"
      @hideCode="hideBaseCode"
    ></code-controller>
    <h3>分栏间隔</h3>
    <div>分栏之间存在间隔</div>
    <div class="base-layout-box">
      <base-layout-row :spacing="true">
          <base-layout-col :span="6">
          </base-layout-col>
          <base-layout-col :span="6">
          </base-layout-col>
          <base-layout-col :span="6">
          </base-layout-col>
          <base-layout-col :span="6">
          </base-layout-col>
      </base-layout-row>
    </div>
    <code-controller
      :codes="spacingCodes"
      :codeControllerIcon="spacingCodeControllerIcon"
      :codeControllerLabel="spacingCodeControllerLabel"
      :isShowCode="isShowSpacingCode"
      @showCode="showSpacingCode"
      @hideCode="hideSpacingCode"
    ></code-controller>
    <h3>混合布局</h3>
    <div>通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局</div>
    <div class="base-layout-box">
      <base-layout-row :spacing="true">
          <base-layout-col :span="16">
          </base-layout-col>
          <base-layout-col :span="8">
          </base-layout-col>
      </base-layout-row>
      <base-layout-row :spacing="true">
          <base-layout-col :span="8">
          </base-layout-col>
          <base-layout-col :span="8">
          </base-layout-col>
          <base-layout-col :span="4">
          </base-layout-col>
          <base-layout-col :span="4">
          </base-layout-col>
      </base-layout-row>
      <base-layout-row :spacing="true">
          <base-layout-col :span="4">
          </base-layout-col>
          <base-layout-col :span="16">
          </base-layout-col>
          <base-layout-col :span="4">
          </base-layout-col>
      </base-layout-row>
    </div>
    <code-controller
      :codes="mixinCodes"
      :codeControllerIcon="mixinCodeControllerIcon"
      :codeControllerLabel="mixinCodeControllerLabel"
      :isShowCode="isShowMixinCode"
      @showCode="showMixinCode"
      @hideCode="hideMixinCode"
    ></code-controller>
    <h3>分栏偏移</h3>
    <div>支持偏移指定的栏数</div>
    <div class="base-layout-box">
      <base-layout-row>
          <base-layout-col :span="6">
          </base-layout-col>
          <base-layout-col :span="6" :offset="6">
          </base-layout-col>
      </base-layout-row>
      <base-layout-row>
          <base-layout-col :span="6" :offset="6">
          </base-layout-col>
          <base-layout-col :span="6" :offset="6">
          </base-layout-col>
      </base-layout-row>
      <base-layout-row>
          <base-layout-col :span="12" :offset="6">
          </base-layout-col>
      </base-layout-row>
    </div>
    <code-controller
      :codes="offsetCodes"
      :codeControllerIcon="offsetCodeControllerIcon"
      :codeControllerLabel="offsetCodeControllerLabel"
      :isShowCode="isShowOffsetCode"
      @showCode="showOffsetCode"
      @hideCode="hideOffsetCode"
    ></code-controller>
    <h3>对齐方式</h3>
    <div>通过 flex 布局来对分栏进行灵活的对齐</div>
    <div class="base-layout-box">
      <base-layout-row>
          <base-layout-col :span="6">
          </base-layout-col>
          <base-layout-col :span="6">
          </base-layout-col>
          <base-layout-col :span="6">
          </base-layout-col>
      </base-layout-row>
      <base-layout-row justify="center">
          <base-layout-col :span="6">
          </base-layout-col>
          <base-layout-col :span="6">
          </base-layout-col>
          <base-layout-col :span="6">
          </base-layout-col>
      </base-layout-row>
      <base-layout-row justify="end">
          <base-layout-col :span="6">
          </base-layout-col>
          <base-layout-col :span="6">
          </base-layout-col>
          <base-layout-col :span="6">
          </base-layout-col>
      </base-layout-row>
      <base-layout-row justify="space-between">
          <base-layout-col :span="6">
          </base-layout-col>
          <base-layout-col :span="6">
          </base-layout-col>
          <base-layout-col :span="6">
          </base-layout-col>
      </base-layout-row>
      <base-layout-row justify="space-around">
          <base-layout-col :span="6">
          </base-layout-col>
          <base-layout-col :span="6">
          </base-layout-col>
          <base-layout-col :span="6">
          </base-layout-col>
      </base-layout-row>
    </div>
    <code-controller
      :codes="justifyCodes"
      :codeControllerIcon="justifyCodeControllerIcon"
      :codeControllerLabel="justifyCodeControllerLabel"
      :isShowCode="isShowJustifyCode"
      @showCode="showJustifyCode"
      @hideCode="hideJustifyCode"
    ></code-controller>
  </div>
</template>

<script>
import LayoutComponents from '../mixins/LayoutComponents'
import CodeController from '../../../codeController/src/components/CodeController'

import BaseLayoutCol from './BaseLayoutCol'
import BaseLayoutRow from './BaseLayoutRow'
export default {
  components: {
    BaseLayoutCol,
    BaseLayoutRow,
    CodeController
  },
  mixins: [LayoutComponents],
  data() {
    return {
      baseCodes: [
        {
          tag: 'base-row',
          insideTag: [
            {
              tag: 'base-col',
              attr: [
                { name: ':span', attr: '24' }
              ]
            }
          ],
          body: [
            { codeContentDescribe: 'base-col标签中必须先接受一个div标签再去填充内容' }
          ]
        },
        {
          tag: 'base-row',
          insideTag: [
            {
              tag: 'base-col',
              attr: [
                { name: ':span', attr: '12' }
              ]
            },
            {
              tag: 'base-col',
              attr: [
                { name: ':span', attr: '12' }
              ]
            }
          ]
        },
        {
          tag: 'base-row',
          insideTag: [
            {
              tag: 'base-col',
              attr: [
                { name: ':span', attr: '8' }
              ]
            },
            {
              tag: 'base-col',
              attr: [
                { name: ':span', attr: '8' }
              ]
            },
            {
              tag: 'base-col',
              attr: [
                { name: ':span', attr: '8' }
              ]
            }
          ]
        },
        {
          tag: 'base-row',
          insideTag: [
            {
              tag: 'base-col',
              attr: [
                { name: ':span', attr: '6' }
              ]
            },
            {
              tag: 'base-col',
              attr: [
                { name: ':span', attr: '6' }
              ]
            },
            {
              tag: 'base-col',
              attr: [
                { name: ':span', attr: '6' }
              ]
            },
            {
              tag: 'base-col',
              attr: [
                { name: ':span', attr: '6' }
              ]
            }
          ]
        },
        {
          tag: 'base-row',
          insideTag: [
            {
              tag: 'base-col',
              attr: [
                { name: ':span', attr: '4' }
              ]
            },
            {
              tag: 'base-col',
              attr: [
                { name: ':span', attr: '4' }
              ]
            },
            {
              tag: 'base-col',
              attr: [
                { name: ':span', attr: '4' }
              ]
            },
            {
              tag: 'base-col',
              attr: [
                { name: ':span', attr: '4' }
              ]
            },
            {
              tag: 'base-col',
              attr: [
                { name: ':span', attr: '4' }
              ]
            },
            {
              tag: 'base-col',
              attr: [
                { name: ':span', attr: '4' }
              ]
            }
          ]
        }
      ],
      isShowBaseCode: false,
      baseCodeControllerIcon: 'fa fa-plus-circle',
      baseCodeControllerLabel: '显示代码',
      spacingCodes: [
        {
          tag: 'base-row',
          attr: [
            { name: ':spacing', attr: 'true' }
          ],
          insideTag: [
            {
              tag: 'base-col',
              attr: [
                { name: ':span', attr: '6' }
              ]
            },
            {
              tag: 'base-col',
              attr: [
                { name: ':span', attr: '6' }
              ]
            },
            {
              tag: 'base-col',
              attr: [
                { name: ':span', attr: '6' }
              ]
            },
            {
              tag: 'base-col',
              attr: [
                { name: ':span', attr: '6' }
              ]
            }
          ]
        }
      ],
      isShowSpacingCode: false,
      spacingCodeControllerIcon: 'fa fa-plus-circle',
      spacingCodeControllerLabel: '显示代码',
      mixinCodes: [
        {
          tag: 'base-row',
          attr: [
            { name: ':spacing', attr: 'true' }
          ],
          body: [
            { codeContentDescribe: 'span提供的值有4,6,8,12,16,不管使用哪个，都需要相加的和为24才会生效' }
          ],
          insideTag: [
            {
              tag: 'base-col',
              attr: [
                { name: ':span', attr: '16' }
              ]
            },
            {
              tag: 'base-col',
              attr: [
                { name: ':span', attr: '8' }
              ]
            }
          ]
        },
        {
          tag: 'base-row',
          attr: [
            { name: ':spacing', attr: 'true' }
          ],
          insideTag: [
            {
              tag: 'base-col',
              attr: [
                { name: ':span', attr: '8' }
              ]
            },
            {
              tag: 'base-col',
              attr: [
                { name: ':span', attr: '8' }
              ]
            },
            {
              tag: 'base-col',
              attr: [
                { name: ':span', attr: '4' }
              ]
            },
            {
              tag: 'base-col',
              attr: [
                { name: ':span', attr: '4' }
              ]
            }
          ]
        },
        {
          tag: 'base-row',
          attr: [
            { name: ':spacing', attr: 'true' }
          ],
          insideTag: [
            {
              tag: 'base-col',
              attr: [
                { name: ':span', attr: '4' }
              ]
            },
            {
              tag: 'base-col',
              attr: [
                { name: ':span', attr: '16' }
              ]
            },
            {
              tag: 'base-col',
              attr: [
                { name: ':span', attr: '4' }
              ]
            }
          ]
        }
      ],
      isShowMixinCode: false,
      mixinCodeControllerIcon: 'fa fa-plus-circle',
      mixinCodeControllerLabel: '显示代码',
      offsetCodes: [
        {
          tag: 'base-row',
          body: [
            { codeContentDescribe: 'offset提供的值有4,6,8,12' }
          ],
          insideTag: [
            {
              tag: 'base-col',
              attr: [
                { name: ':span', attr: '6' }
              ]
            },
            {
              tag: 'base-col',
              attr: [
                { name: ':span', attr: '6' },
                { name: ':offset', attr: '6' }
              ]
            }
          ]
        },
        {
          tag: 'base-row',
          insideTag: [
            {
              tag: 'base-col',
              attr: [
                { name: ':span', attr: '6' },
                { name: ':offset', attr: '6' }
              ]
            },
            {
              tag: 'base-col',
              attr: [
                { name: ':span', attr: '6' },
                { name: ':offset', attr: '6' }
              ]
            }
          ]
        },
        {
          tag: 'base-row',
          insideTag: [
            {
              tag: 'base-col',
              attr: [
                { name: ':span', attr: '12' },
                { name: ':offset', attr: '6' }
              ]
            }
          ]
        }
      ],
      isShowOffsetCode: false,
      offsetCodeControllerIcon: 'fa fa-plus-circle',
      offsetCodeControllerLabel: '显示代码',
      justifyCodes: [
        {
          tag: 'base-row',
          insideTag: [
            {
              tag: 'base-col',
              attr: [
                { name: ':span', attr: '6' }
              ]
            },
            {
              tag: 'base-col',
              attr: [
                { name: ':span', attr: '6' }
              ]
            },
            {
              tag: 'base-col',
              attr: [
                { name: ':span', attr: '6' }
              ]
            }
          ]
        },
        {
          tag: 'base-row',
          attr: [
            { name: 'justify', attr: 'center' }
          ],
          insideTag: [
            {
              tag: 'base-col',
              attr: [
                { name: ':span', attr: '6' }
              ]
            },
            {
              tag: 'base-col',
              attr: [
                { name: ':span', attr: '6' }
              ]
            },
            {
              tag: 'base-col',
              attr: [
                { name: ':span', attr: '6' }
              ]
            }
          ]
        },
        {
          tag: 'base-row',
          attr: [
            { name: 'justify', attr: 'end' }
          ],
          insideTag: [
            {
              tag: 'base-col',
              attr: [
                { name: ':span', attr: '6' }
              ]
            },
            {
              tag: 'base-col',
              attr: [
                { name: ':span', attr: '6' }
              ]
            },
            {
              tag: 'base-col',
              attr: [
                { name: ':span', attr: '6' }
              ]
            }
          ]
        },
        {
          tag: 'base-row',
          attr: [
            { name: 'justify', attr: 'space-between' }
          ],
          insideTag: [
            {
              tag: 'base-col',
              attr: [
                { name: ':span', attr: '6' }
              ]
            },
            {
              tag: 'base-col',
              attr: [
                { name: ':span', attr: '6' }
              ]
            },
            {
              tag: 'base-col',
              attr: [
                { name: ':span', attr: '6' }
              ]
            }
          ]
        },
        {
          tag: 'base-row',
          attr: [
            { name: 'justify', attr: 'space-around' }
          ],
          insideTag: [
            {
              tag: 'base-col',
              attr: [
                { name: ':span', attr: '6' }
              ]
            },
            {
              tag: 'base-col',
              attr: [
                { name: ':span', attr: '6' }
              ]
            },
            {
              tag: 'base-col',
              attr: [
                { name: ':span', attr: '6' }
              ]
            }
          ]
        }
      ],
      isShowJustifyCode: false,
      justifyCodeControllerIcon: 'fa fa-plus-circle',
      justifyCodeControllerLabel: '显示代码'
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
    showSpacingCode() {
      this.isShowSpacingCode = true
      this.spacingCodeControllerIcon = 'fa fa-minus-circle'
      this.spacingCodeControllerLabel = '隐藏代码'
    },
    hideSpacingCode() {
      this.isShowSpacingCode = false
      this.spacingCodeControllerIcon = 'fa fa-plus-circle'
      this.spacingCodeControllerLabel = '显示代码'
    },
    showMixinCode() {
      this.isShowMixinCode = true
      this.mixinCodeControllerIcon = 'fa fa-minus-circle'
      this.mixinControllerLabel = '隐藏代码'
    },
    hideMixinCode() {
      this.isShowMixinCode = false
      this.mixinCodeControllerIcon = 'fa fa-plus-circle'
      this.mixinCodeControllerLabel = '显示代码'
    },
    showOffsetCode() {
      this.isShowOffsetCode = true
      this.offsetCodeControllerIcon = 'fa fa-minus-circle'
      this.offsetControllerLabel = '隐藏代码'
    },
    hideOffsetCode() {
      this.isShowOffsetCode = false
      this.offsetCodeControllerIcon = 'fa fa-plus-circle'
      this.offsetCodeControllerLabel = '显示代码'
    },
    showJustifyCode() {
      this.isShowJustifyCode = true
      this.justifyCodeControllerIcon = 'fa fa-minus-circle'
      this.justifyControllerLabel = '隐藏代码'
    },
    hideJustifyCode() {
      this.isShowJustifyCode = false
      this.justifyCodeControllerIcon = 'fa fa-plus-circle'
      this.justifyCodeControllerLabel = '显示代码'
    }
  }
}
</script>

