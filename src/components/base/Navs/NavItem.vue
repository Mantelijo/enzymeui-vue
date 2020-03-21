<template>
    <div>
        <transition name="shift" mode="out-in">C
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
                description: 'Title of Nav tab. Can be a string of html'
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
        transform: translateX(-1000px);
    }
    .shift-enter-active{
        transition: transform 200ms;
    }
    .shift-leave-active{
        transition: transform 0s;
    }
    .shift-leave-to{
        transform: translateX(1000px);
    }
</style>