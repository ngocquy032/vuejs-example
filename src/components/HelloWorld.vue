<template>
  <div class="hello">
    <!-- {{ messeage }} -->

    <!-- <label>{{ item.messeage }}</label><br>
      <button @click="remove">Remove</button>
      <span> Multiline messeage is: </span>
      <p style="white-space: pre-line;"> {{ messeage2 }}</p>
      <textarea v-model="messeage2" placeholder="add mulriple lines"></textarea>
      <br> -->
    <!-- 
        <input type="checkbox" id="checkbook" v-model="checked" />
        <label for="checkbox"> {{ checked }}</label>
        <br>
        <div>Checkd name: {{ checkedNames }}</div>
        <input type="checkbox" value="Jack" v-model="checkedNames">
        <label for="jack">Jack</label>
        
        <input type="checkbox" value="John" v-model="checkedNames">
        <label for="john">John</label> -->

    <!-- <li v-for="item in items" :key="item">
          {{ item.messeage }}
        </li> -->

    <!-- FORM SUBMIT -->
    <!-- <h1> {{ conten }} </h1>
    <div class="">
      <input style="height: 25px;" type="text" v-model="messeage" placeholder="Please enter's data" />
      <button style="height: 25px;border-radius: 5px; background: white;" @click="submit">Submit</button> <br>
    </div>
    <h3>{{ AddSubmit }}</h3>
    <ul v-for="(indo, index) in indos" :key="index">
      <li>{{ indo }}</li>
      <button style="border-radius: 5px; background: white;" @click="remove(index, indo)">Remove</button>
      <br />
    </ul> -->
    <!-- FROM USER -->
    <h1>Form Submit</h1>


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
      <button @click="submit">Submit</button>
    </div>
    <ul v-for="(item, index) in items" :key="index">
      <li>họ và tên : {{ item.name }}</li>
      <li>tuổi : {{ item.age }}</li>
      <li>giới tính : {{ item.gender }}</li>
      <li>số điện thoại : {{ item.phone }}</li>
      <li>địa chỉ : {{ item.address }}</li>

      <button @click="remove(index, item)">Remove</button>
    
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
      /*
      form submit
      conten: 'Form Submit',
      AddSubmit: 'Submit data',
      messeage: '',
      indos: [],
       */
      add:{ 
        name: '',
        age: '',
        gender: '',
        phone: '',
        address: '',
      },
      items: [],
      // checked: false,
      // dataList: [],
      // checkedNames: [],

    }
  },
  methods: {
    submit() {
      // this.indos.push(this.messeage);
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
      // console.log("item  ", item);
      this.items.splice(id, 1)
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
}
</style>
