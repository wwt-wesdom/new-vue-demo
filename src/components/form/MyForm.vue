<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "MyForm",
    provide() {
      return {
        form: this
      }
    },
    data() {
      return {
        fields: [],
      }
    },
    props: {
      model: {
        type: Object
      },
      rules: {
        type: Object
      },
    },
    created() {
      this.$on('on-form-item-add', function (field) {
        if (field) this.fields.push(field)
      });
      this.$on('on-form-item-remove', function (field) {
        if (field) this.fields.splice(this.fields.indexOf(field), 1)
      })
    },
    methods: {
      resetFields() {
        this.fields.forEach(field => {
          field.resetField();
        })
      },
      validate(callback) {
        return new Promise((resolve, reject) => {
          let valid = true;
          let count = 0;
          this.fields.forEach(field => {
            field.validate('', errors => {
              if (errors) {
                valid = false;
              }
              if (++count === this.fields.length) {
                resolve(valid);
                if (typeof callback === 'function') {
                  callback(valid);
                }
              }
            })
          })
        })
      }
    }
  }
</script>

<style scoped>

</style>
