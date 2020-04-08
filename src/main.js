// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import router from './router'
import Vuex from 'vuex'
// 导入 ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import store from './store'

import axios from 'axios'

Vue.prototype.axios = axios;

// 安装路由
Vue.use(VueRouter);

// 安装 ElementUI
Vue.use(ElementUI);

Vue.use(Vuex);

Vue.config.productionTip = false

//【该钩子 在所有的路由跳转前执行】
router.beforeEach((to,form,next )=>{
  let isLogin=sessionStorage.getItem('isLogin');
  // // 注销
  // if (to.path == '/logout') {
  //   // 清空
  //   sessionStorage.clear();
  //   // 跳转到登录
  //   next({path: '/main'});
  //   return //这里我不知道要不要加上
  // }

  // // 如果请求的是登录页
  // else if (to.path == '/user/login') {
  //   if (isLogin != null) {
  //     // 跳转到首页
  //     next({path: '/main'});
  //
  //
  //   }
  // }

  if(to.path=="/logout"){


    next({path:"/main/itemList"})}


  else if(to.path=="/takeover"){
    //若访问管理收货地址 未登录则跳转到登录页面
    if(isLogin == null){
      next({path:"/user/login"})
    }
      next();

  } else if(to.path=="/order"){
    //若访问购物车 未登录则跳转到登录页面
    if(isLogin == null){
      next({path:"/user/login"})
    }
    next();

  }else if(to.path=="/orderlist"){
    //若访问订单列表 未登录则跳转到登录页面
    if(isLogin == null){
      next({path:"/user/login"})
    }
    next();

  }else if(to.path=="/address"){
    //若访问订单提交 未登录则跳转到登录页面
    if(isLogin == null){
      next({path:"/user/login"})
    }
    next();

  }




  else if(to.path == '/user/login'){
    if(isLogin=="true"){

      next({path:"/main/itemList/remen"})

    }else{

      next()
  }

  }



    next();

});



/* eslint-disable no-new */
new Vue({
  el: '#app',
  //启用路由
  router,
  store,
  // 启用 ElementUI
  render: h => h(App)
})
