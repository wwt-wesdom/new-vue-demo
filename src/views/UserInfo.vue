<template>
  <div class="user-info">
    <button @click="changeState">state</button>
    <div></div>
    <label>
      <input type="text" v-model="text" />
    </label>
    <ref-user ref="childComponent" :text="text"></ref-user>
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
    <CustomButton text="loginOut" size="small" :callback="logOut"/>
  </div>
</template>

<script>
  // @ is an alias to /src
  import { mapActions } from  'vuex'
  import RefUser from "../components/RefUser";

  export default {
    name: 'userInfo',
    components: {
      RefUser
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
      ...mapActions([
        'handleLogOut'
      ]),
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
      },
      logOut() {
        this.handleLogOut(this.$router);
      }
    }
  }

</script>
