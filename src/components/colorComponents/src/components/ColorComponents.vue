<template>
  <div class="color-components"
  >
    <h2>Color 色彩</h2>
    <div>为了避免视觉传达差异，使用一套特定的调色板来规定颜色，为你所搭建的产品提供一致的外观视觉感受</div>
    <h3>主色</h3>
    <div>主要品牌颜色是友好的暗蓝色。</div>
    <div class="main-color-box">
      <div class="inside">
        <div class="title">Main Color</div>
        <div class="describe">#069</div>
      </div>
    </div>
    <h3>辅助色</h3>
    <div>除了主色外的场景色，需要在不同的场景中使用（例如危险色表示危险的操作）</div>
    <div
      class="auxiliary-color-box"
    >
      <div class="success-color-box">
        <div class="inside">
          <div class="title">Success</div>
          <div class="describe">#00993b</div>
        </div>
      </div>
      <div class="info-color-box">
        <div class="inside">
          <div class="title">Info</div>
          <div class="describe">#999</div>
        </div>
      </div>
      <div class="warning-color-box">
        <div class="inside">
          <div class="title">Warning</div>
          <div class="describe">rgba(255,136,0,0.877)</div>
        </div>
      </div>
      <div class="danger-color-box">
        <div class="inside">
          <div class="title">Danger</div>
          <div class="describe">#c33</div>
        </div>
      </div>
    </div>
    <h3>中性色</h3>
    <div>中性色用于文本、背景和边框颜色。通过运用不同的中性色，来表现层次结构。</div>
    <div class="neutral-color-box">
      <div class="main-text-box">
        <div class="inside">
          <div class="title">主要文字</div>
          <div class="describe">#303133</div>
        </div>
      </div>
      <div class="normal-text-box">
        <div class="inside">
          <div class="title">常规文字</div>
          <div class="describe">#606266</div>
        </div>
      </div>
      <div class="secondary-text-box">
        <div class="inside">
          <div class="title">次要文字</div>
          <div class="describe">#909399</div>
        </div>
      </div>
      <div class="seize-seat-text-box">
        <div class="inside">
          <div class="title">占位文字</div>
          <div class="describe">#C0C4CC</div>
        </div>
      </div>
      <div class="first-text-box">
        <div class="inside">
          <div class="title">一级边框</div>
          <div class="describe">#DCDFE6</div>
        </div>
      </div>
      <div class="second-text-box">
        <div class="inside">
          <div class="title">二级边框</div>
          <div class="describe">#E4E7ED</div>
        </div>
      </div>
      <div class="third-text-box">
        <div class="inside">
          <div class="title">三级边框</div>
          <div class="describe">#EBEEF5</div>
        </div>
      </div>
      <div class="fourth-text-box">
        <div class="inside">
          <div class="title">四级边框</div>
          <div class="describe">#F2F6FC</div>
        </div>
      </div>
      <div class="base-black-box">
        <div class="inside">
          <div class="title">基础黑色</div>
          <div class="describe">#000</div>
        </div>
      </div>
      <div class="base-white-box">
        <div class="inside">
          <div class="title">基础白色</div>
          <div class="describe">#FFF</div>
        </div>
      </div>
      <div class="transparent-box">
        <div class="inside">
          <div class="title">透明</div>
          <div class="describe">transparent</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ColorComponents from '../mixins/ColorComponents'

export default {
  mixins: [ColorComponents]
}
</script>

<style lang="scss">
@import '../styles/index.scss';
</style>
