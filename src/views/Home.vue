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
    <section class="img-grid">
      <div class="img-item"></div>
      <div class="img-item"></div>
      <div class="img-item"></div>
      <div class="img-item"></div>
    </section>
    <div id="anim"></div>
    <button @click="toImageFun">生成图片</button>
    <div @click="excelFun">导出excel</div>
    <input type="checkbox" id="checkBox">
    <label for="checkBox">label</label>
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
    <input class="display-none" type="file" @change="uploadImg" id="uploadImg" name="image" accept="image/*">
    <label class="uploader-btn" for="uploadImg">上传图片</label>
    <img width="100%" :src="imageSrc" alt="" @click="downloadImage()">
    <!--<img width="100%" src="~assets/img/common/dlrb.jpg" alt="">-->
    <!--<img width="100%" :src=" dlrbImg" alt="">-->
    <test-data></test-data>
    <!--<div>{{ this.globalData }}</div>-->
    <div @click="changeObjFun">{{objData.a}}</div>
    <div>{{objData.b}}</div>
    <div @click="testPromise" class="bc-green cl-fff pd-15">promise</div>
    <!--css动画-->
    <div>
      <div class="animation-box">
        <ul class="animation" ref="aniList">
          <li v-for="item in cssTextList" :key="item">{{item}}</li>
        </ul>
      </div>
    </div>
    <clock></clock>
    <rotate></rotate>
    <router-link to="/text-page">textPage</router-link>
  </div>
</template>

<script>
  // @ is an alias to /src
  import {Swipe, SwipeItem} from 'vant';
  import html2canvas from 'html2canvas';
  import _csv from '@/csv/csv';
  import _exportCsv from '@/csv/export-csv';
  import {timeToDate, downloadImage} from "@/config/utils"

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
        imageSrc: null,
        dlrbImg: "images/dlrb.jpg",
        excelJson: [
          {
            "提交订单号时间": "one",
            "订单号": "64546465",
            "旺旺号": "ssdfjasld"
          },
          {
            "提交订单号时间": "one",
            "订单号": "64546465",
            "旺旺号": "ssdfjasld"
          },
          {
            "提交订单号时间": "one",
            "订单号": "64546465",
            "旺旺号": "ssdfjasld"
          }
        ],
        objData: {
          a: 'one'
        },
        cssTextList: [],
      }
    },
    beforeCreate() {
      this.baseUrl = process.env;
      console.log(this.baseUrl);
    },
    created() {
      const that = this;
      console.log(this.$parent.showTabbar);
      console.log(this.$children);
      this.setGridList(9);
      this.asyncFun().then(res => {
        // console.log(res);
      });
      let i = 14;
      setInterval(()=>{
        i++;
        // that.cssTextListPush(i);
      },1000)
    },
    computed: {
      getNumber() {
        return 100;
      }
    },
    mounted() {
      window.onscroll = () => {
      }
    },
    methods: {
      downloadImage(img) {
        downloadImage(img, 'name');
      },
      changeObjFun() {
        // 对象添加新属性
        // this.objData.b = 'two'; // 视图不会刷新
        // this.objData = Object.assign({}, this.objData, {b: 'two'}); // 视图刷新 （创建新对象｛｝）
        // this.$set(this.objData, 'b', 'two'); // 使用$set视图刷新
        const objDataTwo = Object.assign({}, this.objData, {b: 'two'}); // 直接源对象对象合并新对象，视图不会刷新
        console.log(this.objData === objDataTwo); // false
        console.log(this.objData);
      },
      async testPromise() {
        console.log(1);
        let val = await this.sleep(2000);
        console.log(val);
        console.log(3);
      },
      sleep(time) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            const time = Date.now();
            console.log(2, 2222222222);
            if (time % 2 === 0) {
              resolve(`成功回调${time}`);
            } else {
              reject(time, '失败回调');
            }

          }, time)
        })
      },
      async newSleep(time) {
        setTimeout(
          () => {
            console.log(2);
          }, time
        )
      },
      setGridList(len = 8) {
        for (let i = 0; i < len; i++) {
          this.gridList.push({
            index: i,
            text: '迪丽热巴',
            id: i
          });
          this.cssTextList.push(i)
        }
      },
      cssTextListPush(i) {
        this.cssTextList.push(i)
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
        })
      },
      asyncFun() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
          })
        })
      },
      uploadImg(e) {
        const that = this;
        const imgFile = {};
        const file = e.target.files[0];
        if (!file) return;
        imgFile.type = file.type || "image/jpeg";
        imgFile.size = file.size;
        imgFile.name = file.name;
        imgFile.lastModifiedDate = file.lastModifiedDate;
        const reader = new FileReader();
        reader.onload = function (e) {
          const result = e.target.result;
          const image = new Image();
          image.onload = function () {
            let width = image.width;
            let height = image.height;
            console.log(width);
            console.log(height);
          };
          image.src = result;
          // compress(result,false)
          that.imageSrc = result;
        };
        reader.readAsDataURL(file);

        function compress(dataURL, shouldCompress = true) {
          const img = new Image();

          img.src = dataURL;

          img.onload = function () {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');

            canvas.width = img.width;
            canvas.height = img.height;

            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

            let compressedDataUrl;

            if (shouldCompress) {
              compressedDataUrl = canvas.toDataURL(imgFile.type, 0.2);
            } else {
              compressedDataUrl = canvas.toDataURL(imgFile.type, 1);
            }
            that.imageSrc = compressedDataUrl;
            // callback(compressedDataUrl);
          }
        }

        function processData(dataURL) {
          // 这里使用二进制方式处理dataUrl
          const binaryString = window.atob(dataUrl.split(',')[1]);
          const arrayBuffer = new ArrayBuffer(binaryString.length);
          const intArray = new Uint8Array(arrayBuffer);
          const imgFile = this.imgFile;

          for (let i = 0, j = binaryString.length; i < j; i++) {
            intArray[i] = binaryString.charCodeAt(i);
          }

          const data = [intArray];

          let blob;

          try {
            blob = new Blob(data, {type: imgFile.type});
          } catch (error) {
            window.BlobBuilder = window.BlobBuilder ||
              window.WebKitBlobBuilder ||
              window.MozBlobBuilder ||
              window.MSBlobBuilder;
            if (error.name === 'TypeError' && window.BlobBuilder) {
              const builder = new BlobBuilder();
              builder.append(arrayBuffer);
              blob = builder.getBlob(imgFile.type);
            } else {
              // Toast.error("版本过低，不支持上传图片", 2000, undefined, false);
              throw new Error('版本过低，不支持上传图片');
            }
          }

          // blob 转file
          const fileOfBlob = new File([blob], imgFile.name);
          const formData = new FormData();

          // type
          formData.append('type', imgFile.type);
          // size
          formData.append('size', fileOfBlob.size);
          // name
          formData.append('name', imgFile.name);
          // lastModifiedDate
          formData.append('lastModifiedDate', imgFile.lastModifiedDate);
          // append 文件
          formData.append('file', fileOfBlob);
        }
      },
      excelFun() {
        const downloadData = _csv([{key: '提交订单号时间'}, {key: '订单号'}, {key: '旺旺号'}], this.excelJson);
        _exportCsv.download(`${timeToDate()}.csv`, downloadData, () => {
          console.log('批量导出订单成功！');
        })
      }
    }
  }

