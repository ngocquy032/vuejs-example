<template>
    <div class="hello">
        <h1>Đăng Nhập</h1>
        <form action="login" @submit.prevent="submit">
            <div class="mg-30">
                <label for="username">Tài Khoản</label>
                <input type="text" v-model="userName">
            </div>
            <div class="mg-30">
                <label for="pass">Mật Khẩu</label>
                <input type="password" v-model="password">
                <p style="color: red;" v-if="isMessage">{{ warning }}</p>

            </div>
            <div>

                <router-link to="/signup">
                    Tạo Tài Khoản
                </router-link>
                <button>Đăng Nhập</button>
            </div>

        </form>
    </div>
</template>
  
<script>
// import router from '@/router';
export default {
    name: 'HelloWorld',
    props: {
        msg: String

    },
    data() {
        return {
            listAccount: [],
            userName: '',
            password: '',
            warning: '',
            isMessage: false
        }
    },
    methods: {
        submit() {
            let check = this.checkInput();
            if (check) {

                let data = JSON.parse(localStorage.getItem('LIST_ACCOUNT'));
                // localStorage.setItem("LIST_ACCOUNT", JSON.stringify(data));
                console.log(data.userName);
                const accounts = data.find((acc) => acc.userName === this.userName && acc.password === this.password);
                if (accounts) {
                    alert('đăng nhập thành công' + accounts.userName);
                    this.$router.push(this.userName);

                } else {
                    this.warning = 'Tên đăng nhập hoặc mật khẩu không đúng';
                    this.isMessage = true;
                }

            } else {
                this.warning = 'Vui lòng nhập đầy đủ các thông tin';
                this.isMessage = true;

            }
        },
        checkInput() {
            if (this.userName.trim() === '' || this.password.trim() === '') {
                return false;
            } else {
                return true;
            }
        },
        resertData() {
            this.userName = '',
                this.password = ''
        }
    },
    mounted() {
        // localStorage.setItem("LIST_ACCOUNT", JSON.stringify([]));
        this.listAccount = JSON.parse(localStorage.getItem('LIST_ACCOUNT'));
        console.log(this.listAccount);
    },



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

a:hover {
    color: #FC2947;

}

button {
    font-size: 18px;
    border: white;
    border-radius: 5px;
    background: #1877f2;
    color: aliceblue;
    padding: 5px 5px;
}

button:hover {
    background: #2F58CD;
    color: antiquewhite;
}
</style>
  