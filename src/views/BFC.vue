<template>
  <div>
    使用Object.defineProperty劫持数据
    <CustomButton text="Combination" size="large" :callback="callback"/>
    <div>
      <p v-for="item in allKeysList">
        {{item}}
      </p>
    </div>
    <CustomButton text="微信登录" size="large" :callback="wechatLogin"/>
  </div>
</template>

<script>
  import CustomButton from '@/components/CustomButton.vue';
  export default {
    name: "BlockFormattingContext",
    components: {
      CustomButton
    },
    data() {
      return {
        keysOne: [
          // "连衣裙",
          // "衬衫",
          // "短裤"
          ""
        ],
        keysTwo: [
          // "修身",
          // "可爱",
          // "好看"
          ""
        ],
        keysThree: [
          // "包邮",
          // "促销",
          // "热销",
          // "打折"
          ""
        ],
        allKeysList: []
      }
    },
    created() {
      this.userDefineProperty();
      this.getKeysList();
      this.test();
    },
    methods: {
      callback() {
        this.$router.push({path: "/Combination"})
      },
      test() {
        const
            add = () => {
              let cache = {};
              console.log(cache);
              return num => {
                if (num in cache) {
                  return `From cache! ${cache[num]}`;
                } else {
                  const result = num + 10;
                  cache[num] = result;
                  return `Calculated! ${result}`;
                }
              };
            };

        const addFunction = add();

        console.log(addFunction(10));
        console.log(addFunction(10));
        console.log(addFunction(20));
      },
      getKeysList() {
        for (let i = 0; i < this.keysOne.length; i++) {
          for (let j = 0; j < this.keysTwo.length; j++) {
            for (let k = 0; k < this.keysThree.length; k++) {
              let keyList = [];
              let strOne = `${this.keysOne[i]}${this.keysTwo[j]}${this.keysThree[k]}`;
              let strTwo = `${this.keysOne[i]}${this.keysThree[k]}${this.keysTwo[j]}`;
              let strThree = `${this.keysTwo[j]}${this.keysOne[i]}${this.keysThree[k]}`;
              let strFour = `${this.keysTwo[j]}${this.keysThree[k]}${this.keysOne[i]}`;
              let strFive = `${this.keysThree[k]}${this.keysTwo[j]}${this.keysOne[i]}`;
              let strSix = `${this.keysThree[k]}${this.keysOne[i]}${this.keysTwo[j]}`;
              keyList = [strOne, strTwo, strThree, strFour, strFive, strSix];
              this.allKeysList = this.allKeysList.concat(keyList);
            }
          }
        }
        this.allKeysList = [...new Set(this.allKeysList)];
      },
      userDefineProperty() {
        let val = "one";
        let obj = {};
        Object.defineProperty(obj, "one", {
          get() {
            console.log("one属性被读取了");
            return val;
          },
          set(v) {
            val = v;
            console.log("one属性被修改了");
          }
        });
        // console.log(obj.one);
        // obj.one = "change:one";
        // console.log(obj.one);
        let newObj = this.observable({
          name: "xiaoming",
          age: "12",
          des: "熊孩子"
        });
        console.log(newObj.name);
        newObj.name = "xiaohong";
        console.log(newObj.name);
        console.log(newObj.age);
        console.log(newObj.des);
      },
      observable(obj) {
        if (!obj || typeof obj !== "object") {
          return;
        }
        let keys = Object.keys(obj);
        keys.forEach(key => {
          this.defineReactive(obj, key, obj[key]);
        });
        return obj;
      },
      defineReactive(obj, key, val) {
        Object.defineProperty(obj, key, {
          get() {
            console.log(`${key}属性被读取了`);
            return val;
          },
          set(v) {
            console.log(`${key}属性被修改了`);
            val = v;
          }
        })
      },
      wechatLogin() {
        var path = 'http://www.xxxx.com';//登录后回调的地址
        let appid = '1123456';//注册申请的appid
        window.open('https://open.weixin.qq.com/connect/qrconnect?appid='+appid+'&redirect_uri=path&response_type=code&scope=snsapi_login&state=STATE#wechat_redirect');
      }
    }
  }
</script>


<style scoped>

</style>