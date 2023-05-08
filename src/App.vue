<template>
  <div id="app">
    <!-- <HelloWorld/> -->

    <!-- <TodoList></TodoList> -->
  <!-- <Login/> -->
  <!-- <signUpAccount></signUpAccount>  -->
  <router-view></router-view>

  
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
// import TodoList from '@/view/TodoList.vue';

// import Login from '@/components/Login.vue'
// import signUpAccount from './components/signUpAccount.vue';


export default {
  name: 'App',
  components: {
    // HelloWorld
    // TodoList
    // Login, 
    // signUpAccount
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
