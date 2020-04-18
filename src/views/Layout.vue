<template>
  <div>
    <section>
      <article class="layout-float">
        <div class="left">left</div>
        <div class="right">right</div>
        <div class="center">center</div>
      </article>
      <article class="layout-grid mt-20">
        <div class="left">left</div>
        <div class="center">center</div>
        <div class="right">right</div>
      </article>
    </section>
    <!--grid布局-->
    <section class="grid">
      <div v-for="item in gridListOne" class="grid-item">
        <img src="~assets/img/common/dlrb.jpg" width="100%" alt=""/>
      </div>
    </section>
    <!--背景色渐变-->
    <section>
      <div class="linear-gradient"></div>
    </section>
  </div>
</template>

<script>
  export default {
    name: "Layout",
    data() {
      return {
        gridListOne: [1,2,3,4,5,6,7,8,9]
      }
    },
    created() {
    },
    methods: {
    }
  }
</script>

<style scoped lang="scss">
  .left {
    background-color: yellow
  }

  .center {
    background-color: blue;
    color: #fff;
  }

  .right {
    background-color: red
  }

  .layout-float {
    .left {
      width: 100px;
      height: 100px;
      float: left;
    }

    .right {
      width: 100px;
      height: 100px;
      float: right;
    }

    .center {
      height: 100px;
    }
  }

  .layout-grid {
    display: grid;
    grid-template-columns: 100px auto 100px;
    grid-template-rows: 100px;
  }

  .linear-gradient {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: linear-gradient(to right, #000 0%, red 50%, yellow 100%);
  }

  .grid {
    margin: 20px 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    .grid-item {
      img {
        display: block;
      }
    }
  }
</style>