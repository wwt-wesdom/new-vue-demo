<template>
  <label>
    <select :selected="selected" @change="change($event.target.value)">
      <template v-for="(item) in selectArr">
        <option :value="item">
          {{item}}
        </option>
      </template>
    </select>
  </label>
</template>

<script>
  export default {
    name: "MySelect",
    model: {
      prop: 'selected',
      event: 'change'
    },
    props: {
      selectArr: {
        type: Array,
        default() {
          return [1,2,3];
        }
      },
      selected: {
        type: [String, Number]
      }
    },
    methods: {
      change(value) {
        this.$emit('change', value);
      }
    }
  }
</script>

<style scoped>

</style>
