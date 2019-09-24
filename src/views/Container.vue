<template>
  <div>
    <div class="container layout flex">
      <div class="left">1</div>
      <div class="center">2flex</div>
      <div class="right">3</div>
    </div>
    <div class="container2 layout grid">
      <div class="left">1</div>
      <div class="center">2grid</div>
      <div class="right">3</div>
    </div>
    <article class="container3 layout float">
      <div class="left">1</div>
      <div class="right">3</div>
      <div class="center">
        2float
        <p style="text-align: left">float布局</p>
        <p>float布局</p>
        <p>float布局</p>
      </div>
    </article>
    <article class="container4 layout absolute">
      <div class="left">1</div>
      <div class="right">3</div>
      <div class="center">2absolute</div>
    </article>
    <article class="container5 layout table">
      <div class="left">1</div>
      <div class="center">2table</div>
      <div class="right">3</div>
    </article>
  </div>
</template>

<script>
  export default {
    name: "Container",
    data() {
      return {
        arr: []
      }
    },
    created() {
      this.getArr();
    },
    methods: {
      getArr() {
        let arr = [];
        function addArr() {
          let num = Math.floor( Math.random()*30 + 2);
          if (arr.length < 5 && !arr.find(item=>item === num)) {
            arr.push(num);
            addArr();
          }
          return arr;
        }
        addArr();
      }
    }
  }
</script>

<style scoped lang="scss">
  .layout {
    margin-top: 20px;
    div {
      height: 100px;
    }
  }
  .container {
    margin-top: 0;
    display: flex;
    .left {
      width: 50px;
      background-color: blue;
    }
    .right {
      width: 50px;
      background-color: yellow;
    }
    .center {
      flex: 1;
      background-color: red;
    }
  }
  .container2 {
    display: grid;
    color: #fff;
    text-align: center;
    grid-template-columns: 50px auto 50px;
    grid-template-rows: 100px;
    line-height: 100px;
    .left {
      background-color: #333;
    }

    .center {
      background-color: #666;
    }

    .right {
      background-color: #000;
    }
  }
  .container3 {
    .left {
      float: left;
      width: 50px;
      background-color: red;
    }
    .right {
      float: right;
      width: 50px;
      background-color: green;
    }
    .center {
      background-color: yellow;
    }
  }
  .container4 {
    position: relative;
    height: 100px;
    .left, .center, .right {
      position: absolute;
    }
    .left {
      left: 0;
      width: 50px;
      background-color: red;
    }
    .right {
      right: 0;
      width: 50px;
      background-color: green;
    }
    .center {
      left: 50px;
      right: 50px;
      background-color: yellow;
    }
  }
  .container5 {
    display: table;
    width: 100%;
    height: 100px;
    .left, .center, .right {
      display: table-cell;
    }
    .left {
      width: 50px;
      background-color: red;
    }
    .right {
      width: 50px;
      background-color: green;
    }
    .center {
      background-color: yellow;
    }
  }
</style>