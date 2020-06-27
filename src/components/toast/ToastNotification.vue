<template>
    <transition enter-active-class="animated fadeIn faster">
        <div
            @click="clicked"
            :class="['toast show', ...this.data.classes, `toast-${this.data.type}`]"
            role="alert"
            aria-live="assertive"
            aria-atomic="true">
            <div class="toast-header">
                <strong class="mr-auto" v-if="data.title">{{data.title}}</strong>
                <small v-if="data.time">{{data.time}}</small>
                <button
                        v-if="this.data.showCloseButton"
                        @click="remove"
                        type="button"
                        class="ml-2 mb-1 close"
                        data-dismiss="toast"
                        aria-label="Close">
                <span aria-hidden="true">
                    <fa class="toast-close-icon" icon="times"></fa>
                </span>
                </button>
            </div>
            <div class="toast-body" v-if="data.body" v-html="data.body"></div>
        </div>
    </transition>
</template>

<script>
    import {library} from '@fortawesome/fontawesome-svg-core';
    import {faTimes} from '@fortawesome/free-solid-svg-icons';

    library.add(faTimes);
    export default {
        name: "ToastNotification",

        props:{
            // All available data properties are defined in toast/plugin.js optionsDefault
            data:{
                type:Object,
                required:true,
                description: 'Toast Notification data object that defines messages and behavior of toast notification',
            }
        },


        methods:{
            remove(){
                this.$toasts.remove(this.data);
            },

            clicked(){
                console.log('clicked',this.data.closeOnClick);
                if(this.data.closeOnClick === true){
                    this.remove();
                }
            }
        },

        created(){
            console.log(this.$toasts);
        },

        mounted() {
            if(this.data.timeout !== -1){
                setTimeout(()=>this.$toasts.remove(this.data), this.data.timeout);
            }
        }
    }
</script>

<style scoped>

</style>