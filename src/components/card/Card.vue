<template>
    <div :class="['card', type]">
        <div :class="['card-header', ...headerClasses]" v-if="$slots['header']">
            <slot name="header"></slot>
        </div>
        <div :class="['card-body', ...bodyClasses]">
            <slot></slot>
        </div>
        <div class="card-footer" v-if="$slots['footer']">
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
            },
            bodyClasses:{
                type: String | Array,
                required:false,
                default:()=>[],
                description: 'Additional classes applied to card-body'
            },
            headerClasses:{
                type: String | Array,
                required:false,
                default:()=>[],
                description: 'Additional classes applied to card-header'
            },
        }
    }
</script>

<style scoped>

</style>