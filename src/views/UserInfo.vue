<template>
  <div class="home">
    <!--<div>count:{{count}}</div>-->
    <!--<div>time:{{time}}</div>-->
    <!--<div>{{doneToDos(false)}}</div>-->
    <button @click="changeState">state</button>
    <div></div>
    <label>
      <input type="text" v-model="text" />
    </label>
    <RefUsr ref="childComponent" :text="text"></RefUsr>
    <div>
      <section>
        <router-link to="/toggle-switch">ToggleSwitch</router-link>
      </section>
      <section>
        <router-link to="/container">Container</router-link>
      </section>
      <section>
        <router-link to="/bfc">BFC</router-link>
      </section>
      <section>
        <router-link to="/about">about</router-link>
      </section>
    </div>
    <CustomButton text="login" size="small" to="/login"/>
  </div>
</template>

<script>
  // @ is an alias to /src
  import HelloWorld from '@/components/HelloWorld.vue';
  import RefUsr from '@/components/RefUser.vue';
  import CustomButton from '@/components/CustomButton.vue';
  import { mapState, mapGetters } from  'vuex'

  export default {
    name: 'userInfo',
    components: {
      HelloWorld,
      RefUsr,
      CustomButton,
    },
    data() {
      return {
        text: "august",
        loading: false,
      }
    },
    created() {

    },
    computed: {
      /*...mapState({
        count: state => state.count,
        time: state => state.time
      }),*/
      /*doneToDos() {
        return this.$store.getters.doneToDos(false);
      },*/
     /* ...mapGetters([
        'doneToDos'
      ])*/
    },
    mounted() {
    },
    methods: {
      changeState() {
        // this.$refs.childComponent.value = null;
        console.log(this.$refs.childComponent.value);
        this.$refs.childComponent.getLocalData();
        this.$store.commit('increment')
      },
      callback() {
        this.loading = true;
        console.log(this.loading);
        setTimeout(() => {
          this.loading = false;
        }, 2000)
      }
    }
  }

</script>
