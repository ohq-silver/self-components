<template>
  <div
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
        <code-components-code-body
          v-if="body"
          :body="body"
        ></code-components-code-body>
      </div>
  </div>
</template>

<script>
import CodeComponents from '../mixins/CodeComponents'
import CodeComponentsOpenTag from './CodeComponentsOpenTag'
import CodeComponentsCloseTag from './CodeComponentsCloseTag'
import CodeComponentsCodeBody from './CodeComponentsCodeBody'

export default {
  components: {
    CodeComponentsOpenTag,
    CodeComponentsCloseTag,
    CodeComponentsCodeBody
  },
  props: {
    attr: { type: Array, default: () => ([]) },
    tag: { type: String, default: '' },
    body: { type: Array, default: null }
  },
  mixins: [CodeComponents],
  data() {
    return {
    }
  },
  computed: {
    showBody() {
      console.log(this.body)
      return false
    }
  }
}
</script>

<style lang="scss">
@import '../styles/index.scss';
</style>
