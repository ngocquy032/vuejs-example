import Vue from 'vue'
//Dòng này để import vue-router
import Router from 'vue-router'
import Login from '../components/Account/Login.vue'
import Signup from '../components/Account/signUpAccount.vue'
import Acc1 from '../components/Account/Acc1.vue'
import Acc2 from '../components/Account/Acc2.vue'
import UpdatePassword from '../components/Account/UpdatePassword.vue'
import UpdateDataAcc1 from '../components/Account/UpdateDataAcc1.vue'
import UpdateDataAcc2 from '../components/Account/UpdateDataAcc2.vue'
Vue.use(Router)

const router = new Router({
  routes: [ // bao gồm danh sách route
    {
      path: '/', ///path của route
      name: 'Login', // tên route
      component: Login,// component route sử dụng
      meta: { guestOnly: true }
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup,
      meta: { guestOnly: true }
    },
    {
      path: '/acc1',
      name: 'Acc1',
      component: Acc1,
      meta: { requiresAuth: true }
    },
    {
      path: '/acc2',
      name: 'Acc2',
      component: Acc2,
      meta: { requiresAuth: true }
    },
    {
      path: '/updatePassword',
      name: 'UpdatePassword',
      component: UpdatePassword,
      meta: { requiresAuth: true }
    },
    {
      path: '/updateDataAcc1',
      name: "UpdateDataAcc1",
      component: UpdateDataAcc1,
      meta: { requiresAuth: true }
    },
    {
      path: '/updateDataAcc2',
      name: "UpdateDataAcc2",
      component: UpdateDataAcc2,
      meta: { requiresAuth: true }
    }
  ]
});
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('LIST_ACCOUNT');
  const currentUser = localStorage.getItem('LOGGED_IN_USERNAME');

  if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
    // Yêu cầu đăng nhập và chưa đăng nhập, chuyển hướng đến trang đăng nhập
    next('/');
  } else if (to.matched.some(record => record.meta.requiresAuth) && isAuthenticated && to.name !== currentUser) {
    // Yêu cầu đăng nhập và đã đăng nhập, nhưng tài khoản không khớp, chuyển hướng về trang đăng nhập
    next('/');
  } else if (to.matched.some(record => record.meta.requiresAuth) && isAuthenticated && to.name === currentUser) {
    // Yêu cầu đăng nhập và đã đăng nhập, và tài khoản khớp, chuyển hướng đến path của tài khoản đó
    next(to.path);
  } else {
    next();
  }
});



export default router;
