<template>
  <div class="hello">
    <div class="hello">
      <h1>
      Đăng Ký</h1>
      <div class="mg-30">
        <label for="username"> Tên Tài Khoản</label>
        <input v-model="accountInfo.userName" type="text">

      </div>
      <div class="mg-30">
        <label for="pass">Mật Khẩu</label>
        <input v-model="accountInfo.password" type="password" style="margin-left: 35px;">
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

    /**
     * Step 1: Lấy dữ liệu trên localstorage về và lưu vào 1 biến để dùng
     * Step 2: Check các input đã nhập đủ chưa
     * Step 3: Sau khi các input đã nhập đủ, check tài khoản đã tồn tại hay chưa
     * Step 4: Sau khi đã check xong tài khoản không tồn tại, thực hiện check xem đã xác nhận đúng mật khẩu chưa
     * Step 5: Nếu tất cả các điều kiện đã đúng thì thực hiện push Object (usename, password) vào list data
     * Step 6: set data lên localstorage
     * 
    */
    submit() {
      let listData = JSON.parse(localStorage.getItem('LIST_ACCOUNT'));
      let isCheck = this.checkEmptyInput();
      // isCheck == true: đã nhập đủ các input
      // isCheck == false: chưa nhập đủ các input
      if (isCheck) {
        // Case đã nhập đủ input

        let listFilter = listData.filter(item => item.userName === this.accountInfo.userName);

        // Nếu listFilter có phần tử > 0 => tài khoản vừa nhập đã tồn tại
        // Nếu listFilter là mảng rỗng => tài khoản chưa tồn tại

        if (listFilter.length > 0) {

          // Case tài khoản vừa nhập đã tồn tại
          // alert('Tài khoản đã tồn tại, vui lòng nhập tài khoản khác');
          this.message = 'Tài khoản đã tồn tại, vui lòng nhập tài khoản khác'
          this.isShowMessage = true;
        } else {
          // Case: tài khoản chưa tồn tại
          // Check mật khẩu đã đúng chưa
          if (this.accountInfo.password === this.repassword) {
            // Case: đúng
            this.isShowMessage = false;
            this.message = '';
            listData.push(this.accountInfo);

            // localStorage.setItem("LIST_ACCOUNT", JSON.stringify(listData));
            localStorage.setItem("LIST_ACCOUNT", JSON.stringify(listData));
            this.resetData()
            alert('Đăng kí tài khoản thành công');
            this.$router.push('/')
          } else {
            // Case: sai
            this.message = 'mật khẩu không khớp'
            this.isShowMessage = true;
          }
        }

      } else {
        // Case chưa nhập đủ input
        // alert('Vui lòng nhập đầy đủ các thông tin');
        this.message = 'Vui lòng nhập đầy đủ các thông tin'
        this.isShowMessage = true;
      }

    },
    resetData() {
      this.accountInfo = {
        userName: '',
        password: ''
      };
      this.repassword = '';
    },
    checkEmptyInput() {
      if (this.accountInfo.password.trim() === '' || this.accountInfo.userName === '' || this.repassword === '') {
        return false;
      } else {
        return true;
      }
    },
    handleCancelBtn() {
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
  border: white;
  font-size: 18px;
  background: #1877f2;
  color: aliceblue;
  padding: 5px 5px;
  border-radius: 5px;
  margin: 0px 30px;
}
button:hover {
    background: #2F58CD;
    color: antiquewhite;
}
</style>
  