<template>
    <div>
        <div class="mg-20" v-if="isBack">
            <h1>Account 2</h1>
            <div class="input-group">
                <label for="name">Full Name</label>
                <input type="text" v-model="add.name" placeholder="FullName">
            </div>

            <div class="input-group">
                <label for="age">Age</label>
                <input type="text" v-model="add.age" placeholder="Age">
            </div>

            <div class="input-group">
                <label for="gender">Gender</label>
                <select v-model="add.gender">
                    <option disabled value="">Please select one</option>
                    <option>Nam</option>
                    <option>Nữ</option>
                    <option>Khác</option>
                </select>
            </div>

            <div class="input-group">
                <label for="phone">Phone</label>
                <input type="text" v-model="add.phone" placeholder="NumberPhone">
            </div>

            <div class="input-group">
                <label for="address">Address</label>
                <textarea v-model="add.address" placeholder="add multiple lines"></textarea>
            </div>
        </div>

        <div>
            <div v-if="isLogOut">
                <img src="@/assets/logo.png" alt="">
                <p>Vui Lòng xác Thực Đăng Xuất!!!</p>
                <button @click="No" style="margin: 5px 15px;">No</button>
                <button @click="Yes" style="margin: 5px 15px;">Yes</button>
            </div>
            <button v-if="isAdd" @click="updateUser" style="margin: 0px 30px;">Update PassWord</button>
            <button v-if="isAdd" @click="logOut" style="margin: 0px 30px;">Log Out</button>
            <button v-if="isAdd" @click="submit">Submit</button>
            <p style="color: red;" v-if="isShowMessage">{{ warrning }}</p>

        </div>
        <div class="mg-15" v-if="isBack">
            <h3>Danh sách Người Dùng</h3>
            <table>
                <thead>
                    <tr>
                        <th>Họ Tên</th>
                        <th>Tuổi</th>
                        <th>Giới Tính</th>
                        <th>Số ĐT</th>
                        <th>Địa Chỉ</th>
                        <th>Ghi Chú</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(indo, index) in indos" :key="index">
                        <td>{{ indo.name }}</td>
                        <td>{{ indo.age }}</td>
                        <td>{{ indo.gender }}</td>
                        <td>{{ indo.phone }}</td>
                        <td>{{ indo.address }}</td> 
                        <td> <button @click="remove(index, indo)"><img
                                    src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png" height="20px"
                                    alt=""></button>
                            <button @click="updateData(index)"><img
                                    src="https://cdn-icons-png.flaticon.com/512/5278/5278663.png" height="20px"
                                    alt=""></button>
                        </td>
                    </tr>
                </tbody>
            </table>
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
            isShowMessage: false,
            isUpdate: false
        }
    },
    methods: {
        submit() {
            let check = this.checkInput();
            if (check) { 
                let dataAcc2 = JSON.parse(localStorage.getItem('Account2'));
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
            const removeaAcc2 = JSON.parse(localStorage.getItem('Account2'));
            const itemIndex = removeaAcc2.findIndex((element) => {
                return JSON.stringify(element) === JSON.stringify(item);
            });
            console.log("item", itemIndex);
            if (itemIndex > -1) {
                removeaAcc2.splice(itemIndex, 1);
                localStorage.setItem('Account2', JSON.stringify(removeaAcc2));
                console.log('remove', removeaAcc2);
                this.removeaAcc2 = JSON.parse(localStorage.getItem('Account2'));
                this.indos = this.removeaAcc2;
            }
            

        },
        updateData(index) {
            this.$router.push({ path: '/updateDataAcc2', query: { index } });
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
            localStorage.setItem("LOGGED_IN_USERNAME", JSON.stringify([]));

            this.$router.push('/')
        },
        checkInput() {
            if (this.add.name === '' || this.add.age === '' || this.add.address === '' || this.add.gender === '' || this.add.phone === '') {
                return false;

            } else {
                return true;
            }
        },
        updateUser() {
            this.$router.push('/updatePassword')
        },

    },
    created() {
        this.indos = JSON.parse(localStorage.getItem('Account2'));
        console.log(typeof (this.indos));
    }
}

</script>


<style scoped>
.mg-15 {
    margin: 0px 10%;
}

.mg-20 {
    margin: 0px 35%;
}

table {
    width: 100%;
    border-collapse: collapse;
}

thead {
    background-color: #f2f2f2;
}

th,
td {
    padding: 8px;
    /* text-align: left; */
    /* border-bottom: 1px solid #ddd; */
    border: 1px solid #ddd;
}

td.button {
    margin: 0px 10px;

}

button {
    margin: 5px;
    color: whitesmoke;
    background: #ff6969;
    height: 30px;
    font-size: inherit;
    border-radius: 5px;
    border: wheat;
    padding: 0px 15px;
}

button:hover {
    background: #d21312;
}

input {
    font-size: 16px;
}

.input-group {
    font-size: 18px;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

.input-group label {
    flex: 0 0 150px;
    /* Width of the label */
    margin-right: 10px;
    text-align: right;
}

.input-group input,
.input-group select,
.input-group textarea {
    font-size: 16px;

    flex: 1;
    /* Take remaining space */
    height: 30px;
    padding: 5px;
}

textarea {
    height: 80px;

    /* Adjust the height as needed */
}</style>