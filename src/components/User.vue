<template>
    <div class="hello">
        <h1>
            Register</h1>
        <form action="register">
            <div class="mg-30">
                <label for="username"> Tên Tài Khoản</label>
                <input type="text">
            </div>
            <div class="mg-30">
                <label for="pass">Mật Khẩu</label>
                <input type="password">
            </div>
            <div class="mg-30">
                <label for="pass"> Nhập Lại Mật Khẩu</label>
                <input type="password">
            </div>
            <div>
                <button>Hủy Bỏ</button>
                <button @click="submit" >Đăng Ký</button>

            </div>

        </form>


    </div>
</template>
  
<script>
export default {
    name: 'UserInfo',
    props: {
        msg: String

    },
    data() {
        return {
        }
    }, 
    methods: {
        submit(){
            console.log('ssss');

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
  