<template>
    <component
        :is="element"
        :class="[
            'badge',
        ]"
    >

    </component>
</template>

<script>
    export default {
        name: "Badge",

        computed:{
            element(){
                return 'span';
            },
            classes(){

            }
        }
    }
</script>

<style scoped>

</style>