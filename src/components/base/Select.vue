<template>
    <div class="select-dropdown">
        <Dropdown
            no-animation
            y-offset="3"
            manual-close
            menu-classes="w-100 py-0"
            ref="dropdown"
        >
            <Input
                slot="button"
                v-model="inputValue"
                @focus="focus"
                @blur="blur"
            />
            <div
                :class="['dropdown-item', {'active':item == selected}]"
                v-for="(item, i) in filteredData"
                @click="change(item)"
            >
                <slot :item="item">{{item}}</slot>
            </div>
        </Dropdown>
    </div>
</template>

<script>
    /**
     * Recommended usage: with slots - this way you can define your own way of structuring dropdown items
     */
    export default {
        name: "Select",
        props:{
            list:{
                type:Array,
                required:true,
                description: 'Array of strings/integers - selectable options for select dropdown',
            },
            selected:{
                type:String|Number|Object,
                required:false,
                default:null,
                description: 'Selected item value'
            },
            isSearchable:{
                type:Boolean,
                required:false,
                default:false,
                description: 'If provided as true - select will be searchable on click'
            },
        },

        data(){
            return {
                inputValue:'',

                // this.data copy, which is filtered based on inputValue
                filteredData:[],

                inputFocused: false,
            }
        },

        methods:{
            // Focuses search field if isSearchable is true and click on component is registered
            focusSearchField(){

            },

            changeSelection(){

            },

            showDropdown(){

            },

            change(item){
                // Emits change event to parent with data
                this.$emit('change', item);

                this.$nextTick(()=>{
                    // Close dropdown
                    this.$refs.dropdown.close();
                });

            },

            focus(){
                this.inputFocused = true;
                this.filteredData = this.list;
            },

            blur(){
                this.inputFocused = false;
            },
        },

        watch:{
            // Change selection on input
            inputValue:function(val){
                this.$nextTick(()=>{
                    console.log(val);
                   this.filteredData = this.list.filter(f=>f.toLowerCase().indexOf(val.toLowerCase()) !==-1);
                });
            },
        },

        created() {

            // Assign list  data  to filteredData
            this.filteredData = this.list;

        }
    }
</script>

<style scoped>

</style>