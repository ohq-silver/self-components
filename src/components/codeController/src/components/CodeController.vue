<template>
  <div class="code-controller"
  >
    <div v-if="isShowCode">
      <code-components
        v-for="(item, idx) in codes"
        :key="idx"
        :tag="item.tag"
        :attr="item.attr"
        :body="item.body"
        :insideTag="item.insideTag"
      ></code-components>
    </div>
    <div
      v-if="!isShowCode"
      class="code-controller-button"
      @click="showCode"
    >
      <i :class="codeControllerIcon"></i>&nbsp;<span>{{codeControllerLabel}}</span>
    </div>
    <div
      v-if="isShowCode"
      class="code-controller-button"
      @click="hideCode"
    >
      <i :class="codeControllerIcon"></i>&nbsp;<span>{{codeControllerLabel}}</span>
    </div>
  </div>
</template>

<script>
import CodeController from '../mixins/CodeController'

import Icon from '../../../iconComponents/src/components/Icon'
import CodeComponents from '../../../codeComponents/src/components/CodeComponents'
export default {
  components: {
    CodeComponents,
    Icon
  },
  props: {
    isShowCode: { type: Boolean, default: false },
    codeControllerIcon: { type: String, default: '' },
    codeControllerLabel: { type: String, default: '' },
    codes: { type: Array, default: () => ([]) }
  },
  mixins: [CodeController],
  methods: {
    showCode() {
      this.$emit('showCode')
    },
    hideCode() {
      this.$emit('hideCode')
    }
  }
}
</script>

<style lang="scss">
@import '../styles/index.scss';
</style>
