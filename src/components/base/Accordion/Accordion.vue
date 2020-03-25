<template>
    <div class="accordion" @click="test">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "Accordion",

        props:{
            alwaysOne:{
                type:Boolean,
                default:false,
                description: 'If always-one property is added as true then only one accordion item will be open at a time. Others will be closed when new is enabled.'
            }
        },

        data(){
            return{
                children:[],
            };
        },

        methods:{
            test(){
                console.log(this.$children);
            },

            // Close
            closeOthers(currentChild, isCollapseOpen){
                if(isCollapseOpen){
                    this.$children.forEach(child=>{
                        if(currentChild !== child && isCollapseOpen){
                            child.close();
                        }
                    });
                }
            }
        },

        mounted() {
            if(this.alwaysOne){
                this.$children.forEach((child) => {
                    child.$on('change', (state)=>{
                        console.log("Change listener fired in accordion", state)
                        this.closeOthers(child, state);
                    });
                });
            }
        }


    }
</script>

<style scoped>

</style>