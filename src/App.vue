<template>
    <div id="app">
        <Sidebar></Sidebar>
        <div class="app-container">
            <Navbar></Navbar>
            <div class="container-fluid">
                <div class="row">
                    <div class="col">
                        <router-view></router-view>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Sidebar from "./components/Sidebar";
    import Navbar from "./components/Navbar";
    export default {
        name: 'app',
        components: {Navbar, Sidebar},
    }
</script>

<style>
</style>
