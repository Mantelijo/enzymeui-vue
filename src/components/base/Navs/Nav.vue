<template>
    <div>
        <div :class="['nav', 'nav-tabs']">
            <div
                v-for="(nav, i) in children"
                :class="['nav-item']"
                @click="clickedTab(i)"
            >
                <span :class="['nav-link',  {'active': nav.active}]">
                    {{nav.title}}
                </span>
            </div>
        </div>

        <component class="nav-content" :is="contentTag">
            <slot/>
        </component>

    </div>
</template>

<script>
    export default {
        name: "Nav",

        props:{
            contentTag:{
                type:String,
                required:false,
                default:'div',
                description: 'HTML tag for Nav content. Default is div',
            }
        },

        data(){
            return {
                // Children are registered from NavItem
                children:[],
            };
        },

        computed:{
            activeTab(){
                return this.children[0];
            },
        },

        methods:{

            // Perform some actions when tab link is clicked
            clickedTab(i){
                this.activateTab(i);
            },

            // i can either be index of this.children, or NavItem object
            activateTab(i){
                let compareFunc = null;

                // Define compare function
                if(typeof i === 'number'){
                    compareFunc = (child, index) =>{
                        child.active = i === index;
                    }
                }
                else{
                    compareFunc = (child, index) =>{
                        child.active = i === child;
                    }
                }

                // Loop through children and activate provided child
                this.children.forEach(compareFunc);
            }

        },

        mounted() {
            console.log("Mounted NAV, children count:", this.children, "And their refs", this.children[0].$refs);
        }
    }
</script>

<style scoped>

</style>