<template xmlns="http://www.w3.org/1999/html">
  <div class="home pb-60">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img alt="轮播图" :src="image" width="100%" height="200"/>
      </van-swipe-item>
    </van-swipe>
    <section class="grid" @click="targetEle">
      <div v-for="item in gridList" class="pd-10 grid-item" :data-item="JSON.stringify(item)">
        <img src="~assets/img/common/dlrb.jpg" :data-item="JSON.stringify(item)" width="50" height="45" alt=""/>
        <p :data-item="JSON.stringify(item)">{{ item.text }}</p>
      </div>
    </section>
    <button @click="toImageFun">生成图片</button>
    <section>
      <img :src="dateUrl" alt="" width="50">
    </section>
    <canvas width="394" height="528" style="width: 197px; height: 264px;" ref="canvas"></canvas>
    <section class="poster position-relative">
      <div class="position-absolute date cl-fff">
        <p class="fs-48">5</p>
        <p class="mt-5 fs-16">2019.08</p>
        <p class="mt-5 fs-16">星期一</p>
      </div>
    </section>
    <div class="text-center">
      <span class="inline-block tao" ref="canvasDom">涛</span>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import {Swipe, SwipeItem} from 'vant';
  import html2canvas from 'html2canvas';
  import Canvas2image from 'canvas2image';

  export default {
    name: 'home',
    components: {
      vanSwipe: Swipe,
      vanSwipeItem: SwipeItem,
    },
    data() {
      return {
        images: [
          'https://img.yzcdn.cn/vant/apple-1.jpg',
          'https://img.yzcdn.cn/vant/apple-2.jpg'
        ],
        gridList: [],
        dateUrl: null,
      }
    },
    created() {
      this.setGridList(9);
      this.asyncFun().then(res => {
        console.log(res);
      })
    },
    computed: {},
    mounted() {
    },
    methods: {
      setGridList(len = 8) {
        for (let i = 0; i < len; i++) {
          this.gridList.push({
            index: i,
            text: '迪丽热巴',
            id: i
          })
        }
      },
      targetEle(e) {
        console.log(JSON.parse(e.target.getAttribute('data-item')));
      },
      toImageFun() {
        const dom = this.$refs.canvasDom;
        let width = dom.offsetWidth;
        let height = dom.offsetHeight;
        let canvas = this.$refs.canvas;
        let scale = 2;
        canvas.width = width * scale;
        canvas.height = height * scale;
        canvas.getContext("2d").scale(scale, scale);
        let opts = {
          backgroundColor: null,
          scale: scale,
          canvas: canvas,
          logging: true,
          width: width,
          height: height
        };
        html2canvas(dom, opts).then(canvas => {
          const context = canvas.getContext('2d');
          context.mozImageSmoothingEnabled = false;
          context.webkitImageSmoothingEnabled = false;
          context.msImageSmoothingEnabled = false;
          context.imageSmoothingEnabled = false;
          this.dateUrl = canvas.toDataURL("image/png");
          // let img = Canvas2image.convertToImage(canvas, canvas.width, canvas.height);
          // console.log(Canvas2image.convertToImage());
        })
      },
      asyncFun() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
          })
        })
      }
    }
  }

</script>
<style scoped lang="scss">
  .grid {
    position: absolute;
    width: 100%;
    left: 0;
    display: grid;
    grid-template-columns: 33.33% 33.33% 33.33%;
    text-align: center;
    overflow-x: scroll;
    background-color: #fff;

    .grid-item {
      border: 1px solid blue;
      margin-top: -1px;
      margin-left: -1px;
    }

    .grid-item:nth-of-type(3n+1) {
      margin-left: 0;
    }

    .grid-item:nth-of-type(-n+3) {
      margin-top: 0;
    }

    .grid-item:hover {
      border-color: red;
      z-index: 1;
    }

    /*.grid-item {
      border-left: 1px solid blue;
      border-top: 1px solid blue;
    }
    .grid-item:nth-of-type(3n) {
      border-right: 1px solid blue;
    }
    .grid-item:nth-last-of-type(-n+3) {
      border-bottom: 1px solid blue;
    }
    .grid-item:nth-last-child(1) {
      border-right: 1px solid blue;
    }
    .grid-item:hover {
      border-color: red;
      z-index: 1;
    }*/
  }

  .poster {
    margin: 10px;
    background-color: transparent;
    background-image: url("../assets/img/common/night.png");
    background-size: 100%;
  }

  .poster:before {
    content: "";
    display: block;
    padding-top: 134.05%;
  }

  .date {
    text-align: right;
    right: 20px;
    top: 30px;
  }
  .tao {
    width: 50px;
    height: 50px;
    background-color: #000;
    color: #fff;
    font-family: "楷体";
    font-size: 22px;
    line-height: 40px;
    border-radius: 25px;
    font-weight: bold;
    border: 5px solid yellow;
    box-sizing: border-box;
    box-shadow: 0 0 10px #f00;
  }
</style>
