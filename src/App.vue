<template>
    <div id="app">
        <ToastNotificationsContainer/>
        <Sidebar></Sidebar>
        <div :class="['app-container', {'sidebar-open':!sidebarClosed}]">
            <SidebarContentOverlay :show="!sidebarClosed"></SidebarContentOverlay>
            <Navbar>
                <template v-slot:default="{toggleSidebar}">
                    <div class="d-flex align-items-center">
                        <div @click="toggleSidebar" class="cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-default" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5"  fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z"/>
                                <line x1="4" y1="6" x2="20" y2="6" />
                                <line x1="4" y1="12" x2="20" y2="12" />
                                <line x1="4" y1="18" x2="20" y2="18" />
                            </svg>
                        </div>
                        <div>
                            <Input></Input>
                        </div>
                    </div>
                </template>
            </Navbar>
            <div class="content-container container-fluid mt-4 mb-5">
                <div class="row">
                    <div class="col">
                        <transition mode="out-in" name="fade">
                            <router-view></router-view>
                        </transition>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Navbar from "./components/base/Navbar";
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
    .fade-enter{
        opacity: 0;
    }

    .fade-enter-active,
    .fade-leave-active{
        transition: opacity 0.2s ease;
    }

    .fade-leave-to{
        opacity: 0;
    }
</style>
