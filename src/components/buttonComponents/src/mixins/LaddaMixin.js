import * as Ladda from 'ladda'

export default {
  data() {
    return {
      laddaInstance: null
    }
  },
  props: {
    ladda: { type: Object, default: null }
    // onClick: { type: Function, default: null }
  },
  computed: {
    laddaStyle() {
      return this.ladda ? (this.ladda.style || 'zoom-in') : null
    },
    laddaSpinnerColor() {
      return this.ladda ? (this.ladda.spinnerColor || '#000') : null
    }
  },
  mounted() {
    if (this.ladda) {
      this.laddaInstance = Ladda.create(this.$refs['ladda-button'])
    }
  },
  methods: {
    start() {
      return this.laddaInstance ? this.laddaInstance.start() : null
    },
    stop() {
      return this.laddaInstance ? this.laddaInstance.stop() : null
    }
  }
}
