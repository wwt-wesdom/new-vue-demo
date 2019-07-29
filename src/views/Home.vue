<template xmlns="http://www.w3.org/1999/html">
  <div class="home">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img alt="轮播图" :src="image" width="100%" height="200"/>
      </van-swipe-item>
    </van-swipe>
    <section class="grid mt-10" @click="targetEle">
      <div v-for="item in gridList" class="pd-10 grid-item" :data-item="JSON.stringify(item)">
        <img src="~assets/img/common/dlrb.jpg" :data-item="JSON.stringify(item)" width="50" height="45" alt="" />
        <p :data-item="JSON.stringify(item)">{{  item.text }}</p>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import { Swipe, SwipeItem } from 'vant';

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
    }
  },
  created() {
    this.setGridList(9);
  },
  computed: {

  },
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
    }
  }
}

</script>
<style scoped lang="scss">
  .grid {
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
</style>
