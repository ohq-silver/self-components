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
    <div
      class="icon-button-box"
    >
      <base-button
        v-for="(item, idx) in iconButtons"
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
    <h3>禁用按钮</h3>
    <div
      class="ban-button-box"
    >
      <base-button
        v-for="(item, idx) in banButtons"
        :key="idx"
        :buttonAttr="item.buttonAttr"
        @click="click"
      ></base-button>
    </div>
    <code-controller
      :codes="banCodes"
      :codeControllerIcon="banCodeControllerIcon"
      :codeControllerLabel="banCodeControllerLabel"
      :isShowCode="isShowBanCode"
      @showCode="showBanCode"
      @hideCode="hideBanCode"
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
      banCodes: [
        {
          tag: 'base-button',
          attr: [{ name: ':buttonAttr', attr: 'buttonAttr' }],
          body: [
            {
              codeContentDescribe: '// 在data中调用,如果要禁用，那么只需要将disabled: true添加到buttonAttr中即可',
              codeContent: [
                {
                  codeContentBeginTitle: 'buttonAttr: {',
                  codeContentInside: [
                    {
                      codeContentStructBegin: 'pre: {',
                      codeContentInsideName: 'icon: ',
                      codeContentInsideAttr: 'fa fa-search',
                      codeContentStructEnd: '}'
                    },
                    {
                      codeContentInsideName: 'label: ',
                      codeContentInsideAttr: '默认按钮'
                    },
                    {
                      codeContentInsideName: 'disabled: ',
                      codeContentInsideAttr: 'true'
                    }
                  ],
                  codeContentEndTitle: '}'
                }
              ]
            }
          ]
        },
        {
          tag: 'base-button',
          attr: [{ name: ':buttonAttr', attr: 'buttonAttr' }],
          body: [
            {
              codeContent: [
                {
                  codeContentBeginTitle: 'buttonAttr: {',
                  codeContentInside: [
                    {
                      codeContentStructBegin: 'suf: {',
                      codeContentInsideName: 'icon: ',
                      codeContentInsideAttr: 'fa fa-search',
                      codeContentStructEnd: '}'
                    },
                    {
                      codeContentInsideName: 'label: ',
                      codeContentInsideAttr: '默认按钮'
                    },
                    {
                      codeContentInsideName: 'disabled: ',
                      codeContentInsideAttr: 'true'
                    }
                  ],
                  codeContentEndTitle: '}'
                }
              ]
            }
          ]
        },
        {
          tag: 'base-button',
          attr: [{ name: ':buttonAttr', attr: 'buttonAttr' }],
          body: [
            {
              codeContent: [
                {
                  codeContentBeginTitle: 'buttonAttr: {',
                  codeContentInside: [
                    {
                      codeContentInsideName: 'type: ',
                      codeContentInsideAttr: 'base-button-primary'
                    },
                    {
                      codeContentInsideName: 'label: ',
                      codeContentInsideAttr: '主要按钮'
                    },
                    {
                      codeContentInsideName: 'disabled: ',
                      codeContentInsideAttr: 'true'
                    }
                  ],
                  codeContentEndTitle: '}'
                }
              ]
            }
          ]
        },
        {
          tag: 'base-button',
          attr: [{ name: ':buttonAttr', attr: 'buttonAttr' }],
          body: [
            {
              codeContent: [
                {
                  codeContentBeginTitle: 'buttonAttr: {',
                  codeContentInside: [
                    {
                      codeContentInsideName: 'type: ',
                      codeContentInsideAttr: 'base-button-success'
                    },
                    {
                      codeContentInsideName: 'label: ',
                      codeContentInsideAttr: '成功按钮'
                    },
                    {
                      codeContentInsideName: 'disabled: ',
                      codeContentInsideAttr: 'true'
                    }
                  ],
                  codeContentEndTitle: '}'
                }
              ]
            }
          ]
        },
        {
          tag: 'base-button',
          attr: [{ name: ':buttonAttr', attr: 'buttonAttr' }],
          body: [
            {
              codeContent: [
                {
                  codeContentBeginTitle: 'buttonAttr: {',
                  codeContentInside: [
                    {
                      codeContentInsideName: 'type: ',
                      codeContentInsideAttr: 'base-button-message'
                    },
                    {
                      codeContentInsideName: 'label: ',
                      codeContentInsideAttr: '信息按钮'
                    },
                    {
                      codeContentInsideName: 'disabled: ',
                      codeContentInsideAttr: 'true'
                    }
                  ],
                  codeContentEndTitle: '}'
                }
              ]
            }
          ]
        },
        {
          tag: 'base-button',
          attr: [{ name: ':buttonAttr', attr: 'buttonAttr' }],
          body: [
            {
              codeContent: [
                {
                  codeContentBeginTitle: 'buttonAttr: {',
                  codeContentInside: [
                    {
                      codeContentInsideName: 'type: ',
                      codeContentInsideAttr: 'base-button-warning'
                    },
                    {
                      codeContentInsideName: 'label: ',
                      codeContentInsideAttr: '警告按钮'
                    },
                    {
                      codeContentInsideName: 'disabled: ',
                      codeContentInsideAttr: 'true'
                    }
                  ],
                  codeContentEndTitle: '}'
                }
              ]
            }
          ]
        },
        {
          tag: 'base-button',
          attr: [{ name: ':buttonAttr', attr: 'buttonAttr' }],
          body: [
            {
              codeContent: [
                {
                  codeContentBeginTitle: 'buttonAttr: {',
                  codeContentInside: [
                    {
                      codeContentInsideName: 'type: ',
                      codeContentInsideAttr: 'base-button-danger'
                    },
                    {
                      codeContentInsideName: 'label: ',
                      codeContentInsideAttr: '危险按钮'
                    },
                    {
                      codeContentInsideName: 'disabled: ',
                      codeContentInsideAttr: 'true'
                    }
                  ],
                  codeContentEndTitle: '}'
                }
              ]
            }
          ]
        }
      ],
      codes: [
        {
          tag: 'base-button',
          attr: [{ name: ':buttonAttr', attr: 'buttonAttr' }],
          body: [
            {
              codeContentDescribe: '// 在data中调用,如果只保留图标，那么只需要将pre的属性保留即可',
              codeContent: [
                {
                  codeContentBeginTitle: 'buttonAttr: {',
                  codeContentInside: [
                    {
                      codeContentStructBegin: 'pre: {',
                      codeContentInsideName: 'icon: ',
                      codeContentInsideAttr: 'fa fa-search',
                      codeContentStructEnd: '}'
                    },
                    {
                      codeContentInsideName: 'label: ',
                      codeContentInsideAttr: '默认按钮'
                    }
                  ],
                  codeContentEndTitle: '}'
                }
              ]
            }
          ]
        },
        {
          tag: 'base-button',
          attr: [{ name: ':buttonAttr', attr: 'buttonAttr' }],
          body: [
            {
              codeContent: [
                {
                  codeContentBeginTitle: 'buttonAttr: {',
                  codeContentInside: [
                    {
                      codeContentStructBegin: 'suf: {',
                      codeContentInsideName: 'icon: ',
                      codeContentInsideAttr: 'fa fa-search',
                      codeContentStructEnd: '}'
                    },
                    {
                      codeContentInsideName: 'label: ',
                      codeContentInsideAttr: '默认按钮'
                    }
                  ],
                  codeContentEndTitle: '}'
                }
              ]
            }
          ]
        },
        {
          tag: 'base-button',
          attr: [{ name: ':buttonAttr', attr: 'buttonAttr' }],
          body: [
            {
              codeContent: [
                {
                  codeContentBeginTitle: 'buttonAttr: {',
                  codeContentInside: [
                    {
                      codeContentInsideName: 'type: ',
                      codeContentInsideAttr: 'base-button-primary'
                    },
                    {
                      codeContentInsideName: 'label: ',
                      codeContentInsideAttr: '主要按钮'
                    }
                  ],
                  codeContentEndTitle: '}'
                }
              ]
            }
          ]
        },
        {
          tag: 'base-button',
          attr: [{ name: ':buttonAttr', attr: 'buttonAttr' }],
          body: [
            {
              codeContent: [
                {
                  codeContentBeginTitle: 'buttonAttr: {',
                  codeContentInside: [
                    {
                      codeContentInsideName: 'type: ',
                      codeContentInsideAttr: 'base-button-success'
                    },
                    {
                      codeContentInsideName: 'label: ',
                      codeContentInsideAttr: '成功按钮'
                    }
                  ],
                  codeContentEndTitle: '}'
                }
              ]
            }
          ]
        },
        {
          tag: 'base-button',
          attr: [{ name: ':buttonAttr', attr: 'buttonAttr' }],
          body: [
            {
              codeContent: [
                {
                  codeContentBeginTitle: 'buttonAttr: {',
                  codeContentInside: [
                    {
                      codeContentInsideName: 'type: ',
                      codeContentInsideAttr: 'base-button-message'
                    },
                    {
                      codeContentInsideName: 'label: ',
                      codeContentInsideAttr: '信息按钮'
                    }
                  ],
                  codeContentEndTitle: '}'
                }
              ]
            }
          ]
        },
        {
          tag: 'base-button',
          attr: [{ name: ':buttonAttr', attr: 'buttonAttr' }],
          body: [
            {
              codeContent: [
                {
                  codeContentBeginTitle: 'buttonAttr: {',
                  codeContentInside: [
                    {
                      codeContentInsideName: 'type: ',
                      codeContentInsideAttr: 'base-button-warning'
                    },
                    {
                      codeContentInsideName: 'label: ',
                      codeContentInsideAttr: '警告按钮'
                    }
                  ],
                  codeContentEndTitle: '}'
                }
              ]
            }
          ]
        },
        {
          tag: 'base-button',
          attr: [{ name: ':buttonAttr', attr: 'buttonAttr' }],
          body: [
            {
              codeContent: [
                {
                  codeContentBeginTitle: 'buttonAttr: {',
                  codeContentInside: [
                    {
                      codeContentInsideName: 'type: ',
                      codeContentInsideAttr: 'base-button-danger'
                    },
                    {
                      codeContentInsideName: 'label: ',
                      codeContentInsideAttr: '危险按钮'
                    }
                  ],
                  codeContentEndTitle: '}'
                }
              ]
            }
          ]
        }
      ],
      isShowCode: false,
      isShowBanCode: false,
      iconButtons: [
        {
          buttonAttr: {
            pre: {
              icon: 'fa fa-search'
            }
          }
        },
        {
          buttonAttr: {
            pre: {
              icon: 'fa fa-edit'
            },
            type: 'base-button-primary'
          }
        },
        {
          buttonAttr: {
            pre: {
              icon: 'fa fa-check'
            },
            type: 'base-button-success'
          }
        },
        {
          buttonAttr: {
            pre: {
              icon: 'fa fa-envelope'
            },
            type: 'base-button-message'
          }
        },
        {
          buttonAttr: {
            pre: {
              icon: 'fa fa-star'
            },
            type: 'base-button-warning'
          }
        },
        {
          buttonAttr: {
            pre: {
              icon: 'fa fa-trash'
            },
            type: 'base-button-danger'
          }
        }
      ],
      banButtons: [
        {
          buttonAttr: {
            pre: {
              icon: 'fa fa-search'
            },
            label: '默认按钮',
            disabled: true
          }
        },
        {
          buttonAttr: {
            suf: {
              icon: 'fa fa-search'
            },
            label: '默认按钮',
            disabled: true
          }
        },
        {
          buttonAttr: {
            label: '主要按钮',
            type: 'base-button-primary',
            disabled: true
          }
        },
        {
          buttonAttr: {
            label: '成功按钮',
            type: 'base-button-success',
            disabled: true
          }
        },
        {
          buttonAttr: {
            label: '信息按钮',
            type: 'base-button-message',
            disabled: true
          }
        },
        {
          buttonAttr: {
            label: '警告按钮',
            type: 'base-button-warning',
            disabled: true
          }
        },
        {
          buttonAttr: {
            label: '危险按钮',
            type: 'base-button-danger',
            disabled: true
          }
        }
      ],
      codeControllerIcon: 'fa fa-plus-circle',
      codeControllerLabel: '显示代码',
      banCodeControllerIcon: 'fa fa-plus-circle',
      banCodeControllerLabel: '显示代码'
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
      this.banCodeControllerIcon = 'fa fa-plus-circle'
      this.banCodeControllerLabel = '显示代码'
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

<style lang="scss">
@import '../styles/index.scss';
</style>
