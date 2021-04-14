<template>
  <div>
    <div class="average-layout">
      <div class="one"></div>
      <div class="two"></div>
      <div class="three"></div>
      <div class="four"></div>
    </div>
    <div class="center-layout">
      <div></div>
    </div>
    <div class="clamp-layout"></div>
    <ul class="figure-box" style="--count: 12">
      <li class="star" style="--index: 0"></li>
      <li class="ellipse" style="--index: 1"></li>
      <li class="circle" style="--index: 2"></li>
      <li class="triangle" style="--index: 3"></li>
      <li class="rhombus" style="--index: 4"></li>
      <li class="trapezoid" style="--index: 5"></li>
      <li class="parallelogram" style="--index: 6"></li>
      <li class="pentagon" style="--index: 7"></li>
      <li class="left-arrow" style="--index: 8"></li>
      <li class="right-arrow" style="--index: 9"></li>
      <li class="close" style="--index: 10"></li>
      <li class="message" style="--index: 11"></li>
    </ul>
    <ul class="strip-loading">
      <li v-for="v in 6" :key="v"></li>
    </ul>
    <div class="heart-loading">
      <ul style="--line-count: 9">
        <li v-for="v in 9" :key="v" :class="`line-${v}`" :style="`--line-index: ${v}`"></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CssLearn"
  }
</script>

<style scoped lang="scss">
  .one {
    background-color: #f66;
  }
  .two {
    background-color: #66f;
  }
  .three {
    background-color: #f90;
  }
  .four {
    background-color: #09f;
  }
  .average-layout {
    column-count: 4;
    column-gap: 0;
    /*width: 400px;*/
    height: 400px;

    div {
      height: 100%;
    }
  }
  .center-layout {
    width: 400px;
    height: 400px;
    background-color: #f66;
    /*display: flex;*/
    div {
      width: 100px;
      height: 100px;
      background-color: #66f;
      /*margin: auto;*/
    }
  }

  .center-layout {
    line-height: 400px;
    text-align: center;
    font-size: 0;
    div {
      display: inline-block;
      vertical-align: middle;
    }
  }
  .clamp-layout {
    background-color: yellowgreen;
    height: 100px;
    /*width: clamp(100px, 100%, 200px);*/
  }
  .figure-box {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 720px;
    li {
      /*--Θ: calc(var(--index) / var(--count) * 1turn);*/
      margin: 10px;
      width: 100px;
      height: 100px;
      background-color: #3c9;
      filter: hue-rotate(var(--Θ));
    }
  }
  .star {
    clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
  }
  .ellipse {
    clip-path: ellipse(40% 50% at 50% 50%);
  }
  .circle {
    clip-path: circle(50% at 50% 50%);
  }
  .triangle {
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  }
  .rhombus {
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  }
  .trapezoid {
    clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%);
  }
  .parallelogram {
    clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
  }
  .pentagon {
    clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
  }
  .left-arrow {
    clip-path: polygon(40% 0%, 40% 20%, 100% 20%, 100% 80%, 40% 80%, 40% 100%, 0% 50%);
  }
  .right-arrow {
    clip-path: polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%);
  }
  .close {
    clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);
  }
  .message {
    clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%);
  }
  .strip-loading {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 200px;
    li {
      border-radius: 3px;
      width: 6px;
      height: 30px;
      background-color: #f66;
      animation: beat 1s ease-in-out infinite;
      & + li {
        margin-left: 5px;
      }
      &:nth-child(2) {
        animation-delay: 200ms;
      }
      &:nth-child(3) {
        animation-delay: 400ms;
      }
      &:nth-child(4) {
        animation-delay: 600ms;
      }
      &:nth-child(5) {
        animation-delay: 800ms;
      }
      &:nth-child(6) {
        animation-delay: 1s;
      }
    }
  }
  @keyframes beat {
    0%,
    100% {
      transform: scaleY(1);
    }
    50% {
      transform: scaleY(.5);
    }
  }

  :root {
    --index: calc(var(--line-index) / var(--line-count) * .5turn);
    --time: calc((var(--line-index) - 1) * 40ms);
  }
  .heart-loading {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 200px;
    ul {
      display: flex;
      justify-content: space-between;
      width: 150px;
      height: 10px;
    }
    li {

      border-radius: 5px;
      width: 10px;
      height: 10px;
      background-color: #3c9;
      filter: hue-rotate(var(--index));
      animation-duration: 1s;
      animation-delay: var(--time);
      animation-iteration-count: infinite;
      &.line-1,
      &.line-9 {
        animation-name: beat-1;
      }
      &.line-2,
      &.line-8 {
        animation-name: beat-2;
      }
      &.line-3,
      &.line-7 {
        animation-name: beat-3;
      }
      &.line-4,
      &.line-6 {
        animation-name: beat-4;
      }
      &.line-5 {
        animation-name: beat-5;
      }
    }
  }
  @keyframes beat-1 {
    0%,
    10%,
    90%,
    100% {
      height: 10px;
    }
    45%,
    55% {
      height: 30px;
      transform: translate3d(0, -15px, 0);
    }
  }
  @keyframes beat-2 {
    0%,
    10%,
    90%,
    100% {
      height: 10px;
    }
    45%,
    55% {
      height: 60px;
      transform: translate3d(0, -30px, 0);
    }
  }
  @keyframes beat-3 {
    0%,
    10%,
    90%,
    100% {
      height: 10px;
    }
    45%,
    55% {
      height: 80px;
      transform: translate3d(0, -40px, 0);
    }
  }
  @keyframes beat-4 {
    0%,
    10%,
    90%,
    100% {
      height: 10px;
    }
    45%,
    55% {
      height: 90px;
      transform: translate3d(0, -30px, 0);
    }
  }
  @keyframes beat-5 {
    0%,
    10%,
    90%,
    100% {
      height: 10px;
    }
    45%,
    55% {
      height: 90px;
      transform: translate3d(0, -20px, 0);
    }
  }
</style>

