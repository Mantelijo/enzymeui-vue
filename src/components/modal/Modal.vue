<template>
    <div class="modal-container" v-if="internalOpen">
        <div class="modal-backdrop show"></div>
        <div
            ref="modal"
            :class="['modal', 'fade', 'd-block', {'show':showModal} ]"
            tabindex="-1"
            @click.self="exitModal"
            @keydown.esc="exitModal">
            <div :class="[
                'modal-dialog',
                {'modal-dialog-scrollable':dialogScrollable},
                {'modal-dialog-centered':dialogVerticallyCentered},
                dialogSize]">
                <div class="modal-content">
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    /**
     *  Use these bootstrap classes when creating modals for structure:
     *  .modal-header
     *  .modal-body
     *  .modal-header
     *  Emitted events:
     *      @exited-modal(true) - is emitted when modal is closed
     *  Control of display:
     *      open prop
     */
    export default {
        name: "Modal",

        data(){
            return{
                // This handles the modal transition animation
                showModal:false,

                // Internal component representation of open prop. Defers value of prop on exit in order to show animation
                internalOpen: false,
            }
        },

        props:{
            open:{
                type:Boolean,
                required:true,
                default:false,
                description: 'Control for showing modal. If set to true - modal will be displayed. If false - modal will be hidden.'
            },
            dialogScrollable:{
                type:Boolean,
                required:false,
                default:false,
                description: 'If provided as true, .modal-dialog-scrollable class will be added to .modal-dialog and will make it scrollable if content exceeds viewport height.'
            },
            dialogVerticallyCentered:{
                type:Boolean,
                required:false,
                default:false,
                description: 'If provided as true, .modal-dialog-centered will be added to .modal-dialog.',
            },
            dialogSize:{
                type:String,
                required:false,
                validator:(val)=>{
                    return [
                        'modal-sm',
                        'modal-lg',
                        'modal-xl',
                    ].indexOf(val) !== -1
                },
                default:'',
                description: 'Custom optional size classes for .modal-dialog. Available ones: modal-sm, modal-lg, modal-xl.',
            }
        },

        methods:{
            exitModal(){
                // Calculate transition duration to show exit animation
                let duration = window.getComputedStyle(this.$refs.modal).transitionDuration;
                let durationFloat = 0;
                if(typeof duration === 'string'){
                    durationFloat = parseFloat(duration);
                    if(duration.indexOf('ms') === -1 && duration.indexOf('s') !== -1){
                        durationFloat *= 1000;
                    }
                }

                this.showModal = false;

                setTimeout(()=>{
                    this.internalOpen = false;
                    this.$emit('exited-modal', true);
                }, durationFloat)
            }
        },

        watch:{
            open(val){
                if(val === true){
                    // Add scroll lock for body when modal is open
                    document.body.classList.add('modal-open');

                    this.internalOpen = val;

                    this.$nextTick(()=>{
                        // Animation kicks in here once modal is rendered in dom and show class is added
                        this.showModal = true;
                        // Focus modal on open in order to make esc button work
                        this.$refs.modal.focus();
                    });
                }
                else{
                    document.body.classList.remove('modal-open');

                    // Animate exit
                    this.exitModal();
                }
            }
        },
    }
</script>

<style lang="scss">


</style>