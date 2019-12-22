<template>
    <div class="form-group">
        <div v-if="$slots['label'] || label.length>0" class="input-label">
            <slot name="label">
                <span v-if="label.length>0">{{label}}</span>
            </slot>
        </div>
        <input
                :class="[
                    'form-control',
                    'input',
                    {'valid':valid === true},
                    {'error':valid === false},
                    {'form-control-lg': size === 'lg'},
                    {'form-control-sm': size === 'sm'},
                ]"
                :placeholder="placeholder"
                :value="value"
               v-on="events">
        <div class="input-info" v-if="$slots['info'] || infoText.length>0">
            <slot name="info">
                <span v-if="infoText.length > 0">{{infoText}}</span>
            </slot>
        </div>
        <div class="input-error" v-if="$slots['error'] || errorText.length>0">
            <slot name="error">
                <span v-if="errorText.length > 0">{{errorText}}</span>
            </slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Input",
        data(){
            return {
            }
        },
        props:{
            type:{
                type:String,
                default: 'text',
                description: 'Input type attribute'
            },
            value:{
                type:String,
                description: 'Input value attribute'
            },
            name:{
                type:String,
                description: 'Input name attribute'
            },
            placeholder:{
                type:String,
                default:'',
                description: 'Input placeholder value'
            },
            valid:{
                type:Boolean,
                default:null,
                description:'Whether input is valid and error message must be shown'
            },
            errorText:{
                type:String,
                default:'',
                description:'Error message'
            },
            infoText:{
                type:String,
                default:'',
                description:'Info message'
            },
            label:{
                type:String,
                default:'',
                description:'Label text'
            },
            size:{
                type:String,
                default:'',
                description:'Input size: lg - for large, sm - for small'
            },
            required:{
                type:Boolean,
                default:true,
                description:'Whether filling input is required or no'
            },

        },
        computed:{
            // Input field events
            events(){
                return {
                    ...this.$listeners,
                    input:this.input,
                }
            },
        },
        methods:{
            // Emit value change to parent
            input(event){
                let val = event.target.value;
                this.$emit('input', val);
            },
        },

        mounted() {
            console.log(this.$listeners);
        }
    }
</script>

<style scoped>

</style>