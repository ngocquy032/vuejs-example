<template>
    <div class="item">
        <ul v-for="(todo, index) in todosProps" :key="index">
            
            <li>{{ todo }}</li>
            <button v-if="isButton" @click="remove(todo, index)">X</button>
        </ul>
    </div>
</template>

<script>

export default {
    props: {
        todosProps: [],
        
    },
    components: {
    },
    data() {
        return {
            isButton: true
          
        }

    },
    methods: {
        remove(todo, index) {
            this.$emit('remove-todo', todo, index);
            // this.$emit('remove-todo', this.todosProps)
            // console.log('remove', this.todosProps);
        }
    

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