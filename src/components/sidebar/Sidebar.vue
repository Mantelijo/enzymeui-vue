<template>
    <div :class="['sidebar', closed?'closed':'', ]">

        <!--Mobile Close Sidebar Button-->
        <div  v-if="!closed" class="sidebar-mobile-close">
            <div class="pt-2 pb-2 d-flex flex-row justify-content-end">
                <Button @click="$sidebar.close()" type="primary" size="sm"><fa icon="times"></fa></Button>
            </div>
        </div>

        <div class="sidebar-brand d-flex justify-content-center ">
            <img src="../../assets/img/logo.png">
        </div>

        <ul class="nav flex-column sidebar-items">
            <li :class="['nav-item', 'sidebar-link', {'active':linkActive(link.path)}]" v-for="(link,i) in links" :key="i" @click="navigateTo(link.path)">
                <span class="icon" v-if="link.icon !== ''">
                    <fa :icon="link.icon"></fa>
                </span>
                {{ link.name }}
            </li>
        </ul>
    </div>
</template>

<script>

    import {library} from '@fortawesome/fontawesome-svg-core';
    import {faTimes, faFileAlt, faFont} from '@fortawesome/free-solid-svg-icons';

    library.add(faTimes);

    export default {
        name: "Sidebar",

        data(){
            return {
                closed:false,
                links:[
                    {
                        name:'Dashboard',
                        path:'/',
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
                        name:'Forms',
                        path:'/forms',
                        icon:faFileAlt,
                    },
                    {
                        name:'Typography',
                        path:'/typography',
                        icon:faFont,
                    },
                ]
            }
        },

        methods:{
            // Navigate to link
            navigateTo(path){
                // Navigate to route
                this.$router.push(path);

                // And hide sidebar if we are on mobile
                if(window.innerWidth < 768){
                    this.$sidebar.close();
                }
            },

            // Determine if link class should be set to active
            linkActive(path){
                return path === this.activePath;
            }
        },

        computed:{
            // Currently active path
            activePath(){
                return this.$route.path;
            },

            // Computed property of sidebar visibility
            sidebarVisible(){
                return this.$sidebar.sidebarVisible;
            }
        },

        watch:{
            // Watch if sidebar is being closed/opened and adjust visibility
            '$sidebar.sidebarVisible':function(visible){
                this.closed = !visible;

                // On mobile we want to hide overflow so there is no incorrect scrolling on content when we
                // Interact with sidebar or SidebarContentOverlay
                document.body.classList.remove('overflow-hidden');
                if(window.innerWidth < 768 && visible === true){
                    document.body.classList.add('overflow-hidden');
                }
            }
        },

        mounted() {
            // Hide sidebar on mobile initially
            if(window.innerWidth < 768){
                this.$sidebar.close();
            }
        }
    }
</script>

<style scoped lang="scss">

    .icon{
        margin-right: 4px;
    }

</style>