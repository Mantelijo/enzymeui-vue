<template>
    <div class="sidebar">
        <ul class="nav flex-column sidebar-items">
            <li class="nav-item sidebar-link" v-for="(link,i) in links" :key="i" @click="navigateTo(link.path)">
                {{ link.name }}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Sidebar",

        data(){
            return {
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
            }
        }
    }
</script>

<style scoped>

</style>