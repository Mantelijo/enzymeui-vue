<template>
    <button @click="click" :class="['btn', `btn-${type}`, size !== null? `btn-${size}`:'' ]">
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
            }
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