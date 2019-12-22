<template>
    <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header">
            <img src="..." class="rounded mr-2" alt="...">
            <strong class="mr-auto">Bootstrap</strong>
            <small>11 mins ago</small>
            <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="toast-body">
            {{message}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "Toast",
        props:{
            message:{
                type:String,
                required:true,
                description:'Toast notification message text'
            },
            expirationTime:{
                type:Number,
                default:5,
                description:'Toast notification expiration time in seconds'
            }
        },
        mounted() {
            // Send message to parent component to remove notification after specific time
            setTimeout(()=>{
                this.$emit('remove');
            }, this.expirationTime*1000);
        }
    }
</script>

<style scoped>

</style>