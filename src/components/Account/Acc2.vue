<template>
    <div>
        <h1> Account 2</h1>
        <div v-if="isBack">
            <div class="h-50">
                FullName: <input type="text" v-model="add.name" placeholder="FullName">
            </div>

            <div class="h-50">
                Age: <input type="text" v-model="add.age" placeholder="Age">
            </div>

            <div class="h-50">
                Gender: <select v-model="add.gender">
                    <option disabled value="">Please select one</option>
                    <option>Nam</option>
                    <option>Nữ</option>
                    <option>Khác</option>
                </select>
            </div>

            <div class="h-50">
                Phone: <input type="text" v-model="add.phone" placeholder="NumberPhone">
            </div>

            <div class>
                Address: <textarea v-model="add.address" placeholder="add multiple lines"></textarea>
            </div>


        </div>


        <div>
            <button @click="logOut" style="margin: 0px 30px;">Log Out</button>
            <div v-if="isLogOut">
                <p>Vui Lòng xác Thực Đăng Xuất!!!</p>
                <button @click="No" style="margin: 5px 15px;">No</button>
                <button @click="Yes" style="margin: 5px 15px;">Yes</button>
            </div>
            <button v-if="isAdd" @click="submit">Submit</button>
            <p style="color: red;" v-if="isShowMessage">{{ warrning }}</p>

        </div>
        <div v-if="isBack">
            <ul v-for="(indo, index) in indos" :key="index">
                <li>họ và tên : {{ indo.name }}</li>
                <li>tuổi : {{ indo.age }}</li>
                <li>giới tính : {{ indo.gender }}</li>
                <li>số điện thoại : {{ indo.phone }}</li>
                <li>địa chỉ : {{ indo.address }}</li>

                <button @click="remove(index, indo.name)">Remove</button>

            </ul>
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
            isLogOut: false,
            add: {
                name: '',
                age: '',
                gender: '',
                phone: '',
                address: '',
            },
            indos: [],
            isAdd: true,
            isBack: true,
            warrning: '',
            isShowMessage: false
        }
    },
    methods: {
        submit() {
            let check = this.checkInput();
            if (check) {
                let dataAcc2 = JSON.parse(localStorage.getItem('Account2'));
                this.indos.push(this.add)
                dataAcc2.push(this.add)
                localStorage.setItem("Account2", JSON.stringify(dataAcc2));
                this.add = {
                    name: '',
                    age: '',
                    gender: '',
                    phone: '',
                    address: '',
                };
                this.isShowMessage = false;


            } else {
                this.warrning = "Vui lòng nhập đầy đủ thông tin"
                this.isShowMessage = true;

            }
            console.log('add',this.dataAcc2);

            // console.log(this.indos)

        },

        // this.indos.splice(index, 1);
        // let dataAcc2 = JSON.parse(localStorage.getItem('Account2'));

        // const itemIndex = this.indos.filter(indo => indo === item);
        // if (itemIndex) {
        //     dataAcc2.splice(itemIndex, 1);
        //     localStorage.setItem("Account2", JSON.stringify(this.indos));
        // }
        remove(index, item) {
            this.indos.splice(index, 1);
            const removeaAcc2 = JSON.parse(localStorage.getItem('Account2'));
            const itemIndex = removeaAcc2.indexOf(item);
            if (itemIndex > -1) {
                removeaAcc2.splice(itemIndex, 1);
                localStorage.setItem('Account2', JSON.stringify(removeaAcc2));
            }
                localStorage.setItem('Account2', JSON.stringify(this.indos));
            

            // localStorage.setItem('Account2', JSON.stringify(dataAcc2));
            // console.log('xoa', dataAcc2);
        },

        logOut() {
            this.isLogOut = true;
            this.isAdd = false;
            this.isBack = false;
        },
        No() {
            this.isLogOut = false
            this.isAdd = true;
            this.isBack = true;
        },
        Yes() {

            this.$router.push('/')

        },
        checkInput() {
            if (this.add.name === '' || this.add.age === '' || this.add.address === '' || this.add.gender === '' || this.add.phone === '') {
                return false;

            } else {
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


input,
select {
    width: auto;
    height: 35px;
    margin: 5px 10px;
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