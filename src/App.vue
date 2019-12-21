<template>
    <div id="app">
        <Sidebar></Sidebar>
        <div :class="['app-container', sidebarClosed?'':'sidebar-open']">
            <SidebarContentOverlay :show="!sidebarClosed"></SidebarContentOverlay>
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
            '$sidebar.sidebarVisible':function(val){
                this.sidebarClosed = !val;
            }
        }
    }
</script>

<style>
</style>
