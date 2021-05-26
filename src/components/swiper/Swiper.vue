<template>
  <div class="my-swiper">
    <div class="swiper" @touchstart="touchstart" @touchmove="touchmove" @touchend="touchend">
      <slot></slot>
    </div>
    <slot name="indicator">
    </slot>
    <div class="indicator" v-if="showIndicator && slideCount > 1">
      <slot name="indicator">
        <div v-for="(item, index) in slideCount" class="indi-item" :class="{active: index === currentIndex-1}" :key="index"></div>
      </slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Swiper",
    data() {
      return {
        slideCount: 0, // 元素个数
        totalWidth: 0, // swiper的宽度
        currentIndex: 1, // 当前的index
        swiperStyle: {},
        scrolling: false,
      }
    },
    props: {
      // 轮播速度（轮播间隔的时间）
      interval: {
        type: Number,
        default: 3000
      },
      // 轮播过渡效果的速度
      animDuration: {
        type: Number,
        default: 300
      },
      // 手势滑动轮播距离比例
      moveRatio: {
        type: Number,
        default: 0.25
      },
      // 显示指示器
      showIndicator: {
        type: Boolean,
        default: true
      }
    },
    mounted() {
      // 1.操作DOM, 在前后添加Slide
      setTimeout(() => {
        this.handleDom();
        // 2.开启定时器
        this.startTimer();
      }, 100)
    },
    methods: {

      /**
       * 定时器操作
       */
      startTimer() {
        this.playTimer = window.setInterval(() => {
          this.currentIndex++;
          this.scrollContent(-this.currentIndex * this.totalWidth);
        }, this.interval)
      },

      stopTimer() {
        window.clearInterval(this.playTimer);
      },


      /**
       * 滚动到正确的位置
       */
      scrollContent(currentPosition) {
        // 0.设置正在滚动
        this.scrolling = true;
        // 1.开始滚动动画
        this.swiperStyle.transition ='transform '+ this.animDuration + 'ms';
        this.setTransform(currentPosition);
        // 2.判断滚动到的位置
        this.checkPosition();
        // 4.滚动完成
        this.scrolling = false
      },

      /**
       * 校验正确的位置
       */
      checkPosition: function () {
        window.setTimeout(() => {
          // 1.校验正确的位置
          this.swiperStyle.transition = '0ms';
          if (this.currentIndex >= this.slideCount + 1) {
            this.currentIndex = 1;
            this.setTransform(-this.currentIndex * this.totalWidth);
          } else if (this.currentIndex <= 0) {
            this.currentIndex = this.slideCount;
            this.setTransform(-this.currentIndex * this.totalWidth);
          }
          // 2.结束移动后的回调
          this.$emit('transitionEnd', this.currentIndex-1);
        }, this.animDuration)
      },

      /**
       * 设置滚动的位置
       */
      setTransform: function (position) {
        this.swiperStyle.transform = `translate3d(${position}px, 0, 0)`;
        this.swiperStyle['-webkit-transform'] = `translate3d(${position}px), 0, 0`;
        this.swiperStyle['-ms-transform'] = `translate3d(${position}px), 0, 0`;
      },

      handleDom() {
        // 1.获取要操作的元素
        let swiperEl = document.querySelector('.swiper');
        let slidesEls = swiperEl.getElementsByClassName('slide');

        // 2.指示器个数
        this.slideCount = slidesEls.length;

        // 3.如果大于1个, 那么在前后分别添加一个slide
        if (this.slideCount > 1) {
          let cloneFirst = slidesEls[0].cloneNode(true);
          let cloneLast = slidesEls[this.slideCount - 1].cloneNode(true);
          swiperEl.insertBefore(cloneLast, slidesEls[0]);
          swiperEl.appendChild(cloneFirst);
          this.totalWidth = swiperEl.offsetWidth;
          this.swiperStyle = swiperEl.style;
        }
        // 4.让swiper元素, 显示第一个(目前是显示前面添加的最后一个元素)
        this.setTransform(-this.totalWidth);
      },
      touchstart(e) {
        if (this.scrolling) return;
        // 停止定时器
        this.stopTimer();
        // 记录初始位置
        this.startX = e.touches[0].pageX
      },
      touchmove(e) {
        let currentX  = e.touches[0].pageX;
        this.distance = currentX - this.startX;
        let currentPosition = -this.currentIndex * this.totalWidth;
        let moveDistance = this.distance + currentPosition;

        // 2.设置当前的位置
        this.setTransform(moveDistance);
      },
      touchend() {
        let currentMove = Math.abs(this.distance);
        if (this.distance === 0) {
          return;
        } else if (this.distance > 0 && currentMove > this.totalWidth * this.moveRatio) {
          this.currentIndex --;
        } else if (this.distance < 0 && currentMove > this.totalWidth * this.moveRatio) {
          this.currentIndex ++;
        }
        // 3.移动到正确的位置
        this.scrollContent(-this.currentIndex * this.totalWidth);
        // 4.移动完成后重新开启定时器
        this.startTimer();
      }
    }
  }
</script>

<style scoped>
  .my-swiper {
    overflow: hidden;
    position: relative;
  }
  .swiper {
    display: flex;
  }
  .indicator {
    display: flex;
    justify-content: center;
    position: absolute;
    width: 100%;
    bottom: 8px;
  }
  .indi-item {
    box-sizing: border-box;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    background-color: blue;
    line-height: 8px;
    text-align: center;
    font-size: 12px;
    margin: 0 5px;
  }
  .indi-item.active {
    /*background-color: rgba(212,62,46,1.0);*/
    background-color: yellowgreen;
  }
</style>
