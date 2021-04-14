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

    <iframe sandbox srcdoc="<p>Yeah, you can see it <a href='/gallery?mode=cover&amp;amp;page=1'>in my gallery</a>."></iframe>
    <div class="outer">
      <div class="fixed"></div>
      <div class="auto">
       auto
      </div>
    </div>
    <img src='data:image/svg+xml;charset=utf8,<svg version="1.1" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="100" style="fill:rgb(0,0,255);stroke-width:1;stroke:rgb(0,0,0)"/></svg>'/>
    <van-button @click="show = !show">收起</van-button>
    <div class="tzt-slide" :class="[show ? 'slider' : '']">
      <div>ppppppppppppppppp</div>
      <div>ppppppppppppppppp</div>
      <div>ppppppppppppppppp</div>
      <div>ppppppppppppppppp</div>
      <div>ppppppppppppppppp</div>
      <div>ppppppppppppppppp</div>
      <div>ppppppppppppppppp</div>
      <div>ppppppppppppppppp</div>
      <div>ppppppppppppppppp</div>
      <div>ppppppppppppppppp</div>
      <div>ppppppppppppppppp</div>
      <div>ppppppppppppppppp</div>
      <div>ppppppppppppppppp</div>
      <div>ppppppppppppppppp</div>
      <div>ppppppppppppppppp</div>
      <div>ppppppppppppppppp</div>
      <div>ppppppppppppppppp</div>
      <div>ppppppppppppppppp</div>
      <div>ppppppppppppppppp</div>
      <div>ppppppppppppppppp</div>
      <div>ppppppppppppppppp</div>
      <div>ppppppppppppppppp</div>
      <div>ppppppppppppppppp</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Container",
    data() {
      return {
        arr: [],
        show: false,
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
  .outer {
    margin-top: 30px;
    .fixed {
      width: 200px;
      height: 50px;
      display: inline-block;
      background-color: red;
      vertical-align: top;
      transform: translateZ(0);
    }
    .auto {
      width: 100%;
      margin-left: -200px;
      display: inline-block;
      height: 50px;
      padding-left: 200px;
      box-sizing: border-box;
      vertical-align: top;
      text-align: left;
      background-color: blue;
    }
  }
  .tzt-slide {

    overflow: hidden;
    max-height: 0;
    /*transition: max-height 3s linear;*/
    transition: max-height .3s cubic-bezier(0, 1, 0, 1);
  }
  .slider {
    max-height: 9999px;
    transition-timing-function: cubic-bezier(0.5, 0, 1, 0);
    transition-delay: 0s;
    /*transition: max-height 3s linear;*/
    /*transition-delay: 0s;*/
  }
</style>
