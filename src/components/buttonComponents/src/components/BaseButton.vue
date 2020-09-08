<template>
  <button
    ref="ladda-button"
    :class="'base-button ' + buttonType + ' ' + buttonBan + ' ' + buttonLadda"
    :data-style="laddaStyle"
    :data-spinner-color="laddaSpinnerColor"
    :disabled="disabled"
    @click="click"
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
import LaddaMixin from '../mixins/LaddaMixin.js'
export default {
  mixins: [LaddaMixin],
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
    },
    buttonLadda() {
      if (this.ladda !== null) {
        return 'ladda-button'
      }
      return ''
    }
  },
  methods: {
    click(e) {
      e.preventDefault()
      this.$emit('click', { button: this })
    }
  }
}
</script>

<style  lang="scss">
</style>
