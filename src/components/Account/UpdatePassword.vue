<template>
    <div class="hello">
        <h1>Đổi Mật Khẩu</h1>
        <div class="mg-30">
            <label for="username"> Mật Khẩu Cũ</label>
            <input id="username" v-model="oldPassword" type="password">
        </div>
        <div class="mg-30">
            <label for="pass">Mật Khẩu Mới</label>
            <input v-model="newPassword" type="password">
        </div>
        <div class="mg-30">
            <label for="repass"> Nhập Lại Mật Khẩu</label>
            <input v-model="repassword" id="repass" type="password">
            <p style="color: red;" v-show="isShowMessage">{{ message }}</p>
        </div>
        <div>
            <button @click="handleCancelBtn">Hủy Bỏ</button>
            <button @click="handleSubmit">Đổi Mật Khẩu</button>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'HelloWorld',
    data() {
        return {
            oldPassword: '',
            repassword: '',
            newPassword: '',
            isShowMessage: false,
            message: ''
        }
    },
    methods: {
        handleSubmit() {
            let check = this.checkInput();
            const account = JSON.parse(localStorage.getItem('LIST_ACCOUNT'));
            const loggedInUsername = localStorage.getItem('LOGGED_IN_USERNAME');
            const loggedInAccount = account.find(acc => acc.userName === loggedInUsername);

            if (check) {
                if (loggedInAccount.password === this.oldPassword) {
                    if (this.newPassword === this.repassword) {
                        loggedInAccount.password = this.newPassword;
                        localStorage.setItem('LIST_ACCOUNT', JSON.stringify(account));
                        alert("Thay đổi mật khẩu thành công. Vui lòng đăng nhập lại để tiếp tục");
                        localStorage.setItem("LOGGED_IN_USERNAME", JSON.stringify([]));

                        this.$router.push('/');
                    } else {
                        this.message = 'Mật khẩu mới không khớp. Vui lòng nhập lại.';
                        this.isShowMessage = true;
                    }
                } else {
                    this.message = 'Mật khẩu cũ không chính xác.';
                    this.isShowMessage = true;
                }
            } else {
                this.message = 'Vui lòng nhập đầy đủ thông tin.';
                this.isShowMessage = true;
            }
        },
        handleCancelBtn() {


            const loggedInUsername = localStorage.getItem('LOGGED_IN_USERNAME');
            this.$router.push(`${loggedInUsername}`);

        },
        checkInput() {
            if (this.oldPassword.trim() === '' || this.newPassword.trim() === '' || this.repassword.trim() === '') {
                return false;
            } else {
                return true;
            }

        }
    },


}
</script>
  
<style  scoped>
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
  