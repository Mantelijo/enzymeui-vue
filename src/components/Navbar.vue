<template>
    <nav class="navbar navigation-bar">
        <fa class="menu-toggle" icon="bars" @click="toggleSidebar"></fa>
    </nav>
</template>

<script>

    import {library} from "@fortawesome/fontawesome-svg-core";
    import {faBars} from "@fortawesome/free-solid-svg-icons";

    library.add(faBars);

    export default {
        name: "Navbar",
        methods:{
            // Toggle sidebar visibility
            toggleSidebar(){
                this.$sidebar.toggle();
            }
        }
    }
</script>

<style scoped>

</style>