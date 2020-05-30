<template>
    <div class="search-dropdown">

    </div>
</template>

<script>
    export default {
        name: "Select",

        props:{
            data:{
                type:Array,
                required:true,
                description: 'Array of selectable options for select dropdown',
            },

            isSearchable:{
                type:Boolean,
                required:false,
                default:false,
                description: 'If provided as true - select will be searchable on click'
            },
        },

        methods:{
            // Focuses search field if isSearchable is true and click on component is registered
            focusSearchField(){

            },

            changeSelection(){

            }
        }
    }
</script>

<style scoped>

</style>