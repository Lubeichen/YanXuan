import Vue from 'vue'
import Router from 'vue-router'
// import List from '@/views/products/list'
// import Detail from '@/views/products/detail'
import Home from "@/components/products/Home"
import Sort from "@/components/products/Sort"
import ShopCar from "@/components/products/ShopCar"
import Mine from "@/components/products/Mine"
import Banner from '@/views/products/banner'
import Selected from '@/views/products/Selected'
import Recommend from '@/views/products/recommend'
import Sign from '@/views/Nice/Sign'
import Voucher from '@/views/Nice/Voucher'
import Cut from '@/views/Nice/Cut'
import Column from '@/views/Nice/Column'
import ColumnXQ from '@/views/Nice/ColumnXQ'
import SortTwo from "@/components/products/SortTwo"
// import Login from "@/views/products/Login"
import Login_item from "@/components/products/Login-item"
import BargainList from '@/views/products/BargainList'
import Register from '@/views/products/Register'
// import BargainListProduct from "@/components/products/bargain-list-product"
// import BargainListRead from "@/components/products/bargain-list-read"
import RecommendList from "@/components/products/recommend-list"
import Addres from "@/components/products/Addres"

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'List',
    //   component: List
    // },
    // {
    //   path: '/detail/:id?',
    //   name: 'Detail',
    //   component: Detail
    // },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path:'/',
      redirect:'/home'//默认路由重定向
    },
    {
      path: '/banner',
      name: 'Banner',
      component: Banner
    },
    {
      path: '/selected',
      name: 'Selected',
      component: Selected
    },
    {
      path: '/recommend',
      name: 'Recommend',
      component: Recommend
    },
    {
      path: '/sort',
      name: 'Sort',
      component: Sort
    }
    ,
    {
      path: '/shopcar',
      name: 'ShopCar',
      component: ShopCar
    }
    ,
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/sign',
      name: 'Sign',
      component: Sign
    },
    {
      path: '/voucher',
      name: 'Voucher',
      component: Voucher
    },
    {
      path: '/cut',
      name: 'Cut',
      component: Cut
    },
    {
      path: '/column',
      name: 'Column',
      component: Column
    },
    {
      path: '/columnXQ/:id?',
      name: 'ColumnXQ',
      component: ColumnXQ
    },
    {
      path: '/sorttwo',
      name: 'SortTwo',
      component: SortTwo
    },
    {
      path: '/login_item',
      name: 'Login_item',
      component: Login_item
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/bargainlist/:id?',
      name: 'BargainList',
      component: BargainList
    },
    {
      path: '/recommendlist/:id?',
      name: 'RecommendList',
      component: RecommendList
    },
    {
      path: '/addres',
      name: 'Addres',
      component: Addres
    }
  ]
})
