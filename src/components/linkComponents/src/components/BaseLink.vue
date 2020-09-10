<template>
  <div
    class="base-link"
  >
    <a
      :class="'base-link-content base-link-' + type + ' ' + status + ' ' + showUnderLine"
      :href="href"
      :disabled="disabled"
      :type="type"
      :target="target"
      :underLine="underLine"
      @click="click($event)"
    >
      <icon
        class="base-link-icon pre"
        v-if="preIcon"
        :icon="preIcon"
      ></icon>
        <div
          class="base-link-label"
        >
          {{ label }}
        </div>
      <icon
        class="base-link-icon suf"
        v-if="sufIcon"
        :icon="sufIcon"
      ></icon>
    </a>
  </div>
</template>

<script>
import Icon from '../../../iconComponents/src/components/Icon'
export default {
  components: {
    Icon
  },
  props: {
    disabled: { type: Boolean, default: false },
    href: { type: String, default: '' },
    label: { type: String, default: '' },
    underLine: { type: Boolean, default: true },
    preIcon: { type: String, default: '' },
    sufIcon: { type: String, default: '' },
    type: { type: String, default: 'default' },
    target: { type: String, default: '' }
  },
  computed: {
    status() {
      if (this.disabled) {
        return 'base-link-disabled'
      }
      return ''
    },
    showUnderLine() {
      if (!this.underLine) {
        return 'base-link-hide-under-line'
      }
      return ''
    }
  },
  methods: {
    click(e) {
      if (this.disabled || this.href === '') {
        e.preventDefault();
      }
    }
  }
}
</script>

<style lang="scss">
@import '../styles/index.scss';
</style>
