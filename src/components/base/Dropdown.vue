<template>
    <component
        :is="component"
        aria-haspopup="true"
        :aria-expanded="!closed"
        :class="['dropdown', {'dropdown-toggle':this.$slots.button === undefined}]"
        @click="toggle"
        v-click-outside="close"
    >
        <div ref="button">
            <slot name="button"></slot>
        </div>

        <transition enter-active-class="animated fadeIn faster " leave-active-class="animated fadeOut faster ">
            <div ref="menu" v-if="!closed" :class="['dropdown-menu', {'show':!closed}, menuClasses]">
                <slot></slot>
            </div>
        </transition>
    </component>
</template>

<script>

    import { createPopper } from '@popperjs/core';
    export default {
        name: "Dropdown",

        data(){
            return {
                closed:true,
            }
        },

        props:{
            component:{
                type:String,
                required:false,
                default:'div'
            },
            menuClasses:{
                type:String | Array,
                required:false,
                description: 'Additional classes that will be applied to dropdown-menu'
            },
            manualClose:{
                type:Boolean,
                required:false,
                default:false,
                description: `If set to true dropdown menu will be opened on button click,
                but closing must be handled automatically by developer. Recommended way of
                closing is adding ref (dropdownRefName) in parent and calling close function: this.$refs.dropdownRefName.close()
                Useful when you want to display something like form, or other content that should be clickable but should not close
                the dropdown menu`
            },
        },

        methods:{
            // Close dropdown menu
            close(){
                this.closed = true;
            },

            // Open dropdown menu
            open(){
                this.closed = false;
            },

            // Automatically open/close menu on click
            toggle(){
                // If manual close is enabled dropdown menu will open, but closing must be handled manually
                if(this.manualClose === true && this.closed === false) {
                    this.open();
                }
                else{
                    this.closed = !this.closed;
                }
            },

            // Position dropdown menu correctly when it's opened
            position(){
                if(this.closed === false) {
                    // On next tick (to make sure $refs are instantiated) recalculate position of dropdown
                    this.$nextTick(() => {
                        createPopper(this.$refs["button"], this.$refs["menu"], {
                            placement: 'bottom-start',
                            modifiers: [
                                {
                                    name: 'offset',
                                    options: {
                                        offset: [0, 5],
                                    },
                                },
                            ],
                        });
                    })
                }
            }
        },

        watch:{

            closed(){
                this.position();
            }

        },

    }
</script>

<style scoped>


</style>