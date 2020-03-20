<template>
    <div>
        <transition name="shift" mode="out-in">
            <slot name="default" v-if="active"></slot>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "NavItem",

        props:{
            title:{
                type:String,
                required:true,
                description: 'Title of Nav tab'
            },
        },

        data(){
            return {
                active:false,
            };
        },

        mounted() {

            // Register self in parent Nav component
            this.$parent.$data.children.push(this);

        }
    }
</script>

<style scoped>
    .shift-enter{
        transform: translateX(-10px);
    }
    .shift-enter-active, .shift-leave-active{
        transition: transform 200ms;
    }
    .shift-leave-to{
        transform: translateX(-10px);
    }
</style>