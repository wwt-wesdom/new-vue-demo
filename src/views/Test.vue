<template>
  <div>
    <input :value="value1" @input="changeOne" type="text">
      <button @click="testParams(aaaa)">button</button>
    <table>
      <tr @click="rowClick" v-for="item in list" :key="item.id">
        <td>111</td>
        <td>111</td>
        <td>111</td>
        <td>111</td>
        <td>111</td>
        <td>111</td>
        <td>111</td>
        <td>111</td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: "Test",
    data() {
      return {
        value1: 'ssssssssssss',
          aaaa: 'asdfasdf',
          list: [
              {id: 0},
              {id: 1},
              {id: 2},
              {id: 3},
              {id: 4},
          ]
      }
    },
    methods: {
      changeOne(event) {
        console.log(event.target.value);
        this.value1 = event.target.value;
      },
        testParams(value) {
            console.log(value);
        },
        rowClick(e) {
            console.log(e);
        }
    },
    watch: {

    }
  }
</script>

<style scoped>
 input {
   width: 200px;
   height: 50px;
   border: 1px solid #e5e5e5;
 }
</style>
