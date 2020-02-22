<template>
    <div :class="['sidebar', closed?'closed':'', ]">

        <!--Mobile Close Sidebar Button-->
        <div  v-if="!closed" class="sidebar-mobile-close">
            <div class="pt-2 pb-2 d-flex flex-row justify-content-end">
                <Button @click="$sidebar.close()" type="primary" size="sm"><fa icon="times"></fa></Button>
            </div>
        </div>

        <div class="d-flex justify-content-center mt-2 mb-2">
        </div>

        <ul class="nav flex-column sidebar-items">
            <li class="nav-item sidebar-link" v-for="(link,i) in links" :key="i" @click="navigateTo(link.path)">
                {{ link.name }}
            </li>
        </ul>
    </div>
</template>

<script>

    import {library} from '@fortawesome/fontawesome-svg-core';
    import {faTimes} from '@fortawesome/free-solid-svg-icons';

    library.add(faTimes);

    export default {
        name: "Sidebar",

        data(){
            return {
                closed:false,
                links:[
                    {
                        name:'Components',
                        path:'/components',
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
                        icon:'',
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

<style scoped>

</style>