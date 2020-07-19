<template>
    <div class="accordion-item card shadow-none">
        <div class="card-header" @click="toggle">
            <slot name="default"></slot>
        </div>
        <Collapse ref="collapse">
            <div class="card-body">
                <slot name="body"></slot>
            </div>
        </Collapse>
    </div>
</template>

<script>
    /**
     * Emits:
     * change event with Boolean value which represents whether item is collapsed (false) or open (true)
     */
    export default {
        name: "AccordionItem",

        methods:{
            toggle(){
                // Toggle collapse
                this.$refs['collapse'].toggle();

                // Get state of collapse
                let state = this.$refs['collapse'].$data.show;

                // Emit event to parent Accordion
                this.emitClick(state);
            },

            open(){
                this.$refs['collapse'].open();
            },

            close(){
                this.$refs['collapse'].close();
            },

            emitClick(state){
                this.$emit('change', state);
            }
        }
    }
</script>

<style scoped>

</style>