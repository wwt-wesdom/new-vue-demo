<template>
    <button  :class="size" class="button" :disabled="disabled" @click="handelClick">
        <slot>按钮</slot>
    </button>
</template>

<script>
    function oneOf(value, validList) {
        for (let i = 0; i < validList.length; i++) {
            if (value === validList[i]) {
                return true;
            }
        }
        return false;
    }
    export default {
        name: "CButton",
        data() {
            return {
                title: 'this is child component'
            }
        },
        props: {
            size: {
                validator(value) {
                    return oneOf(value, ['small', 'large', 'default'])
                },
                default: 'default'
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            handelClick(e) {
                this.$emit('on-click', e)
            },
            sayHi(val) {
                console.log(`hi ${val}`);
            }
        }
    }
</script>

<style scoped>
    .button {
        height: 80px;
        background-color: red;
        color: #fff;
        border-radius: 5px;
        font-size: 30px;
    }
    .small {
        width: 100px;
    }
    .large {
        width: 100%;
    }
    .default {
        width: 200px;
    }
</style>