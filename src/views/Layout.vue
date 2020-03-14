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
  </div>
</template>

<script>
    export default {
        name: "Layout"
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
</style>