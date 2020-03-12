<template>
    <div :class="['checkbox', {'disabled':disabled}]">
        <input
                :name="name"
                :value="checkboxValue"
                :id="id" type="checkbox"
                v-model="checked"
                :aria-checked="checked"
                :disabled="disabled"
        />
        <label class="checkbox-label" :for="id">
            <span  class="checkbox-label-text">
                <slot>{{label}}</slot>
            </span>
        </label>
    </div>
</template>

<script>
    /**
     Description: checkbox input component.

     Simple usage: Checkbox component can be used in 2 ways.
     1: Using v-model with array and checkbox-value attributes. This way whenever checkbox is checked, it's value of
        checkbox-value attribute will be added to bound array. For example:

         <Checkbox v-model="checkboxes" checkbox-value="first">Simple checkbox</Checkbox>
         <Checkbox v-model="checkboxes" checkbox-value="second">Simple checked checkbox</Checkbox>
         <Checkbox v-model="checkboxes" checkbox-value="third" >Simple unchecked checkbox</Checkbox>
        Assuming that checkboxes is array, if we check all checkboxes, then the array would look like this:
        [first, second, third].
        We can also use bounded array to control which checkbox should be checked by populating the checkboxes array
        with corresponding checkbox-value values.
        When using this method it is recommended to use checkbox-value props, otherwise there might be unexpected results

     2: Using v-model with separate variables or object and components. Create separate variable/object property which controls each component.
        Lets assume that we have this setup:
        checkboxes = {
            first:false,
            second:false,
        }
        <Checkbox v-model="checkboxes.first" >Simple checkbox</Checkbox>
        <Checkbox v-model="checkboxes.second" >Simple checked checkbox</Checkbox>
        Then checkboxes object would be updated with boolean values when we interact with Checkbox component.

     Properties: see description of props objects
     */
    export default {
        name: "Checkbox",

        props:{
            label:{
                type:String,
                default:'',
                required:false,
                description:'Label for checkbox',
            },
            value:{
                type:Boolean | String,
                default:false,
                required:false,
                description:'Is checkbox checked. Can be either boolean true/false or string "checked"/"" values'
            },
            disabled:{
                type:Boolean,
                default:false,
                required:false,
                description:'If set to true - checkbox will be disabled'
            },
            name:{
                type:String,
                default:'',
                required:false,
                description: 'Name attribute for checkbox input'
            },
            checkboxValue:{
                type:String,
                default:'',
                required:false,
                description: 'Value attribute for checkbox input'
            },
        },

        data(){
            return{
                id:'',
            }
        },

        computed:{

            // Checkbox value model
            checked:{
                get(){
                    return this.value;
                },
                set(value){
                    console.log("Checkbox:", value);
                    this.$emit('input', value);
                }
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