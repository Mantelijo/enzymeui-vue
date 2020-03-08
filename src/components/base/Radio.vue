<template>
    <div :class="['radio', {'disabled':disabled}]">
        <input :id="id" v-model="checked" :checked="checked" type="radio" :aria-checked="checked" :disabled="disabled"/>
        <label class="radio-label" :for="id">
            <span  class="radio-label-text">
                <slot>{{label}}</slot>
            </span>
        </label>
    </div>
</template>

<script>
    export default {
        name: "Radio",

        props:{
            label:{
                type:String,
                default:'',
                description:'Label for radio',
            },
            checked:{
                type:Boolean,
                default:false,
                description:'Is radio checked'
            },
            disabled:{
                type:Boolean,
                default:false,
                description:'If set to true - radio will be disabled'
            }
        },

        data(){
            return{
                id:'',
            }
        },

        mounted(){

            // Generate random id
            this.id = (new Date().getTime()).toString() + (Math.random() * 100).toString();

        }
    }
</script>

<style scoped>

</style>