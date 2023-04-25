import Vue from 'vue'
//Dòng này để import vue-router
import Router from 'vue-router'
import Signup from '../components/signUpAccount.vue'
import Login from '../components/Login'

Vue.use(Router)


const router = new Router({
  routes: [ // bao gồm danh sách route
    {
      path: '/', ///path của route
      name: 'Login', // tên route
      component: Login // component route sử dụng
    },
    {
      path: '/signup', ///path của route
      name: 'Signup', // tên route
      component: Signup // component route sử dụng
    },
  ]
})
export default router;
