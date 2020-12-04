<template>
  <div>
    <div>
      <input style="height: 40px;width: 200px;border: 1px solid #ddd; padding-left: 10px;" v-model.number="awardIndex" type="text">
    </div>
    <div class="position-relative">
      <div class="position-relative rotate-box" :style="{transform: rotate}">
        <img class="block" width="100%" src="~assets/img/common/icon-rotate.png" alt="">
        <div v-for="(item, index) in list" :style="{transform: getRotate(index)}" class="rotate-item">{{item}}</div>
      </div>
      <img class="icon-launch block" @click="rotateBox" src="~assets/img/common/icon_launch.png" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: "Rotate",
    data() {
      return {
        awardIndex: 1,
        rotate: '',
        currentRotate: 0,
        list: [1, 2, 3, 4, 5, 6, 7, 8],
      }
    },
    methods: {
      rotateBox() {
        let obj = {
          0: 337.5, // 360 - 22.5
          1: 292.5, // 360 - 45 - 22.5
          2: 247.5, // 360 - 45*2 - 22.5
          3: 202.5, // 360 - 45*3 - 22.5
          4: 157.5, // 360 - 45*4 - 22.5
          5: 112.5, // 360 - 45*5 - 22.5
          6: 67.5,  // 360 - 45*6 - 22.5
          7: 22.5,  // 360 - 45*7 - 22.5
        };
        // 计算每次转动需要转动的角度
        let deg = (360 - (this.awardIndex - 1) * 45 - 22.5) + 360;
        // 再次转动前先将转盘还原到360deg位置 然后再转动相应的角度
        this.currentRotate += (360 - this.currentRotate % 360) + deg;
        this.rotate = `rotate(${this.currentRotate}deg)`
      },
      getRotate(index) {
        // 22.5 67.5
        let deg =  360 / this.list.length;
        return `translateX(-50%) rotate(${deg*(index) + 22.5}deg)`
      },
    }
  }
</script>

<style scoped>
  .icon-launch {
    position: absolute;
    top: 36%;
    left: 50%;
    width: 100px;
    transform: translateX(-50%);
  }
  .rotate-box {
    transition: all ease 2s;
  }
  .rotate-item {
    width: 150px;
    height: 360px;
    text-align: center;
    line-height: 300px;
    position: absolute;
    top: 0;
    left: 50%;
    transform-origin: center bottom;
  }
</style>
