<template>
    <div>
        <h1>Update Data</h1>
        <div class="mg-20">

            <div class="input-group">
                <label for="name">Full Name</label>
                <input type="text" v-model="update.name" placeholder="FullName">
            </div>

            <div class="input-group">
                <label for="age">Age</label>
                <input type="text" v-model="update.age" placeholder="Age">
            </div>

            <div class="input-group">
                <label for="gender">Gender</label>
                <select v-model="update.gender">
                    <option disabled value="">Please select one</option>
                    <option>Nam</option>
                    <option>Nữ</option>
                    <option>Khác</option>
                </select>
            </div>

            <div class="input-group">
                <label for="phone">Phone</label>
                <input type="text" v-model="update.phone" placeholder="NumberPhone">
            </div>

            <div class="input-group">
                <label for="address">Address</label>
                <textarea v-model="update.address" placeholder="add multiple lines"></textarea>
            </div>
        </div>

        <div>
            <p style="color: red;" v-if="isShowMessage">{{ warrning }}</p>

            <button @click="cancle">Canlce</button>
            <button @click="updateData()">Update</button>

        </div>


    </div>
</template>

<script>
export default {

    data() {
        return {
            update: {
                name: '',
                phone: '',
                age: '',
                gender: '',
                address: '',

            },
            warrning: '',
            isShowMessage: false,
        }
    },
    methods: {
        updateData() {
            let check = this.checkInput()
            if (check) {
                console.log('ok');
                let index = this.$route.query.index;
                let dataAcc2 = JSON.parse(localStorage.getItem('Account2'));
                if (index >= 0 && index < dataAcc2.length) {
                    dataAcc2[index] = this.update;
                    localStorage.setItem('Account2', JSON.stringify(dataAcc2));
                    alert('Thay đổi dữ liệu thành công');
                    this.$router.push('/acc2');
                }
            } else {
                this.warrning = 'Vui lòng nhập đầy đủ thông tin';
                this.isShowMessage = true;
            }
        },
        cancle() {
            this.$router.push('/acc2')
        },
        checkInput() {
            if (this.update.name.trim() === '' || this.update.age.trim() === '' || this.update.phone.trim() === '' || this.update.gender.trim() === '' || this.update.address.trim() === '') {
                return false;
            } else {
                return true;
            }
        },


    },
    created() {
        let indos = this.$route.query.index;
        let data = JSON.parse(localStorage.getItem('Account2'));
        if (indos >= 0 && indos < data.length) {
            this.update = data[indos];
        }
    }



}
</script>

<style scoped>
.mg-20 {
    margin: 0px 35%;
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
}
</style>