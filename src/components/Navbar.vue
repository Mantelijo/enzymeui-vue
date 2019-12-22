<template>
    <nav class="navbar navigation-bar">
        <Button @click="toggleSidebar">
            Menu
        </Button>
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