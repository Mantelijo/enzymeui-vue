<template>
    <div :class="['card', type]">
        <div class="card-header" v-if="this.$slots['header']">
            <slot name="header"></slot>
        </div>
        <div class="card-body">
            <slot></slot>
        </div>
        <div class="card-footer" v-if="this.$slots['footer']">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Card",
        props:{
            type:{
                type:String,
                description:'Card type'
            }
        }
    }
</script>

<style scoped>

</style>