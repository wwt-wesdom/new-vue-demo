<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div class="about">
    <h1>This is an about page</h1>
    <custom-input v-model="searchText"></custom-input>
    <button @click="changePopup"> toggle </button>
    <custom-popup v-model="value"></custom-popup>
    <custom-slot>
      <template v-slot:title>
        <span>error</span>
      </template>
      <template #content>
        <p>something bad happened</p>
      </template>
      <template #firstName="slotProps">
        <div>{{slotProps.user.firstName}}</div>
      </template>
      <template v-slot:lastName="{user}">
        <div>{{user.firstName}}</div>
      </template>
    </custom-slot>
  </div>
</template>
<script>

  import CustomInput from '@/components/CustomInput'
  import CustomPopup from '@/components/CustomPopup'
  import CustomSlot from '@/components/CustomSlot'
  export default {
    components: {
      CustomInput,
      CustomPopup,
      CustomSlot
    },
    data() {
      return {
        searchText: '',
        value: false,
      }
    },
    methods: {
      changePopup() {
        this.value = !this.value;
      }
    }
  }
</script>
