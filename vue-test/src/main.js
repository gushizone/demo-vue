import Vue from 'vue'
import App from './App.vue'

// 0. 如果使用模块化机制编程，导入 Vue 和 VueRouter，要调用 Vue.use(VueRouter)
// vue@2 对应 vue-router@3
// $ npm uninstall vue-router
// $ npm i vue-router@3
import VueRouter from "vue-router";
import VueResource from 'vue-resource'

// ElementUI 
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Element)

//开启debug模式
Vue.config.debug = true;
 
Vue.use(VueRouter);
Vue.use(VueResource);

// 1. 定义（路由）组件。
// 可以从其他文件 import 进来
const R1 = { template: '<div>r1</div>' }
const R2 = { template: '<div>r2</div>' }

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
  { path: '/r1', component: R1 },
  { path: '/r2', component: R2 }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
  router, // router: router,
  el: '#app',
  render: h => h(App)
}).$mount('#app')
