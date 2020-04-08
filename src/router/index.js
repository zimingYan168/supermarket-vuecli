import Vue from 'vue'
import Router from 'vue-router'
import qs from 'qs'

import Register from '@/views/register'
import Main from '@/views/main'
import LoginVue from '@/views/login/loginVue'
import RegistVue from '@/views/login/registVue'
import ItemList from '@/views/list/comlist'
import Item from '@/views/item/item'
import Order from '@/views/order/order'
import Address from '@/views/address/address'
import NotFount from '@/views/404'
import takeover from '@/views/address/takeover'
import myorder from '@/views/order/myorder'
import orderlist from '@/views/order/orderlist'

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

export default new Router({

routes: [
  {
    //注册页
    name: 'regist',
    path: '/regist',
    component: Register,
    children: [
      {name: 'registVue',path: '/user/regist',component: RegistVue},
      {name: 'loginVue',path: '/user/login',component: LoginVue}

    ]


  },{
    //主页
    name: 'main',
    path: '/main',
    component: Main,
    //商品Item
    children: [
      { name: 'itemList', path: '/main/itemList/:id', component:ItemList,props:true}
    ]
  },{

  //登录组件
    name: 'loginvue',
    path: '/loginvue' ,
    component: LoginVue
  },{
    //商品展示组件
    name: 'item',
    path: '/item',
    component: Item

  },{
    //订单购物车组件展示
    name: 'order',
    path: '/order',
    component: Order

  },{
  //收货地址组件
    name: 'address',
    path: '/address',
    component: Address

  },{
  //404

    path: '*',
    component: NotFount
  },{
  //管理收货地址
    name: 'takeover',
    path: '/takeover',
    component: takeover

  },{

    //查看一个订单
    name: 'myorder',
    path: '/myorder',
    component:myorder

  },{
    //显示所有订单列表
    name: 'orderlist',
    path: '/orderlist',
    component: orderlist

  }



]





})
