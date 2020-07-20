<template>
    <div id="app">
        <ToastNotificationsContainer/>
        <Sidebar></Sidebar>
        <div :class="['app-container', {'sidebar-open':!sidebarClosed}]">
            <SidebarContentOverlay :show="!sidebarClosed"></SidebarContentOverlay>
            <Navbar>
                <template v-slot:default="{toggleSidebar}">
                    <div class="d-flex align-items-center w-100">
                        <div @click="toggleSidebar" class="cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-default" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5"  fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z"/>
                                <line x1="4" y1="6" x2="20" y2="6" />
                                <line x1="4" y1="12" x2="20" y2="12" />
                                <line x1="4" y1="18" x2="20" y2="18" />
                            </svg>
                        </div>
                        <div class="ml-5" style="width:200px;">
                            <Dropdown class="w-100">
                                <template #button>
                                    <Input class="m-0" size="sm" placeholder="Search"></Input>
                                </template>
                                <div class="dropdown-item">
                                    Test 0
                                </div>
                                <div class="dropdown-item">
                                    Test 1
                                </div>
                                <div class="dropdown-item">
                                    Test 2
                                </div>
                            </Dropdown>
                        </div>
                        <div class="ml-auto d-flex flex-row justify-content-end align-items-center">
                            <div class="cursor-pointer position-relative ">
                               <Dropdown>
                                   <template #button>
                                       <svg xmlns="http://www.w3.org/2000/svg" class="stroke-default" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#4CAF50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                           <path stroke="none" d="M0 0h24v24H0z"/>
                                           <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                                           <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                                       </svg>
                                       <Badge pill class="font-size-50 position-absolute" style="top:0;right: 0;">5</Badge>
                                   </template>
                                   <div class="dropdown-item ">
                                       <div>
                                           Test
                                       </div>
                                   </div>
                               </Dropdown>
                            </div>
                            <div class="ml-4">
                                <Dropdown class="">
                                    <template #button>
                                        <div class="d-flex flex-row align-items-center justify-content-center cursor-pointer">
                                            <img style="max-width: 30px;" class="rounded-circle" src="https://source.unsplash.com/mEZ3PoFGs_k/80x80">
                                            <div class="ml-3">
                                                <div class="font-weight-bold">Jolly</div>
                                                <div class="font-size-75 color-gray-600">Admin</div>
                                            </div>
                                        </div>
                                    </template>
                                    <div class="account-dropdown-item d-flex align-items-center p-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-default" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#4CAF50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z"/>
                                            <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                            <circle cx="12" cy="12" r="3" />
                                        </svg>
                                        <div class="ml-3 color-gray-600">
                                            Settings
                                        </div>
                                    </div>
                                    <div class="account-dropdown-item d-flex align-items-center p-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-danger" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#4CAF50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z"/>
                                            <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                                            <path d="M7 12h14l-3 -3m0 6l3 -3" />
                                        </svg>
                                        <div class="ml-3 color-gray-600">
                                            Logout
                                        </div>
                                    </div>
                                </Dropdown>
                            </div>
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

<style lang="scss">
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

    .account-dropdown-item{
        &:hover{
        }
    }
</style>
