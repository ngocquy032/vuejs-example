<script>
import TodoAdd from '@/components/Todo/TodoAdd.vue';
import TodoItem from '@/components/Todo/TodoItem.vue';
export default {
    props: {

    },
    components: {
        TodoAdd,
        TodoItem
    },
    data() {
        return {
            message: 'Vuejs Todo List',
            todosProps: [],
        }
    },
    methods: {
        addData(todo) {
            this.todosProps.push(todo);
            console.log(this.todosProps);
        },
        removeData(todo) {
            const pos = this.todosProps.indexOf(todo);
            this.todosProps.splice(pos, 1);
            console.log("todo: ", todo);
        },
      
       
    }
}
</script> 
<style scoped>
ul {
    list-style-type: none;
    padding: 10px;
    border: solid 1px;
    border-radius: 2px;
    margin: 20px 30%;
}

li {
    display: inline-block;
    margin: 0 10px;
    padding: 0px 30%;
}
</style>
<template>
    <div class="">
        <img src="@/assets/logo.png" alt="">
        <div class="title">
            <h1>{{ message }}</h1>

        </div>
        <TodoAdd @add-todo="addData" />
        <TodoItem :todosProps="todosProps" @remove-todo="removeData" />
        
        

    </div>
</template>