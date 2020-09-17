<template>
  <div
    class="code-components"
  >
      <div
        :class="'code-components-content ' + insideTagClass"
      >
        <code-components-open-tag
          :tag="tag"
          :attr="attr"
        ></code-components-open-tag>
        <div
          v-if="insideTag !== null"
        >
          <div
            v-for="(item,idx) in insideTag"
            :key="idx"
            class="inside-tag"
          >
            <code-components-open-tag
              :tag="item.tag"
              :attr="item.attr"
            ></code-components-open-tag>
            <code-components-close-tag
              :tag="item.tag"
            ></code-components-close-tag>
          </div>
        </div>
        <code-components-close-tag
          :tag="tag"
        ></code-components-close-tag>
      </div>
      <code-components-code-body
        v-if="body"
        :body="body"
      ></code-components-code-body>
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
    body: { type: Array, default: null },
    insideTag: { type: Array, default: null }
  },
  mixins: [CodeComponents],
  data() {
    return {
    }
  },
  computed: {
    showBody() {
      return false
    },
    insideTagClass() {
      if (this.insideTag !== null) {
        return 'code-components-content--have-inside-tag'
      }
      return ''
    }
  }
}
</script>

<style lang="scss">
@import '../styles/index.scss';
</style>
