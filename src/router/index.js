import Vue from 'vue' 
//Dòng này để import vue-router
import Router from 'vue-router'
import Login from '../components/Login.vue'
import Signup from '../components/signUpAccount.vue'
import Acc1 from '../components/Account/Acc1.vue'
import Acc2 from '../components/Account/Acc2.vue'
import UpdateAcc1 from '../components/Account/UpdateAcc1.vue'
import UpdatePassword from '../components/Account/UpdatePassword.vue'
import UpdateDataAcc1 from '../components/Account/UpdateDataAcc1.vue'
import UpdateDataAcc2 from '../components/Account/UpdateDataAcc2.vue'




Vue.use(Router)

const router = new Router({
  routes: [ // bao gồm danh sách route
    {
      path: '/', ///path của route
      name: 'Login', // tên route
      component: Login // component route sử dụng
    },
    {
      path: '/signup', 
      name: 'Signup', 
      component: Signup 
    },
    {
      path: '/acc1',
      name: 'Acc1',
      component: Acc1
    },
    {
      path: '/acc2',
      name: 'Acc2',
      component: Acc2
    },
    
    {
      path: '/updateAcc1',
      name: 'UpdateAcc1',
      component: UpdateAcc1
    },
    {
      path: '/updatePassword',
      name: 'UpdatePassword',
      component: UpdatePassword
    },
    {
      path: '/updateDataAcc1',
      name: "UpdateDataAcc1",
      component: UpdateDataAcc1
    },
    {
      path: '/updateDataAcc2',
      name: "UpdateDataAcc2",
      component : UpdateDataAcc2
    }
  
 
  ]
});

export default router;
