<template>
    <div>provide/inject</div>
</template>

<script>
    export default {
        name: "Provide",
        inject: ['name', 'age'],
        mounted() {
            console.log(this.name);
            // this.name = 'wwt';
            console.log(this.age);
        }
    }
</script>

<style scoped>

</style>