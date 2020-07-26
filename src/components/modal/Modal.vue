<template>
    <div class="modal-container" v-if="open">
        <div class="modal-backdrop" @click="backdropClicked"></div>
        <div class="modal" role="dialog">
            <div class="modal-content">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    /**
     * @fade-clicked - event emitted when user clicks on fade element
     * Use these bootstrap classes when creating modals for structure:
     *  .modal-header
     *  .modal-body
     *  .modal-header
     */
    export default {
        name: "Modal",

        props:{
            open:{
                type:Boolean,
                required:true,
                default:false,
                description: 'Control for showing modal. If set to true - modal will be displayed. If false - modal will be hidden.'
            }
        },

        methods:{

            // Emit click of fade elementto parent
            backdropClicked(){
                this.$emit('backdrop-clicked', true);
            }

        },

        watch:{
            // Add scroll lock for body when modal is open
            open(val){
                document.body.classList.remove('overflow-hidden');
                if(val === true){
                    document.body.classList.add('overflow-hidden');
                }
            }
        }
    }
</script>

<style scoped>

</style>