<template>
  <div class="form-item">
    <label v-if="label" class="float-left label" :class="{ 'i-form-item-label-required': isRequired }">{{ label }}</label>
    <div class="float-left">
      <slot></slot>
      <div v-if="validateState === 'error'" class="i-form-item-message">{{ validateMessage }}</div>
    </div>
  </div>
</template>

<script>
  import AsyncValidator from 'async-validator'
  import emitter from "../../mixins/emitter";
  export default {
    name: "MyFormItem",
    mixins: [emitter],
    inject:['form'],
    props: {
      label: {
        type: String,
        default: ''
      },
      prop: {
        type: String
      }
    },
    data() {
      return {
        isRequired: false,
        validateState: '', // 校验状态
        validateMessage: '', // 校验不通过时的提示信息
      }
    },
    computed: {
      // 从form的model中动态得到当前表单组件的数据
      fieldValue() {
        return this.form.model[this.prop]
      }
    },
    mounted() {
      if (this.prop) {
        this.dispatch('MyForm', 'on-form-item-add', this);
        // 初始化时缓存原始值，
        this.initialValue = this.fieldValue;
        this.setRules();
      }
    },
    beforeDestroy() {
      this.dispatch('MyForm', 'on-form-item-remove', this)
    },
    methods: {
      // 从 Form 的 rules 属性中，获取当前 FormItem 的校验规则
      getRules() {
        let formRules = this.form.rules;
        formRules = formRules ? formRules[this.prop] : [];
        return [].concat(formRules)
      },
      setRules() {
        let rules = this.getRules();
        if (rules.length) {
          rules.every((rule) => {
            this.isRequired = rule.required;
          })
        }
        this.$on('on-form-blur', this.onFieldBlur);
        this.$on('on-form-change', this.onFieldChange);
      },
      // 只支持 blur 和 change，所以过滤出符合要求的 rule 规则
      getFilteredRule (trigger) {
        const rules = this.getRules();
        return rules.filter(rule => !rule.trigger || rule.trigger.indexOf(trigger) !== -1);
      },
      /**
       * 校验数据
       * @param trigger 校验类型
       * @param callback 回调函数
       */
      validate(trigger, callback = function () {}) {
        let rules = this.getFilteredRule(trigger);
        if (!rules || rules.length === 0) {
          return true;
        }
        // 校验输入数据
        this.validateState = 'validating';
        let descriptor = {};
        descriptor[this.prop] = rules;
        const validator = new AsyncValidator(descriptor);
        let model = {};
        model[this.prop] = this.fieldValue;
        validator.validate(model, { firstFields: true }, errors => {
          this.validateState = !errors ? 'success' : 'error';
          this.validateMessage = errors ? errors[0].message : '';

          callback(this.validateMessage);
        });
      },
      onFieldBlur() {
        this.validate('blur')
      },
      onFieldChange() {
        this.validate('change')
      },
      resetField() {
        this.validateState = '';
        this.validateMessage = '';
        this.form.model[this.prop] = this.initialValue;
      }
    },
  }
</script>

<style scoped>
  .form-item {
    overflow: hidden;
    display: inline-block;
  }
  .label {
    vertical-align: middle;
    display: flex;
    justify-content: center;

    margin-right: 20px;
  }
  .i-form-item-label-required:before {
    content: '*';
    color: red;
  }
  .i-form-item-message {
    color: red;
  }
</style>
