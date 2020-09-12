<template>
  <label
    class="base-radio"
    @click="click"
  >
    <input
      class="base-radio-input"
      type="radio"
      :value="value"
      :name="name"
      :checked="isChecked"
      :disabled="isDisabled"
      @change="change"
    />
    <div
      :class="checkedClass + ' ' + disabledClass"
    >
      {{ label }}
    </div>
  </label>
</template>

<script>
export default {
  props: {
    value: { type: String, default: '' },
    label: { type: String, default: '' },
    name: { type: String, default: '' },
    disabled: { type: Boolean, default: false },
    checked: { type: Boolean, default: false }
  },
  computed: {
    isChecked() {
      if (this.checked) {
        return true
      }
      return false
    },
    isDisabled() {
      if (this.disabled) {
        return true
      }
      return false
    },
    checkedClass() {
      if (this.checked) {
        return 'base-radio-checked'
      }
      return ''
    },
    disabledClass() {
      if (this.disabled) {
        return 'base-radio-disabled'
      }
      return ''
    }
  },
  methods: {
    click() {
      if (!this.disabled) {
        this.$emit('click', { value: this.value, checked: this.checked })
      }
    },
    change() {
      if (!this.disabled) {
        this.$emit('change')
      }
    }
  }
}
</script>

<style lang="scss">
@import '../styles/index.scss';
</style>
