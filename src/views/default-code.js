const code =
`<template>
    <div>
        <input class="input" v-model="message">
        {{ message }}
    </div>
</template>
<script>
    export default {
        data () {
            return {
                message: ''
            }
        }
    }
</script>
<style>
  .input {
    width: 200px;
    height: 50px;
    border: 1px solid #f9284f;
  }
</style>`;

export default code;
