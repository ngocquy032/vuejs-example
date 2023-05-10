<template>
    <div>
        <img src="@/assets/logo.png" alt="">
        <h1> Form Submit </h1>
        <div>

            <div v-if="isLogOut">
                <p>Vui Lòng xác Thực Đăng Xuất!!!</p>
                <button @click="No" style="margin: 5px 15px;">No</button>
                <button @click="Yes" style="margin: 5px 15px;">Yes</button>
            </div>
        </div>
        <div v-if="isAdd">
            <button @click="logOut">Log Out</button>
            <input style="height: 25px;" type="text" v-model="messeage" placeholder="Please enter's data" />
            
            <button @click="submit">Submit</button>
            <p style="color: red;" v-if="isShowMessage">{{ warrning }}</p>

            <h3>Submit data</h3>
            <ul v-for="(indo, index) in indos" :key="index">
                <li>{{ indo }}</li>
                <button @click="remove(index, indo)">Remove</button>
                <br />
            </ul>
        </div>
    </div>
</template>

<script >
export default {
    name: 'HelloWorld',
    props: {
        msg: String

    },
    data() {
        return {
            isLogOut: false,
            isAdd: true,
            messeage: '',
            indos: [],
            warrning: '',
            isShowMessage: false
        }
    },
    methods: {
        submit() {
            let check = this.checkInput();
            if(check){
                let dataAcc1 = JSON.parse(localStorage.getItem('Account1'))
            this.indos.push(this.messeage);
            dataAcc1.push(this.messeage);
            localStorage.setItem("Account1", JSON.stringify(dataAcc1));
            this.isShowMessage = false;
            this.messeage = '';
            }else{
                this.warrning = 'Vui lòng nhập đủ các thông tin';
                this.isShowMessage =  true;

            }
            console.log("them" , this.Account1);
         
        },
        remove(index, item) {
            this.indos.splice(index, 1)
            let dataAcc1 = JSON.parse(localStorage.getItem('Account1'))
            const itemIndex = dataAcc1.indexOf(item);
            if (itemIndex > -1) {
                dataAcc1.splice(itemIndex, 1);
            }
            localStorage.setItem("Account1", JSON.stringify(dataAcc1));
        },
       
        logOut() {
            this.isLogOut = true;
            this.isAdd = false;
            this.messeage = ''
        },
        No() {
            this.isLogOut = false
            this.isAdd = true;
            this.messeage = ""

        },
        Yes() {
            this.$router.push('/')

        },
        checkInput(){
            if(this.messeage.trim() === ''){
                return false;
            }else{
                return true;
            }
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