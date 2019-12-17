<template>
  <div class="pd-20">
    <template>
      <div v-for="(item, index) in cats" :key="index" class="mt-20 bc-green cl-fff text-left pd-20">
        <p>{{ item.name }}</p>
        <p>{{ item.age }}</p>
        <p>{{ item.breed }}</p>
      </div>
    </template>
    <custom-button :callback="getCats" text="getCats"></custom-button>
    <custom-button class="mt-20" :callback="postCats" text="addCats"></custom-button>
    <custom-button class="mt-20" :callback="deleteCats" text="delCats"></custom-button>
    <custom-button class="mt-20" :callback="updateCats" text="updateCats"></custom-button>
  </div>
</template>

<script>
  import api from '@/api/cats'
  export default {
    name: "Cat",
    data() {
      return {
        count: 0,
        cats: []
      }
    },
    created() {
      this.getCats();
    },
    methods: {
      async getCats() {
        const { result, success } = await api.getCats();
        if (success) {
          this.cats = result;
        }
      },
      async deleteCats() {
        await api.deleteCats();
        await this.getCats();
      },
      async postCats() {
        this.count ++;
        await api.postCats({
          name: 'xiaomiao' + this.count,
          age: 3,
          breed: 'bosimao'
        });
        await this.getCats();
      },
      async updateCats() {
        await api.updateCats();
        await this.getCats();
      },
    }
  }
</script>

<style scoped>

</style>
