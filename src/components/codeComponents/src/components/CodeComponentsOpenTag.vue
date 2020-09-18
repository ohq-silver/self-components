<template>
  <div
    class="code-components-open-tag"
  >
    <span>&lt;</span><span>{{ tag }}&nbsp;</span>
    <span v-for="(item, idx) in attr" :key="idx">
      &nbsp;<span>{{ item.name }}</span><span>=</span><span class="code-components-open-tag-attr">"{{ item.attr }}"</span>
    </span>
    <span>&gt;</span><span style="color: rgba(255,136,0,0.877)">{{ label }}</span>
  </div>
</template>

<script>
export default {
  props: {
    attr: { type: Array, default: () => ([]) },
    tag: { type: String, default: '' },
    label: { type: String, default: '' }
  }

}
</script>

<style>

</style>
