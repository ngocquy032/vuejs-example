<template>
    <div>
        <div v-if="isBack">
            <h1> Account 2</h1>
            <div class="h-50">
                <label for="name">Full Name</label>
                <input type="text" v-model="add.name" placeholder="FullName">
            </div>

            <div class="h-50">
                <label for="age">Age</label>
                <input type="text" v-model="add.age" placeholder="Age">
            </div>

            <div class="h-50">
                <label for="gender">Gender</label>
                <select v-model="add.gender">
                    <option disabled value="">Please select one</option>
                    <option>Nam</option>
                    <option>Nữ</option>
                    <option>Khác</option>
                </select>
            </div>

            <div class="h-50">
                <label for="phone">Phone</label>
                <input type="text" v-model="add.phone" placeholder="NumberPhone">
            </div>

            <div class>
                <label for="address">Address</label>
                <textarea v-model="add.address" placeholder="add multiple lines"></textarea>
            </div>

        </div>

        <div>
            <button v-if="isAdd" @click="updateUser" style="margin: 0px 30px;">Update User</button>
            <button  @click="logOut" style="margin: 0px 30px;">Log Out</button>
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
                <button @click="remove(index, indo)">Remove</button>
                <button @click="updateData(index, indo)">Update</button>

           

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
            a: true,

            indos: [],
            isAdd: true,
            isBack: true,
            warrning: '',
            isShowMessage: false,
            isUpdate: false
        }
    },
    methods: {
        submit() {
            let check = this.checkInput();
            if (check) {
                let dataAcc2 = JSON.parse(localStorage.getItem('Account2'));
                // this.indos.push(this.add)
                dataAcc2.push(this.add)
                localStorage.setItem("Account2", JSON.stringify(dataAcc2));
                this.add = {
                    name: '',
                    age: '',
                    gender: '',
                    phone: '',
                    address: '',
                };
                this.add.id = Date.now();
                this.isShowMessage = false;
                this.dataAcc2 = JSON.parse(localStorage.getItem('Account2'));
                this.indos = this.dataAcc2;
                console.log('add', this.dataAcc2);
                console.log("id", this.add.id)


            } else {
                this.warrning = "Vui lòng nhập đầy đủ thông tin"
                this.isShowMessage = true;
            }
        },
        remove(index, item) {
            this.indos.splice(index, 1);
            const removeaAcc2 = JSON.parse(localStorage.getItem('Account2'));
            const itemIndex = removeaAcc2.findIndex((element) => {
                return JSON.stringify(element) === JSON.stringify(item);
            });
            console.log("item", itemIndex);
            if (itemIndex > -1) {
                removeaAcc2.splice(itemIndex, 1);
                localStorage.setItem('Account2', JSON.stringify(removeaAcc2));
                console.log('remove', removeaAcc2);
            }

        },
        logOut() {
            this.isLogOut = true;
            this.isAdd = false;
            this.isBack = false;
            this.isShowMessage = false;
           
        },
        No() {
            this.isLogOut = false
            this.isAdd = true;
            this.isBack = true;
            this.isUpdate = false;
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
        },
        updateUser(){
            this.$router.push('/updatePassword')
        }, updateData(){
            
        }

    },
    created() {
        this.indos = JSON.parse(localStorage.getItem('Account2'));
        console.log(typeof (this.indos));
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
    margin: 0px 10px;
}

label {
    padding: 10px;
}

button:hover {
    background: #D21312;
}
</style>