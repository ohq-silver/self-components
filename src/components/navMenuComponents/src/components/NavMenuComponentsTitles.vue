<template>
  <div
    class="nav-menu-components-titles"
  >
    <div
      class="nav-menu-components-title"
      v-for="(item, idx) in titles"
      :key="idx"
    >
      <div
        @click="clickTitle(item)"
      >
        {{ item.title }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titles: { type: Array, default: () => ([]) }
  },
  computed: {
  },
  methods: {
    clickTitle(item) {
      this.$emit('clickTitle', item.title)
    }
  }
}
</script>

<style>

</style>
