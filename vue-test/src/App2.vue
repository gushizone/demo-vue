<template>
  <div id="app-2">
    <span v-bind:title="msg">
      鼠标悬停几秒钟查看此处动态绑定的提示信息！
    </span>
  </div>
</template>

<script>
export default {
  el: '#app-2',
  data () {
    return {
      msg: '页面加载于 ' + new Date().toLocaleString()
    }
  }
}
</script>
