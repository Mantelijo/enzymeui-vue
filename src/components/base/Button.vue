<template>
    <button @click="click" :class="['btn', `btn-${type}`, size !== undefined? `btn-${size}`:'', {'rounded':rounded} ]">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: "Button",

        props:{
            type:{
                type:String,
                default:'primary',
                description: 'One of available bootstrap button types: primary, default, success, info, warning, danger'
            },
            size:{
                type:String,
                required:false,
                validator:(value)=>{
                    return ['lg', 'sm'].indexOf(value) !== -1;
                },
                description: 'Button size: lg for large, sm - for small',
            },
            rounded:{
                type:Boolean,
                required:false,
                default:false,
                description: 'If set to true .rounded class will be added'
            },
        },

        methods:{
            click(e){
                this.$emit('click', e);
            }
        }
    }
</script>

<style scoped>

</style>