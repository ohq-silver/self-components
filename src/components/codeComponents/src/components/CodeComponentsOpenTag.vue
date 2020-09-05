<template>
  <div
    class="code-components-open-tag"
  >
    <span>&lt;</span><span>{{ tag }}&nbsp;</span>
    <span v-for="(item, idx) in attr" :key="idx">
      &nbsp;<span>{{item.name}}</span><span>=</span><span class="code-components-open-tag-attr">"{{item.attr}}"</span>
    </span>
    <span>&gt;</span>
  </div>
</template>

<script>
export default {
  props: {
    attr: { type: Array, default: () => ([]) },
    tag: { type: String, default: '' }
  }

}
</script>

<style>

</style>
