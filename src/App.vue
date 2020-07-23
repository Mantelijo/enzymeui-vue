<template>
    <div id="app">
        <!-- Notification container -->
        <ToastNotificationsContainer/>
        <!-- Sidebar -->
        <Sidebar>
            <!--Mobile Close Sidebar Button-->
            <div v-if="" class="sidebar-mobile-close">
                <div class="pt-2 pb-2 d-flex flex-row justify-content-end">
                    <Button @click="$sidebar.close()" type="primary" size="sm"><fa icon="times"></fa></Button>
                </div>
            </div>

            <div class="sidebar-brand d-flex justify-content-center ">
                <b class="font-size-150">Templatium</b>
            </div>

            <ul class="nav flex-column sidebar-items">
                <li
                    :class="['nav-item', 'sidebar-item', {'active':$route.path === link.path}]"
                    v-for="(link,i) in links"
                    :key="i"
                    @click="navigateToPath(link.path, $event)"
                >
                    <a
                        class="sidebar-link d-flex flex-row align-items-center w-100 h-100"
                        @click="navigateToPath(link.path, $event)"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-default" width="18" height="18" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z"/>
                            <rect x="3" y="12" width="6" height="8" rx="1" />
                            <rect x="9" y="8" width="6" height="12" rx="1" />
                            <rect x="15" y="4" width="6" height="16" rx="1" />
                            <line x1="4" y1="20" x2="18" y2="20" />
                        </svg>
                        <div class="ml-3">{{link.name}}</div>
                    </a>
                </li>
            </ul>
        </Sidebar>
        <div :class="['app-container', {'sidebar-open':!sidebarClosed}]">
            <!-- This will be shown only on mobile as black transparent clickable content overlay. See src/assets/scss/core/_sidebar.scss -->
            <SidebarContentOverlay :show="!sidebarClosed"></SidebarContentOverlay>
            <!--Navigation bar-->
            <Navbar>
                <template v-slot:default="{toggleSidebar}">
                    <div class="d-flex align-items-center w-100">
                        <!--Hamburger menu-->
                        <div @click="toggleSidebar" class="cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-default" width="30" height="30"
                                 viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round"
                                 stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z"/>
                                <line x1="4" y1="6" x2="20" y2="6"/>
                                <line x1="4" y1="12" x2="20" y2="12"/>
                                <line x1="4" y1="18" x2="20" y2="18"/>
                            </svg>
                        </div>
                        <!--Search field-->
                        <div class="ml-5 d-none d-sm-block" style="width:200px;">
                            <Dropdown class="w-100" menu-classes="w-100">
                                <template #button>
                                    <Input class="m-0" size="sm" placeholder="Search"></Input>
                                </template>
                                <div class="dropdown-item">
                                    Test Search Link 1
                                </div>
                                <div class="dropdown-item">
                                    Test Search Link 2
                                </div>
                                <div class="dropdown-item">
                                    Test Search Link 3
                                </div>
                            </Dropdown>
                        </div>
                        <div class="ml-auto d-flex flex-row justify-content-end align-items-center">
                            <!--Notification bell-->
                            <div class="cursor-pointer position-relative ml-4">
                                <Dropdown size="md" menu-classes="dropdown-menu-sm" :popper-config="{placement:'bottom-end'}">
                                    <template #button>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-default" width="30"
                                             height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#4CAF50"
                                             fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z"/>
                                            <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"/>
                                            <path d="M9 17v1a3 3 0 0 0 6 0v-1"/>
                                        </svg>
                                        <!--Notification badge-->
                                        <Badge pill class="font-size-50 position-absolute" style="top:0;right: 0;">3</Badge>
                                    </template>
                                    <!-- Dropdown content with multiple orders-->
                                    <div class="d-flex flex-row p-2 align-content-center justify-content-center" v-for="{name, title} in [
                                        {
                                            name: 'Michele Piper',
                                            title: 'New Order ($56)'
                                        },
                                        {
                                            name: 'Austin Bay',
                                            title: 'New Order ($98)'
                                        },
                                        {
                                            name: 'Linus Toskey',
                                            title: 'New Order ($12)'
                                        },
                                    ]">
                                        <div class="d-flex flex-column justify-content-center mr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-success" width="20"
                                                 height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#4CAF50"
                                                 fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z"/>
                                                <circle cx="9" cy="19" r="2"/>
                                                <circle cx="17" cy="19" r="2"/>
                                                <path d="M3 3h2l2 12a3 3 0 0 0 3 2h7a3 3 0 0 0 3 -2l1 -7h-15.2"/>
                                            </svg>
                                        </div>
                                        <div>
                                            <div class="text-success font-size-100 font-weight-bold">{{title}}</div>
                                            <div class="color-gray-500 font-size-75">{{name}}</div>
                                        </div>
                                    </div>
                                    <div class="text-center p-2 font-size-75">
                                        <a href="#" class=" color-gray-500">Mark all as read</a>
                                    </div>
                                </Dropdown>
                            </div>
                            <!--User avatar with dropdown -->
                            <div class="ml-5">
                                <Dropdown class="">
                                    <template #button>
                                        <div class="d-flex flex-row align-items-center justify-content-center cursor-pointer">
                                            <div class="mr-3">
                                                <div class="font-weight-bold">Jolly</div>
                                                <div class="font-size-75 color-gray-600">Admin</div>
                                            </div>
                                            <img style="max-width: 30px;" class="rounded-circle"
                                                 src="https://source.unsplash.com/mEZ3PoFGs_k/80x80">
                                        </div>
                                    </template>
                                    <!-- Dropdown content -->
                                    <div class="dropdown-item d-flex align-items-center p-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-default" width="20"
                                             height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#4CAF50"
                                             fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z"/>
                                            <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                                            <circle cx="12" cy="12" r="3"/>
                                        </svg>
                                        <div class="ml-3 ">
                                            Settings
                                        </div>
                                    </div>
                                    <div class="dropdown-item d-flex align-items-center p-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-default" width="20"
                                             height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#4CAF50"
                                             fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z"/>
                                            <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"/>
                                            <path d="M7 12h14l-3 -3m0 6l3 -3"/>
                                        </svg>
                                        <div class="ml-3 ">
                                            Logout
                                        </div>
                                    </div>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                </template>
            </Navbar>
            <!-- Content with router view -->
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

    export default {
        name: 'app',

        data() {
            return {
                // State of sidebar
                sidebarClosed: false,
                links:[
                    {
                        name:'Dashboard',
                        path:'/',
                        icon:'',
                    },
                    {
                        name:'Charts',
                        path:'/charts',
                        icon:'',
                    },
                    {
                        name:'Dropdowns',
                        path:'/dropdowns',
                        icon:'',
                    },
                    {
                        name:'Alerts',
                        path:'/alerts',
                        icon:'',
                    },
                    {
                        name:'Buttons',
                        path:'/buttons',
                        icon:'',
                    },
                    {
                        name:'Components',
                        path:'/components',
                        icon:'',
                    },
                    {
                        name:'Forms',
                        path:'/forms',
                    },
                    {
                        name:'Typography',
                        path:'/typography',
                    },
                ]
            }
        },

        methods:{
            navigateToPath(path, e){
                e.stopPropagation();
                this.$router.push({path});
            }
        },

        watch: {
            // Watch if sidebar is being closed/opened and adjust visibility of overlay, content
            '$sidebar.sidebarVisible': function (val) {
                this.sidebarClosed = !val;
            }
        }
    }
</script>

<style lang="scss">
    .fade-enter {
        opacity: 0;
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.2s ease;
    }

    .fade-leave-to {
        opacity: 0;
    }
</style>
