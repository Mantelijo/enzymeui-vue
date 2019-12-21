<template>
    <nav class="navbar">
        <Button @click="toggleSidebar" type="primary" size="sm">Toggle sidebar</Button>
    </nav>
</template>

<script>
    export default {
        name: "Navbar",
        methods:{
            // Toggle sidebar visibility
            toggleSidebar(){
                this.$sidebar.toggle();
                console.log(this.$sidebar.sidebarVisible);
            }
        }
    }
</script>

<style scoped>

</style>