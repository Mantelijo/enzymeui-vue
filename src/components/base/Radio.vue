<template>
    <div :class="['radio', {'disabled':disabled}]">
        <input :value="radioValue" :name="name" :id="id" v-model="model" type="radio" :aria-checked="model" :disabled="disabled"/>
        <div class="input-container">
            <span :class="['checkbox-indicator', {'m-0':noLabel}]" @click="indicatorClick"></span>
            <label class="radio-label" :for="id">
                <span  class="radio-label-text">
                    <slot>{{label}}</slot>
                </span>
            </label>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Radio",

        props:{
            label:{
                type:String,
                default:'',
                required:false,
                description:'Label for radio',
            },
            value:{
                type:Boolean | String,
                default:false,
                required:false,
                description:'Is radio checked'
            },
            disabled:{
                type:Boolean,
                default:false,
                required:false,
                description:'If set to true - radio will be disabled'
            },
            name:{
                type:String,
                default:'',
                required:false,
                description: 'Name attribute for checkbox input'
            },
            radioValue:{
                type:String,
                default:'',
                required:false,
                description: 'Value attribute for radio input'
            }
        },

        data(){
            return{
                id:'',
                noLabel: false,
            }
        },

        computed:{

            // Radio value model
            model:{
                get(){
                    return this.value;
                },
                set(value){
                    this.$emit('input', value);
                }
            }
        },

        methods:{
            indicatorClick(){
                // Imitate label click on indicator click
                this.$refs.label.click();
            }
        },

        mounted(){
            // Generate random id
            this.id = (new Date().getTime()).toString() + (Math.random() * 100).toString();

            // Check if label is not empty
            if(!this.$scopedSlots.hasOwnProperty('default') && this.label.length === 0){
                this.noLabel = true;
                this.noMarginIndicator = true;
            }
        }
    }
</script>

<style scoped>

</style>