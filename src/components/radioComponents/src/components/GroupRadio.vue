<template>
  <div
    class="group-radio"
  >
    <base-radio
      v-for="(item, idx) in radios"
      :key="idx"
      :value="item.value"
      :label="item.label"
      :name="name"
      :checked="item.checked"
      :disabled="item.disabled ? item.disabled: disabled"
      :hideInput="hideInput"
      @click="clickRadio"
      @change="changeInputStatus(idx)"
    ></base-radio>
  </div>
</template>

<script>
import BaseRadio from './BaseRadio'
export default {
  components: {
    BaseRadio
  },
  props: {
    hideInput: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    name: { type: String, default: '' },
    radios: { type: Array, default: () => ([]) }
  },
  methods: {
    changeInputStatus(index) {
      this.$emit('changeGroupInputStatus', index)
    },
    clickRadio({ value, checked }) {
      this.$emit('clickGroupRadio', { value, checked })
    }
  }
}
</script>

<style lang="scss">
@import '../styles/index.scss';
</style>
