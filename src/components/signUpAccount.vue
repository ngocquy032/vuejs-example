<template>
  <div class="hello">
    <div class="hello">
      <h1>
        Register</h1>
        <div class="mg-30">
          <label for="username"> Tên Tài Khoản</label>
          <input v-model="accountInfo.userName" type="text">

        </div>
        <div class="mg-30">
          <label for="pass">Mật Khẩu</label>
          <input v-model="accountInfo.password" type="password">
        </div>
        <div class="mg-30">
          <label for="pass"> Nhập Lại Mật Khẩu</label>
          <input v-model="repassword" type="password">
          <p style="color: red;" v-if="isShowMessage">{{ message }}</p>
        </div>
        <div>
          <button @click="handleCancelBtn">Hủy Bỏ</button>
          <button @click="submit">Đăng Ký</button>

        </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      accountInfo: {
        userName: '',
        password: '',
        
      },
      listAccount: [],
      repassword: '',
      message: '',
      isShowMessage: false,
   
    }
  },
  methods: {
    submit() {
      
      if(this.accountInfo.password === this.repassword){
        this.isShowMessage = false;
        this.message = '';
        let listData = JSON.parse(localStorage.getItem('LIST_ACCOUNT'));
        listData.push(this.accountInfo);

        localStorage.setItem("LIST_ACCOUNT", JSON.stringify(listData));
        this.accountInfo = {
          userName: '',
          password: ''
        };
        this.repassword= '';
          
        
        

      }else{
        this.message = 'mật khẩu không khớp'
        this.isShowMessage = true;

      }
      
    },
    handleCancelBtn () {
      this.$router.push('/')
    }
  }

}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  
  .mg-30 {
      margin: 30px 0px;
  }
  
  label {
      padding: 10px;
  }
  
  input {
      border-radius: 2px;
  }
  
  a {
      padding-right: 60px;
      text-decoration: none;
  }
  
  button {
      font-size: 16px;
      border-radius: 5px;
      margin: 0px 30px;
  }
  </style>
  