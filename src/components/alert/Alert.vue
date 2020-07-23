<template>
    <transition leave-active-class="animated fadeOut faster">
        <div :class="['alert', `alert-${type}`]" role="alert" v-if="!closed">
            <div class="content">
                <slot></slot>
            </div>
            <div class="close" v-if="isClosable" @click="closed = true">
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </div>
    </transition>
</template>

<script>

    import {library} from '@fortawesome/fontawesome-svg-core';
    import {faTimes} from '@fortawesome/free-solid-svg-icons';

    library.add(faTimes);

    export default {
        name: "Alert",

        props:{
            type:{
                type:String,
                default:'primary',
                required:false,
                description: 'One of default theme types that will be used to apply color and background styles. Available types are: default, primary, secondary, success, info, warning, danger, light, dark',
            },

            closable:{
                type:[Boolean, String],
                default:false,
                required:false,
                description: 'If set to true - close button will be displayed and alert will be closable',
            },
        },

        computed:{

            // Allow users of framework to submit props as strings,
            // just in case colon (:) was forgotten whe providing closable prop value
            isClosable(){
                let is = false;

                if(typeof this.closable === 'string'){
                    is = this.closable === 'true';
                }

                if(typeof this.closable === 'boolean'){
                    is = this.closable === true;
                }

                return is;
            }
        },

        data(){
            return{
                closed:false,
            };
        },

    }
</script>

<style scoped lang="scss">

</style>