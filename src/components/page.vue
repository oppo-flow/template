<style lang="scss">
.page {
  width: 100%;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
  font-size: 12px;
  background-size: 100% 100%;
}
.fade-in-right {
  animation: fadeInRight 0.55s cubic-bezier(0.455, 0.03, 0.515, 0.955);
}
@keyframes fadeInRight {
  0% {
    // transform: translate3d(400px, 0, 0);
    opacity: 0;
  }
  100% {
    // transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
</style>
<script>
export default {
  functional: true,
  components: {},
  render(createElement, context) {
    let data = context.data
    let staticClass = data.staticClass || ''
    staticClass = `${staticClass} page fade-in-right`
    Object.assign(data, { staticClass: staticClass })
    return createElement('div', data, context.children)
  },
  props: {
    hasBar: {
      type: Boolean,
      default: true
    },
    isPaddingBottom: {
      type: Boolean,
      default: true
    }
  }
}
</script>
