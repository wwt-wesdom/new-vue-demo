<template>
  <div>
    <ul>
      <li v-for="(item, index) in list" :key="index">{{`${item.text}:${index}`}}</li>
      <custom-button :callback="changeList">改变数组</custom-button>
    </ul>
    <ul>
      <template v-for="item in listTwo" >
        <li>{{item}}</li>
      </template>
      <custom-button :callback="changeListTwo">改变数组</custom-button>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "KeyUse",
        data() {
            return {
                list: [
                    {
                        text: 1,
                        id: 1,
                    },
                    {
                        text: 2,
                        id: 2
                    },
                    {
                        text: 3,
                        id: 3
                    }
                ],
                test: 'test',
                obj: [1,2,3],
                listTwo: [1,2,3]
            }
        },
        beforeCreate() {
        },
        created() {
            console.log(this);
        },
        methods: {
            changeList() {
              this.list.unshift({
                  text: 0,
                  id: 0
              });
              this.list[1].text = 5;
              console.log(this.list);
            },
            changeListTwo() {
                this.listTwo[0] = 6;
            }
        }
    }
</script>

<style scoped>

</style>