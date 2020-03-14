<template>
  <div>

  </div>
</template>

<script>
    export default {
        name: "ListAndObjChange",
        created() {
            this.objChange();
        },
        methods: {
            objChange() {
                let objOne = {
                    arr: [1,2,3]
                };
                Object.defineProperty(objOne, 'arr', {
                    get() {
                        console.log(111);
                        return objOne.arr;
                    },
                    set(val) {
                        console.log(val);
                    }
                });
                // console.log(objOne.arr);
                // objOne.arr[0] = 5;
            }
        }
    }
</script>

<style scoped>

</style>