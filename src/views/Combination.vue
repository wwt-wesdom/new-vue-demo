<template>
  <div>
    <button @click="getObj">clone</button>
  </div>
</template>

<script>
  export default {
    name: "Combination",
    methods: {
      // 对循环引用进行处理，防止循环递归内存溢出报错
      clone(target, map = new Map()) {
        if (typeof target === 'object') {
          let cloneTarget = Array.isArray(target) ? [] : {};
          if (map.get(target)) {
            return map.get(target);
          }
          map.set(target, cloneTarget);
          for (const key in target) {
            cloneTarget[key] = this.clone(target[key], map);
          }
          return cloneTarget;
        } else {
          return target;
        }
      },
      getObj() {
        const target = {
          field1: 1,
          field2: undefined,
          field3: {
            child: 'child'
          },
          field4: [2, 4, 8]
        };
        target.target =  target;
        console.time();
        let one = this.clone(target);
        console.timeEnd();
        console.log(one);
      }
    }
  }
</script>

<style scoped>

</style>
