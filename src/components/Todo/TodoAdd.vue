<template>
    <div>      
            <button @click="logOut">Log Out</button>
            <div v-if="isLogOut">
                <p>Vui Lòng xác Thực Đăng Xuất!!!</p>
                <button @click="No"  style="margin: 5px 15px;">No</button>
                <button @click="Yes" style="margin: 5px 15px;">Yes</button>
            </div>       
        <input v-if="isAdd" type="text" v-model="username" placeholder="Todo Item" />
        
            <button v-if="isAdd" @click="addTodo">Add</button>
        
    </div>
</template>

<script>

export default {
    components: {
    },

    data() {
        return {
            username: '',
            isLogOut: false,
            isAdd: true
        }
    },
    methods: {
        addTodo() {
            // this.indos.push(this.username);
            // this.username = '';
            // console.log(this.indos);
            this.$emit('add-todo', this.username);
            this.username = '';
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
           this.$router.push('/')

        }

    }

}
</script>

<style scoped >
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