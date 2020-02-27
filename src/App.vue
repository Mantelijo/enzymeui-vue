<template>
    <div id="app">
        <Sidebar></Sidebar>
        <div :class="['app-container', {'sidebar-open':!sidebarClosed}]">
            <SidebarContentOverlay :show="!sidebarClosed"></SidebarContentOverlay>
            <Navbar></Navbar>
            <div class="content-container container-fluid mt-4 mb-5">
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
    import Navbar from "./components/Navbar";
    export default {
        name: 'app',

        components: {Navbar},

        data(){
            return {
                // State of sidebar
                sidebarClosed:false,
            }
        },

        watch:{
            // Watch if sidebar is being closed/opened and adjust visibility of overlay, content
            '$sidebar.sidebarVisible':function(val){
                this.sidebarClosed = !val;
            }
        }
    }
</script>

<style>
</style>
