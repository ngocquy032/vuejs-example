<template>
    <div>
       
    </div>
</template>

<script>


export default {
    components: {
      
    },
    
submit() {
    let check = this.checkInput();
    if (check) {
        // Lấy dữ liệu từ localStorage
        let dataAcc2 = JSON.parse(localStorage.getItem('Account2'));
        // Thêm dữ liệu mới vào mảng indos và dataAcc2
        this.indos.push(this.add)
        dataAcc2.push(this.add)
        // Cập nhật lại localStorage
        localStorage.setItem("Account2", JSON.stringify(dataAcc2));
        // Reset giá trị biến add
        this.add = {
            name: '',
            age: '',
            gender: '',
            phone: '',
            address: '',
        };
        this.add.id = Date.now();
        this.isShowMessage = false;
        // Lấy dữ liệu từ localStorage và gán lại vào biến dataAcc2 để hiển thị lên màn hình
        this.dataAcc2 = JSON.parse(localStorage.getItem('Account2'));
        console.log('add', this.dataAcc2);
        console.log("id", this.add.id)

    } else {
        this.warrning = "Vui lòng nhập đầy đủ thông tin"
        this.isShowMessage = true;
    }
    // console.log(this.indos)
}
}
</script>

<style lang="scss" scoped></style>