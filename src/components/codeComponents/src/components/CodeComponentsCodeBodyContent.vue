<template>
  <div
    class="code-components-code-body-content"
  >
    <div 
      v-for="(item, idx) in body" 
      :key="idx"
    >
      <div
        v-if="item.codeContentDescribe"
        class="code-components-code-body-content-describe"
      >
        {{ item.codeContentDescribe }}
      </div>
      <div
        v-for="(codeContentItem, idx) in item.codeContent"
        :key="idx"
      >
        <div
          class="code-components-code-body-content-begin-title"
        >
          {{ codeContentItem.codeContentBeginTitle }}
        </div>
        <div
          v-for="(codeContentInsideItem, idx) in codeContentItem.codeContentInside"
          :key="idx"
          class="code-components-code-body-content-inside"
        >
          <div
            v-if="codeContentInsideItem.codeContentStructBegin"
            class="code-components-code-body-content-inside-struct-begin"
          >
            {{ codeContentInsideItem.codeContentStructBegin }}
          </div>
          <span
            :class="codeContentInsideItem.codeContentStructBegin ? 'code-components-code-body-content-inside-name': 'code-components-code-body-content-inside-name--no-struct'"
          >
            {{codeContentInsideItem.codeContentInsideName}}
          </span>
          <span
            class="code-components-code-body-content-inside-attr"
          >
            '{{codeContentInsideItem.codeContentInsideAttr}}'，
          </span>
          <div
            v-if="codeContentInsideItem.codeContentStructEnd"
            class="code-components-code-body-content-inside-struct-begin"
          >
            {{ codeContentInsideItem.codeContentStructEnd }}
          </div>
        </div>
        <div
          class="code-components-code-body-content-end-title"
        >
          {{ codeContentItem.codeContentEndTitle }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    body: { type: Array, default: null }
  },
  computed: {

  }
}
</script>

<style>

</style>
