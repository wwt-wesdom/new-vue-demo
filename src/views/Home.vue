<template xmlns="http://www.w3.org/1999/html">
  <div class="home">
    <div>count:{{count}}</div>
    <div>time:{{time}}</div>
    <div>{{doneToDos(false)}}</div>
    <button @click="changeState">state</button>
    <div></div>
    <label>
      <input type="text" v-model="text" />
    </label>
    <RefUsr ref="childComponent" :text="text"></RefUsr>
    <div>
      <router-link to="/toggle-switch">ToggleSwitch</router-link>
      <router-link to="/container">Container</router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import RefUsr from '@/components/RefUser.vue'
import { mapState, mapGetters } from  'vuex';

export default {
  name: 'home',
  components: {
    HelloWorld,
    RefUsr
  },
  data() {
    return {
      text: "august"
    }
  },
  created() {

  },
  computed: {
    ...mapState({
      count: state => state.count,
      time: state => state.time
    }),
    /*doneToDos() {
      return this.$store.getters.doneToDos(false);
    },*/
    ...mapGetters([
      'doneToDos'
    ])
  },
  mounted() {
  },
  methods: {
    changeState() {
      // this.$refs.childComponent.value = null;
      console.log(this.$refs.childComponent.value);
      this.$refs.childComponent.getLocalData();
      this.$store.commit('increment')
    }
  }
}

</script>
