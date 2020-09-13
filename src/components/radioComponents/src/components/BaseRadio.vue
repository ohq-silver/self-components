<template>
  <label
    :class="'base-radio ' + disabledClass + ' ' + borderClass + ' ' + checkedClass"
    @click="click"
  >
    <input
      :class="'base-radio-input ' + hideInputClass + ' ' +  disabledClass"
      type="radio"
      :value="value"
      :name="name"
      :checked="isChecked"
      :disabled="isDisabled"
      @change="change"
    />
    <div
      :class="'base-radio-label ' + checkedClass + ' ' + disabledClass + ' ' + isHideInputLabelClass"
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
    border: { type: Boolean, default: false },
    hideInput: { type: Boolean, default: false },
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
    borderClass() {
      if (this.border) {
        return 'base-radio-border'
      }
      return ''
    },
    disabledClass() {
      if (this.disabled) {
        return 'base-radio-disabled'
      }
      return ''
    },
    hideInputClass() {
      if (this.hideInput) {
        return 'base-radio-input--hide'
      }
      return ''
    },
    isHideInputLabelClass() {
      if (this.hideInput) {
        return 'base-radio-label--hide'
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
