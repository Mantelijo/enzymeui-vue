<template>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li
                :class="['breadcrumb-item', {'active':item.active}]"
                v-for="item in items"
            >
                <component
                    :is="getItemComponent(item)"
                    :[href(item)]="item.link"
                    class="breadcrumb-link"
                >
                    {{item.page}}
                </component>
            </li>
        </ol>
    </nav>
</template>

<script>
    export default {
        name: "Breadcrumb",

        props:{
            items:{
                type: Array,
                required:true,
                validator(val){
                    let valid = false;
                    if(Array.isArray(val)){
                        val.forEach(v=>{
                            if(typeof v === 'object'){
                                if('page' in v && typeof v['page'] === 'string'){
                                    valid = true;
                                }
                            }
                        });
                    }
                    return true;
                },
                description: 'Array of objects which contain keys page for page name and link (optional) and active to indicate if page should be marked as active (optional)',
            },
        },

        methods:{
            // Component tag for breadcrumb items. Set to <a> when there is a link provided
            getItemComponent(item){
                if('link' in item){
                    return 'a';
                }
                return 'span';
            },

            // Get href attribute if available
            href(item){
                if('link' in item && item.link.length>0){
                    return 'href';
                }
                return null;
            },
        },
    }
</script>

<style scoped>

</style>