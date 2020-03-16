<template>
    <div>
        <div class="pd-10 cl-fff fs-38 bc-red">组件的使用</div>
        <c-button ref="cButton" class="mt-20" @click.native="submit">确定</c-button>
        <provide class="mt-20"></provide>
        <div class="mt-20" @click="changePhone">{{app.userInfo ? app.userInfo.phone : ''}}</div>
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
        },
        methods: {
            submit(e) {
                console.log(e);
            },
            changePhone() {
                this.app.getUserInfo();
            }
        }
    }
</script>

<style scoped>

</style>