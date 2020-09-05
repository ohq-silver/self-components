<template>
  <div
    class="nav-menu-components-titles"
  >
    <div
      class="nav-menu-components-title"
      v-for="(item, idx) in titles"
      :key="idx"
      :class='item.id===selected ? "nav-menu-components-title-active" : "nav-menu-components-title-default"'
      @click="clickTitle(item)"
    >
      {{ item.title }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titles: { type: Array, default: () => ([]) }
  },
  data() {
    return {
      selected: -1
    }
  },
  computed: {
  },
  methods: {
    clickTitle(item) {
      this.$emit('clickTitle', item)
      this.selected = item.id;
    }
  }
}
</script>

<style>

</style>
