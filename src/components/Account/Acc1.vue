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
            <button @click="updatePassword" style="margin-right: 10px;">Update Password</button>
            <button @click="logOut">Log Out</button>
            <input style="height: 25px;" type="text" v-model="add.messeage" placeholder="Please enter's data" />

            <button @click="submit">Submit</button>
            <p style="color: red;" v-if="isShowMessage">{{ warrning }}</p>

            <h3>Thông tin dữ liệu</h3>
            <ul v-for="(indo, index) in indos" :key="index">
                <li>{{ indo }}</li>
                <button @click="remove(index, indo)"><img src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png"    height="20px" alt=""></button>
                <button @click="updateData(index)"><img src="https://cdn-icons-png.flaticon.com/512/5278/5278663.png" height="20px"  alt=""></button>
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
            add: {
                messeage: '',
            },
            indos: [],
            warrning: '',
            isShowMessage: false
        }
    },
    methods: {
        submit() {
            let check = this.checkInput();
            if (check) {
                let dataAcc1 = JSON.parse(localStorage.getItem('Account1'))
                this.indos.push(this.add.messeage);
                dataAcc1.push(this.add.messeage);
                localStorage.setItem("Account1", JSON.stringify(dataAcc1));
                this.add.messeage = '';
                this.add.id = Date.now();
                this.isShowMessage = false;
                // console.log("them", this.Account1);
                console.log('add', this.indos);
                console.log('id', this.add.id);

            } else {
                this.warrning = 'Vui lòng nhập đủ các thông tin';
                this.isShowMessage = true;
            }

        },

        remove(index, item) {
            this.indos.splice(index, 1);
            let dataAcc1 = JSON.parse(localStorage.getItem('Account1'))
            let itemIndex = dataAcc1.findIndex((element) => {
                return JSON.stringify(element) === JSON.stringify(item);
            });
            console.log("item", itemIndex);
            if (itemIndex > -1) {
                dataAcc1.splice(itemIndex, 1);
                localStorage.setItem("Account1", JSON.stringify(dataAcc1));

                console.log('remove', dataAcc1);
            }
        },
        updateData(index) {
            this.$router.push({ path: '/updateDataAcc1', query: { index } });
        },

        updatePassword() {
            this.$router.push('/updatePassword');
        },

        logOut() {
            this.isLogOut = true;
            this.isAdd = false;
        },
        No() {
            this.isLogOut = false
            this.isAdd = true;


        },
        Yes() {
            localStorage.setItem("LOGGED_IN_USERNAME", JSON.stringify([]));
            this.$router.push('/')
        },
        checkInput() {
            if (this.add.messeage.trim() === '') {
                return false;
            } else {
                return true;
            }
        },


    },
    created() {
        this.indos = JSON.parse(localStorage.getItem('Account1'));
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




