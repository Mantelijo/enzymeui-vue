<template>
    <div :class="['sidebar', closed?'closed':'', ]">

        <!--Mobile Close Sidebar Button-->
        <div  v-if="!closed" class="sidebar-mobile-close">
            <div class="pt-2 pb-2 d-flex flex-row justify-content-end">
                <Button @click="$sidebar.close()" type="primary" size="sm"><fa icon="times"></fa></Button>
            </div>
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
                    }
                ]
            }
        },

        methods:{
            // Navigate to link
            navigateTo(path){
                this.$router.push(path);
            }
        },

        computed:{
            // Currently active path
            activePath(){
                return this.$route.path;
            },

            sidebarVisible(){
                return this.$sidebar.sidebarVisible;
            }
        },

        watch:{
            // Watch if sidebar is being closed/opened and adjust visibility
            '$sidebar.sidebarVisible':function(val){
                this.closed = !val;
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