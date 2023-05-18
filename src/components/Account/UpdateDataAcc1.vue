<template>
    <div>
        <img src="@/assets/logo.png" alt="">
        <h1> Update Data </h1>
        <div style="margin: 5px 0px">
            <input style="height: 25px;" type="text" v-model="dataUpdate" placeholder="Please enter's data" />
            <p style="color: red;" v-if="isShowMessage">{{ warrning }}</p>
        </div>
        <div>
            <button @click="cancle">Cancle</button>
            <button @click="update()">Update</button>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            isShowMessage: false,
            warrning: '',
            dataUpdate: ''

        }
    },
    methods: {
        update() {
            let check = this.checkInput();
            if (check) {
                this.isShowMessage = false;
                let index = this.$route.query.index;
                let dataAcc1 = JSON.parse(localStorage.getItem('Account1'));
                if (index >= 0 && index < dataAcc1.length) {
                    console.log('index', index);
                    console.log('length', dataAcc1.length);
                    dataAcc1[index] = this.dataUpdate;
                    localStorage.setItem("Account1", JSON.stringify(dataAcc1));
                    this.isShowMessage = false;


                    alert('thay đổi dữ liệu thành công')
                    this.$router.push('/acc1'); // Chuyển về trang chủ sau khi cập nhật thành công
                }
            } else {
                this.warrning = 'Vui lòng nhập đầy đủ thông tin';
                this.isShowMessage = true;
            }
        }
        ,
        cancle() {
            this.$router.push('/acc1')

        },
        checkInput() {
            if (this.dataUpdate.trim() === '') {
                return false;
            } else {
                return true;
            }
        }

    },
    created(){
        let indos = this.$route.query.index;
        let data = JSON.parse(localStorage.getItem('Account1'));
        if(indos >= 0 && indos < data.length){
            this.dataUpdate = data[indos]
        }
      
    }


}
</script>

<style scoped>
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
input {
    width: auto;
    height: 35px;
    margin: 0px 10px;
    font-size: inherit;
}
button {
    margin: 0px 10px;
    color: whitesmoke;
    background: #FF6969;
    height: 35px;
    font-size: inherit;
    border-radius: 5px;
    border: wheat;
    padding: 0px 15px;
}
button:hover {
    background: #D21312;
}
</style>