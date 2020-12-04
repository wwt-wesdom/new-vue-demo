<template>
  <div class="pd-20">
    <div  @click="point">锚点</div>
    <div class="mb-20">
      <c-button @on-click="back" class="mr-20" :disabled="list1.length === 0">后退</c-button>
      <c-button @on-click="go" :disabled="reviewList.length === 0">前进</c-button>
    </div>
    <div class="drag">
      <div class="left">
        <div class="drag-item"
             draggable="true"
             v-for="item in list"
             :key="item"
             :data-item="item"
             @dragstart="dragstart">
          {{item}}
        </div>
      </div>
      <div class="center"
           @click="moduleClick"
           @dragenter.prevent
           @dragover.prevent
           @drop="drop">
        <div class="drag-item"
             :class="[activeId === item ? 'active' : '']"
             v-for="(item, index) in list1"
             :data-index="index"
             @click.stop="itemClick(item)"
             @dragenter.preven="itemEnter"
             @dragover.prevent=""
             @drop.prevent.stop="itemDrop">
          <div>
            {{item}}
          </div>
        </div>
      </div>

      <div class="right ml-20">
        <div v-if="activeId === 0">编辑页面总体信息</div>
        <div v-else>编辑块级信息</div>
      </div>
    </div>
    <c-button @on-click="getTime">倒计时</c-button>

    <div>
      {{time}}
    </div>
    <c-button class="mt-20" @on-click="changeNum">动态数字</c-button>
    <div>已有{{num}}人参与</div>
    <div>
      <p>sssssssssssssssssssss</p>
      <p>sssssssssssssssssssss</p>
      <p>sssssssssssssssssssss</p>
      <p>sssssssssssssssssssss</p>
      <p>sssssssssssssssssssss</p>
    </div>
    <div id="maodian1"></div>
    <input type="text" v-model="code">
    <button @click="handleCode">code</button>
    <rotate></rotate>
  </div>
</template>

<script>
  export default {
    name: "Drag",
    data() {
      return {
        awardIndex: 0,
        rotate: '',
        currentRotate: 0,
        list: [1, 2, 3, 4, 5, 6, 7, 8],
        list1: [],
        reviewList: [],
        time: '',
        timer: null,
        num: 0,
        timer2: null,
        firstDrag: true,
        itemIndex: null,
        activeId: 0,
        code: ''
      }
    },
    created() {
      let obj = {

      }
     /* setInterval(() => {
        this.countDown(0, 3)
      }, 1000)*/
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
        let a = (360 - this.awardIndex * 45 - 22.5) + 360;
        // 再次转动前先将转盘还原到360deg位置 然后再转动相应的角度
        this.currentRotate += (360 - this.currentRotate % 360) + a;
        this.rotate = `rotate(${this.currentRotate}deg)`
      },
      getRotate(index) {
        // 22.5 67.5
        let deg =  360 / this.list.length;
        return `translateX(-50%) rotate(${deg*(index) + 22.5}deg)`
      },
      point() {
        window.location.href = '#maodian1'
      },
      handleCode() {
        eval(this.code);
      },
      countDown(start, end){
        var nowtime = new Date();
        var endtime = new Date("2020/11/06 19:00:00");
        var lefttime = parseInt((endtime.getTime() - nowtime.getTime()) / 1000);


        var d,h,m,s = 0;

        if (start == end) {
          d = parseInt(lefttime / 86400)
          h = parseInt(lefttime / 3600);
          m = parseInt(lefttime / 60 );
          s = parseInt(lefttime);
        } else if (start == 0) {
          d = parseInt(lefttime / (24*60*60))
          h = parseInt(lefttime / (60 * 60) % 24);
          m = parseInt(lefttime / 60 % 60);
          s = parseInt(lefttime % 60);
        } else if (start == 1) {
          h = parseInt(lefttime / (60 * 60));
          m = parseInt(lefttime / 60 % 60);
          s = parseInt(lefttime % 60);
        } else if (start == 2) {
          m = parseInt(lefttime / 60);
          s = parseInt(lefttime % 60);
        }



       /* d = this.addZero(d)
        h = this.addZero(h);
        m = this.addZero(m);
        s = this.addZero(s);*/

        var value = [`${d}天`, `${h}时`, `${m}分`, `${s}秒`]
        var str = ''
        for (let index = start; index <= end; index++) {
          str += value[index]
        }

        console.log(str)

      },
      dragstart(e) {
        this.dragItem = e.target.getAttribute('data-item');
      },
      drop() {
        /*if (this.itemIndex === null) {
          this.list1.push(this.dragItem)
        }*/
        this.list1.push(this.dragItem)
      },
      moduleClick() {
        this.activeId = 0;
      },
      itemDrop(e) {
        let index = e.currentTarget.getAttribute('data-index');
        this.list1.splice(index, 0, this.dragItem)
      },
      itemClick(item) {
        this.activeId = item;
      },
      back() {
        let item = this.list1.splice(this.list1.length - 1, 1);
        this.reviewList = this.reviewList.concat(item);
      },
      go() {
        let item = this.reviewList.splice(this.reviewList.length - 1, 1);
        this.list1 = this.list1.concat(item);
      },
      getTime() {
        let now = new Date().getTime();
        let feature = new Date('2020-10-16 10:00:00').getTime();
        let time = Math.floor((feature - now)/1000);
        let day = Math.floor((time / (24*60*60)));
        let hour = Math.floor((time - day*(24*60*60))/(60*60));
        let min = Math.floor(((time - day*(24*60*60))%(60*60))/60);
        let s = ((time - day*(24*60*60))%(60*60))%60;
        this.time = `${day}天${hour}小时${min}分${s}秒`;
        if ((s === 0 && min === 0 && hour === 0 && day === 0) || day < 0) {
          this.time = `0天0小时0分0秒`;
          this.timer = null;
          return;
        }
        this.timer = setTimeout(() => {
          this.getTime();
        }, 1000);
      },
      changeNum() {
        let renderNum = Math.ceil(Math.random()*100);
        if (this.num >= 1000) {
          this.num = 1000;
          this.timer2 = null;
          return;
        }
        this.timer2 = setTimeout(() => {
          this.num += renderNum;
          this.changeNum();
        }, 1000)
      },
    },
    watch: {

    }
  }
</script>

<style scoped lang="scss">
  .drag {
    display: flex;
    .left {
      width: 300px;
    }
    .center {
      width: 600px;
      height: 600px;
      overflow: auto;
      border: 1px solid red;
    }
    .right {
      width: 500px;
      height: 600px;
      overflow: auto;
      border: 1px solid red;
    }
  }
  .drag-item {
    cursor: move;
    display: inline-block;
    width: 100px;
    height: 50px;
    background-color: #ccc;
    margin-right: 10px;
    line-height: 50px;
    margin-top: 10px;
    text-align: center;
    color: blue;
    font-size: 20px;
  }
  .center {
    .drag-item {
      display: block;
      cursor: default;
      width: 100%;
      margin-top: 0;
      margin-right: 0;
      border-bottom: 1px solid #09bb07;
      color: blue;
      font-size: 20px;
    }
  }
  .active.drag-item {
    border: 1px dashed blue;
  }
</style>
