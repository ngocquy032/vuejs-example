<template>
    <div>
        <h1> Account 2</h1>
      
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

        <div class="">
            Address: <textarea v-model="add.address" placeholder="add multiple lines"></textarea>
        </div>

        <div>
            <button @click="logOut" style="margin: 0px 30px;">Log Out</button>
        <div v-if="isLogOut">
            <p>Vui Lòng xác Thực Đăng Xuất!!!</p>
            <button @click="No" style="margin: 5px 15px;">No</button>
            <button @click="Yes" style="margin: 5px 15px;">Yes</button>
        </div>
            <button v-if="isAdd" @click="submit">Submit</button>
        </div>
        <ul v-for="(item, index) in items" :key="index">
            <li>họ và tên : {{ item.name }}</li>
            <li>tuổi : {{ item.age }}</li>
            <li>giới tính : {{ item.gender }}</li>
            <li>số điện thoại : {{ item.phone }}</li>
            <li>địa chỉ : {{ item.address }}</li>

            <button v-if="isRemove" @click="remove(index, item)">Remove</button>

        </ul>


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
            items: [],
            isAdd: true,
            isRemove: true

        }
    },
    methods: {
        submit() {
            this.items.push(this.add)

            this.add = {
                name: '',
                age: '',
                gender: '',
                phone: '',
                address: '',
            };
            console.log(this.items)
        },
        remove(id) {
            this.items.splice(id, 1)
            console.log("item  ", id);

        },
        logOut() {
            this.isLogOut = true;
            this.isAdd = false;
            this.isRemove = false;
        },
        No() {
            this.isLogOut = false
            this.isAdd = true;
            this.isRemove = true;

        },
        Yes() {
            this.$router.push('/')

        }

    }
}

</script>

<style scoped>
.h-50 {
  height: 50px;
}


h3 {
  margin: 30px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

input {
  margin: 0 10px;
}


a {
  color: #42b983;
}</style>