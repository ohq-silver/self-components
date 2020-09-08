<template>
  <div
    class="group-button"
  >
    <base-button
      v-for="(item, idx) in buttons"
      :key="idx"
      :buttonAttr="item.buttonAttr"
      :class='item.id===selected ? "group-button-active" : ""'
      @click="click(item)"
    ></base-button>
  </div>
</template>

<script>
import BaseButton from './BaseButton'
export default {
  components: {
    BaseButton
  },
  props: {
    buttons: { type: Array, default: () => ([]) }
  },
  data() {
    return {
      selected: -1
    }
  },
  methods: {
    click(obj) {
      this.$emit('click', { button: this, buttonAttr: obj.buttonAttr })
      this.selected = obj.id
    }
  }
}
</script>

<style>

</style>
