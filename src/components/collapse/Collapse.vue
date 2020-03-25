<template>
    <transition
        v-on:leave="leave"
        v-on:before-leave="beforeLeave"
        v-on:after-leave="afterEnterLeave"

        v-on:enter="enter"
        v-on:before-enter="beforeEnter"
        v-on:after-enter="afterEnterLeave"
    >
        <div v-show="show" class="collapse-holder">
            <slot></slot>
        </div>
    </transition>
</template>
<script>
    /**
     * Collapse can be toggled in 2 ways:
     * 1. Using v-collapse directive and providing collapse element id
     * 2. By using collapse component instance and utilizing toggle, open, close methods
     */
    export default {
        name: "Collapse",

        data(){
            return{
                show:false,
                height:null,
            };
        },

        props:{
            id:{
                type:String,
                required:false,
                description: 'Unique id for collapse',
            },
            showInitially:{
                type:Boolean,
                required:false,
                default:false,
                description: 'If set to true - collapse content will be shown initially'
            },
        },

        methods:{
            enter(el, done){
                // Set to animate height
                requestAnimationFrame(()=>{
                    el.style.height = this.height + 'px';
                });
            },
            beforeEnter(el, done){
                // Getting box height even if display is set to none
                let initVisibility = el.style.visibility;
                let initDisplay = el.style.display;
                el.style.height = '';
                el.style.visibility = 'hidden';
                el.style.display = 'block';

                // Saving height in data
                let height = el.clientHeight;
                this.height = height;

                // Setting visibility back to initial
                el.style.visibility = initVisibility;

                // Setting initial values for animation
                el.style.display = 'block';
                el.style.height = 0+'px';
            },

            beforeLeave(el){
            },

            afterEnterLeave(el){
                // Remove height styling
                requestAnimationFrame(()=>{
                    el.style.height = null;

                    console.log(el);
                });
            },
            leave(el){
                // Shrink to 0px when leaving
                el.style.height = '0px';
            },

            /* Methods for manual control of collapse */
            // Open collapse
            open(){
                this.show = true;
            },
            // Close collapse
            close(){
                this.show = false;
            },
            // Toggle collapse
            toggle(){
                this.show = !this.show;
            },
        },

        beforeMount() {
            if(this.id !== undefined) {
                this.$collapse.register(this.id, this);
            }
        },

        beforeDestroy() {
            if(this.id !== undefined) {
                this.$collapse.unregister(this.id);
            }
        },

        mounted() {
            // Show collapse initially
            if(this.showInitially){
                this.show = true;
            }
        }
    }
</script>

<style scoped lang="scss">
    .collapse-holder{
        overflow: hidden;
        transition: height 200ms ease;
    }
</style>