<template>
    <div class="hello">
        <h1>Log In</h1>
        <form action="login">
            <div class="mg-30">
                <label for="username">Tài Khoản</label>
                <input type="text">
            </div>
            <div class="mg-30">
                <label for="pass">Mật Khẩu</label>
                <input type="password">
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
import router from '@/router';
export default {
    name: 'HelloWorld',
    props: {
        msg: String

    },
    data() {
        return {
            listAccount: [],
        }
    },
    methods: {
        handleSignup() {
            router.push('/')
        }
    },
    mounted() {
        localStorage.setItem("LIST_ACCOUNT", JSON.stringify([]));
        this.listAccount = JSON.parse(localStorage.getItem('LIST_ACCOUNT'));
        console.log(this.listAccount);
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
}

/* h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
} */</style>
  