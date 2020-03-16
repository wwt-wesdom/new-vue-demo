<template>
    <div>
        <div class="pd-10 cl-fff fs-38 bc-red">组件的使用</div>
        <c-button ref="cButton" class="mt-20" @click.native="submit">确定</c-button>
        <provide class="mt-20"></provide>
        <div class="mt-20" @click="changePhone">{{app.userInfo ? app.userInfo.phone : ''}}</div>
        <div class="mt-30">
            <check-box>选择框</check-box>
        </div>
    </div>
</template>

<script>
    export default {
        name: "UseComponent",
        provide: {
            name: 'joke',
            age: 18
        },
        inject: ['app'],
        mounted() {
            // const child = this.$refs.cButton;
            // console.log(child.title);
            // child.sayHi('xiaoming')
            let arr = [1,1,2,2,3,3,3,4,4,5,6,7,7];
            console.log(this.arrUnique(arr));
        },
        methods: {
            submit(e) {
                console.log(e);
            },
            changePhone() {
                this.app.getUserInfo();
            },
            arrUnique(arr) {
                let newArr = [];
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i] !== arr[i+1]) {
                        newArr.push(arr[i])
                    }
                }
                return newArr;
            }
        }
    }
</script>

<style scoped>

</style>