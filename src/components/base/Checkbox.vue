<template>
    <div :class="['checkbox', {'disabled':disabled}]">
        <input :id="id" type="checkbox" v-model="checked" :aria-checked="checked" :disabled="disabled"/>
        <label class="checkbox-label" :for="id">
            <span  class="checkbox-label-text">
                <slot>{{label}}</slot>
            </span>
        </label>
    </div>
</template>

<script>
    export default {
        name: "Checkbox",

        props:{
            label:{
                type:String,
                default:'',
                description:'Label for checkbox',
            },
            checked:{
                type:Boolean,
                default:false,
                description:'Is checkbox checked'
            },
            disabled:{
                type:Boolean,
                default:false,
                description:'If set to true - checkbox will be disabled'
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