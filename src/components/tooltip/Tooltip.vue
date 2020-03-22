<template>
    <div v-show="show" class="tooltip bs-tooltip-auto" role="tooltip">
        <div class="arrow"></div>
        <div class="tooltip-inner">
            <slot/>
        </div>
    </div>
</template>

<script>

    // bs-tooltip-auto class is used in order to automatically

    export default {
        name: "Tooltip",

        props:{
            id:{
                type:String,
                required:true,
                description: 'tooltip id, must be unique'
            }
        },

        data(){
            return {
                show: false,
            }
        },

        beforeMount() {
            // Register self in tooltips global object
            this.$tooltips.add(this.id, this);
        },

        beforeDestroy() {
            this.$tooltips.remove(this.id);
        }


    }
</script>

<style scoped>

</style>