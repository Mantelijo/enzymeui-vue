<template>
    <div v-if="show" class="sidebar-content-overlay"></div>
</template>

<script>
    export default {
        name: "SidebarContentOverlay",
        props:['show']
    }
</script>

<style scoped>

</style>