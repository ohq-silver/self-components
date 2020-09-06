<template>
  <div
    class="code-components-code-body"
  >
    <component 
      :is="componentFactory"
      :body="body"
    ></component>
  </div>
</template>

<script>
import CodeComponentsCodeBodyContent from './CodeComponentsCodeBodyContent'
export default {
  components: {
    CodeComponentsCodeBodyContent
  },
  props: {
    body: { type: Array, default: null }
  },
  data() {
    return {
      showContent: 'BodyContent'
    }
  },
  computed: {
    componentFactory() {
      switch (this.currentComponent) {
        case 'BodyContent':
          return CodeComponentsCodeBodyContent
        default:
          return null
      }
    },
    currentComponent() {
      return this.showContent
    }
  },
  methods: {

  }
}
</script>

<style>

</style>
