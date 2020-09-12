<template>
  <div
    class="nav-menu-components-titles"
  >
    <div
      class="nav-menu-components-title"
      v-for="(item, idx) in titles"
      :key="idx"
      @click="clickTitle(item)"
    >
      <h6
        v-if="item.describe"
      >
        {{ item.describe }}
      </h6>
      <div
        v-if="item.id"
        :class='item.id===selected ? "nav-menu-components-title-active" : "nav-menu-components-title-default"'
      >
        {{ item.title }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titles: { type: Array, default: () => ([]) },
    describe: { type: String, default: '' }
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
