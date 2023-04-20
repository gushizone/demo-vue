<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <component1></component1>
    <component2></component2>
    <p>
      <!-- 使用 router-link 组件来导航. 
        通过传入 `to` 属性指定链接, 
        <router-link> 默认会被渲染成一个 `<a>` 标签 -->
      <router-link to="/r1">Go to R1</router-link>
      <router-link to="/r2">Go to R2</router-link>
    </p>

    <!-- 路由出口, 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>

<script>
import component1 from './component/component1.vue'
import component2 from './component/component2.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: { component1, component2 }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
