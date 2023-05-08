<template>
    <div>
        <h1> Form Submit </h1>
        <div class="">
            <button @click="logOut">Log Out</button>
            <div v-if="isLogOut">
                <p>Vui Lòng xác Thực Đăng Xuất!!!</p>
                <button @click="No"  style="margin: 5px 15px;">No</button>
                <button @click="Yes" style="margin: 5px 15px;">Yes</button>
            </div>  
            <input style="height: 25px;" type="text" v-model="messeage" placeholder="Please enter's data" />
            <button v-if="isAdd"  @click="submit">Submit</button> <br>
        </div>
        <h3>{{ AddSubmit }}</h3>
        <ul v-for="(indo, index) in indos" :key="index">
            <li>{{ indo }}</li>
            <button v-if="isRemove"  @click="remove(index, indo)">Remove</button>
            <br />
        </ul>

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
            isRemove: true,

            AddSubmit: 'Submit data',
            messeage: '',
            indos: [],
        }
    },
    methods: {
        submit() {
            this.indos.push(this.messeage);
            this.messeage = ''


        },
        remove(id) {
            this.indos.splice(id, 1)
            console.log("item  ", id);


        },
        logOut() {
            //   alert('Vui Lòng Xác Nhận Đăng Xuất !!!');
            this.isLogOut = true;
            this.isAdd = false;
            this.isRemove =  false;
            this.messeage = ''
        },
        No() {
            this.isLogOut = false
            this.isAdd = true;
            this.isRemove = true;
            this.messeage = ""

        },
        Yes() {
           this.$router.push('/')

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
button:hover{
    background: #D21312;
}
</style>