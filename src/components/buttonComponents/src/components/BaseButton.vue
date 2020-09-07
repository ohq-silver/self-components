<template>
  <button
    :class="'base-button ' + buttonType + ' ' + buttonBan"
    @click="click"
    :disabled="disabled"
  >
    <div
      class="base-button-content"
    >
      <icon
        class="button-icon pre"
        v-if="pre"
        :icon="pre.icon"
      ></icon>
      <div
        v-if="label"
        class="button-label"
      >
        {{ label }}
      </div>
      <icon
        class="button-icon suf"
        v-if="suf"
        :icon="suf.icon"
      ></icon>
    </div>
  </button>
</template>

<script>
import Icon from '../../../iconComponents/src/components/Icon'
export default {
  props: {
    buttonAttr: { type: Object, default: () => ({}) }
  },
  components: {
    Icon
  },
  data() {
    return {
    }
  },
  computed: {
    pre() {
      return this.buttonAttr ? (this.buttonAttr.pre || null) : null
    },
    suf() {
      return this.buttonAttr ? (this.buttonAttr.suf || null) : null
    },
    label() {
      return this.buttonAttr ? (this.buttonAttr.label || null) : null
    },
    buttonType() {
      return this.buttonAttr ? (this.buttonAttr.type || 'base-button-default') : null
    },
    disabled() {
      return this.buttonAttr ? (this.buttonAttr.disabled || false) : null
    },
    buttonBan() {
      if (this.disabled) {
        return 'base-button-ban'
      }
      return ''
    }
  },
  methods: {
    click({ button }) {
      this.$emit('click', { button, label: this.label })
    }
  }
}
</script>

<style  lang="scss">
</style>