</script>
<style scoped lang="scss">
  .animation-box {
    height: 300px;
    position: relative;
    overflow: hidden;
    background-color: yellowgreen;
  }
  .animation {
    height: 900px;
    width: 100%;
    position: absolute;
    animation: carousel linear 5s infinite 0s normal;
    background-color: red;
  }
  .animation li {
    color: #fff;
    height: 60px;
    line-height: 60px;
    text-align: left;
    display: block;
    width: 100%;
  }

  @keyframes carousel {
    0% {
      top: 0;
    }
    20% {
      top: -60px;
    }
    40% {
      top: -120px;
    }
    60% {
      top: -180px;
    }
    80% {
      top: -240px;
    }
    100% {
      top: -300px;
    }
  }
  #anim {
    width: 200px;
    height: 400px;
    background-color: pink;
  }

  #anim:hover {
    animation: go 2s ease 0s 1; /*声明动画*/
    animation-fill-mode: forwards
  }

  /*定义动画*/
  @keyframes go {
    from { /*0%*/
      width: 200px;
    }
    to { /*100%*/
      width: 400px;
    }
  }

  @keyframes back {
    from { /*0%*/
      width: 100px;
    }
    to { /*100%*/
      width: 66px;
    }
  }

  .img-item {
    background-image: url("../assets/img/common/dlrb.jpg");
    background-size: 100% 100%;
    background-position: center 0;
    background-repeat: no-repeat;
    width: 100px; /*no*/
    height: 200px;
    display: inline-block;
  }

  .img-item:hover {
    animation: open 1s ease;
    animation-fill-mode: forwards
  }

  .img-item:hover ~ * {
    animation: back 1s ease;
    animation-fill-mode: forwards
  }

  @keyframes open {
    from {
      width: 100px;
    }
    to {
      width: 200px;
    }
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    /*grid-template-rows: repeat(3, 33.33%);*/
    /*text-align: center;*/
    overflow-x: scroll;
    /*background-color: #fff;*/

    .grid-item {
      border: 1px solid blue; /*no*/
      margin-top: -1px; /*no*/
      margin-left: -1px; /*no*/
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

  .uploader-btn {
    display: inline-block;
    width: 100px;
    height: 38px;
    border-radius: 4px;
    background-color: red;
    color: #fff;
    margin: 10px 0;
    line-height: 38px;

  }
</style>
