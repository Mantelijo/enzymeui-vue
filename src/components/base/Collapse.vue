<template>
    <div :class="[{'collapse':collapsed}]">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "Collapse",

        data(){
            return{
                collapsed:false,
            };
        },
    }
</script>

<style scoped>

</style>