<template>
  <div id="app-5">
    <p>{{ message }}</p>
    <button v-on:click="reverseMessage">反转消息</button>
  </div>
</template>

<script>
export default {
  el: '#app-5',
  data () {
    return {
      message: 'Hello Vue.js!'
    }
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
}
</script>
