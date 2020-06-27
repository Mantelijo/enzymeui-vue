<template>
    <div :class="['toast-notifications-container', $toasts.containerPosition]" v-if="toasts.length > 0">
        <ToastNotification
            v-for="toast in toasts"
            :data="toast"
        />
    </div>
</template>
<script>
    export default {
        name: "ToastNotificationsContainer",

        computed:{
            toasts(){
                return this.$toasts.getAll();
            }
        },

        created(){
            console.log(this.$toasts);
        },
    }
</script>

<style scoped>

</style>