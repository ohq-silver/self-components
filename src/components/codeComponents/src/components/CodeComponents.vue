<template>
  <div
    v-if="showCode"
    class="code-components"
  >
      <div
        class="code-components-content"
      >
        <code-components-open-tag
          :tag="tag"
          :attr="attr"
        ></code-components-open-tag>
        <code-components-close-tag
          :tag="tag"
        ></code-components-close-tag>
      </div>
  </div>
</template>

<script>
import CodeComponents from '../mixins/CodeComponents'
import CodeComponentsOpenTag from './CodeComponentsOpenTag'
import CodeComponentsCloseTag from './CodeComponentsCloseTag'

export default {
  components: {
    CodeComponentsOpenTag,
    CodeComponentsCloseTag
  },
  props: {
    attr: { type: Array, default: () => ([]) },
    tag: { type: String, default: '' }
  },
  mixins: [CodeComponents],
  data() {
    return {
      showCode: true
    }
  }
}
</script>

<style lang="scss">
@import '../styles/index.scss';
</style>
