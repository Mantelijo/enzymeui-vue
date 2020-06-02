<template>
    <div class="select-dropdown">
        <Dropdown
            no-animation
            y-offset="3"
            manual-close
            menu-classes="w-100 py-0"
            ref="dropdown"
            class="w-100"
        >
            <div
                @keydown.up="arrowUpEvent"
                @keydown.down="arrowDownEvent"
                @keydown.enter="selectSilently"
                tabindex="-1"
                class="select-dropdown-placeholder form-control h-auto input w-100"
                slot="button"
                @click="buttonClick">

                <slot name="placeholder" :selected-item="selectedItem"></slot>
                <input class="input invisible" v-model="inputValue" v-if="showFilterInput">

            </div>
            <div ref="items">
                <div
                        :class="['dropdown-item', {'active':item === selectedItem || item === silentlySelectedItem}]"
                        v-for="(item, i) in filteredData"
                        @click="change(item)"
                        @mouseover="silentlySelectedItem = item"
                >
                    <slot name="default" :item="item" :is-selected="item === selectedItem">{{item}}</slot>
                </div>
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
            data:{
                type:Array,
                required:true,
                description: 'Array of strings/integers - selectable options for select dropdown. Should be array of Numbers|Strings|Objects',
            },
            selected:{
                type:String|Number|Object,
                required:false,
                default:null,
                description: 'Selected item from data array. This property is not required, but if provided - will be prioritized over internal selected item value of component'
            },
            isSearchable:{
                type:Boolean,
                required:false,
                default:false,
                description: 'If provided as true - select will be searchable on click and user will be able to filter through the data'
            },
        },

        data(){
            return {
                // Filtering input value
                inputValue:'',

                // this.data copy, which is filtered based on inputValue
                filteredData:[],

                // Filter input state
                inputFocused: false,

                // Selected item (component scope). Value will be emitted via @change to parent.
                selectedItem:null,

                // Indicates if dropdown state is open/closed
                dropdownStateClosed:true,

                // Silently selected item value. Value is selected on hover
                silentlySelectedItem:null,
            }
        },

        computed:{
            showFilterInput(){
                return this.isSearchable === true && this.dropdownStateOpen;
            },

            selectedItemIndex(){
                return this.data.indexOf(this.selectedItem);
            },

            silentlySelectedItemIndex(){
                return this.data.indexOf(this.silentlySelectedItem);
            },
        },

        methods:{
            // Focuses search field if isSearchable is true and click on component is registered
            focusSearchField(){

            },


            changeSelection(){

            },

            change(item){
                // Emits change event to parent with data
                this.$emit('change', item);

                // Updating value of component
                this.selectedItem = item;

                // Cleanup silently selected item and set to current
                // So when arrow keys are used we start going from current item
                this.silentlySelectedItem = item;

                this.$nextTick(()=>{
                    // Close dropdown
                    this.$refs.dropdown.close();
                });

            },

            buttonClick(e){
                this.$nextTick(()=>{
                    if(!this.$refs.dropdown.closed){
                        // Stop event bubbling up, because it will automatically set dropdown to open on
                        // Dropdown toggle method as it is being called on component click
                        e.stopPropagation();

                        // Close dropdown on button click when dropdown is open
                        this.$refs.dropdown.close();
                    }
                });
            },

            focus(){
                this.inputFocused = true;
                this.filteredData = this.data;
            },

            blur(){
                this.inputFocused = false;
            },

            filterSelection(){
                let f = this.inputValue;
                this.filteredData = this.data.filter(f => f.toLowerCase().indexOf(val.toLowerCase()) !== -1);
            },

            // Enter button functionality
            selectSilently(){
                if(!this.dropdownStateClosed && this.silentlySelectedItem !== null){
                    this.change(this.silentlySelectedItem);
                }
            },

            // Selects next/prev item from menu and focuses that item
            nextPrevItemFromData(indexShift){
                let si = this.silentlySelectedItemIndex;
                let nextIndex = 0;
                if(si!==-1) {
                    // Down the list
                    nextIndex = Math.max(0, si + indexShift);
                    if (indexShift > 0) {
                        // Up the list
                        nextIndex = Math.min(this.data.length - 1, si + indexShift);
                    }
                }
                // Select item via index
                this.silentlySelectedItem = this.data[nextIndex];

                // Make silentlySelectedItem's html visible in viewport
                this.$refs.items.children[nextIndex].scrollIntoView({
                    // Prevents page of jumping and scrolls only dropdown menu
                    block: 'nearest',
                });
            },

            // Select dropdown menu events to select items from data
            arrowUpEvent(e){
                if(this.dropdownStateClosed){return;}
                // Disables scroll
                e.preventDefault();

                // Set previous item (up in the list)
                this.nextPrevItemFromData(-1);
            },

            arrowDownEvent(e){
                if(this.dropdownStateClosed){return;}
                // Disables scroll
                e.preventDefault();

                // Set next item (down in the list)
                this.nextPrevItemFromData(+1);
            },
        },

        watch:{
            // Change selection on input
            inputValue:function(val){
                if(this.inputFocused) {
                    this.$nextTick(this.filterSelection);
                }
            },

            // Prioritize property value over component value of selected item
            selected:function(val){
                this.selectedItem = val;
            },
        },

        created() {
            // Assign data to filteredData
            this.filteredData = this.data;

            // Some parent level control of selected item
            this.selectedItem = this.selected;

        },

        mounted() {
            // Watch dropdown state
            this.$watch(()=>this.$refs.dropdown.closed, (val)=>{
                this.dropdownStateClosed = val;

                // Cleanup silently selected item on close
                if(val === true){
                    this.silentlySelectedItem = this.selectedItem;
                }
            });
        }
    }
</script>

<style scoped>

</style>