<template>
    <div class="datatable" >
        <table class="table" :key="key">
            <thead>
                <tr class="datatable-row">
                    <slot
                        name="header"
                        :sort-asc="sortFnFactory('asc')"
                        :sort-desc="sortFnFactory('desc')"
                        :sort-none="sortFnFactory(null)"
                        :sorted-headers="this.sortColumns"
                    >
                        <Cell
                                v-for="header in headers"
                                is-header
                        >
                            <div v-if="header !== null" class="d-flex flex-row justify-content-left">
                                <div>
                                    {{header}}
                                </div>
                                <div class="d-flex justify-content-left" v-if="showFilterButtons">
                                    <div class="mx-1">
                                        <fa icon="caret-up" :class="['sort-icon', {'active':sortColumns[header] === 'asc'}]" @click="sortFnFactory('asc')(header)"></fa>
                                    </div>
                                    <div>
                                        <fa icon="caret-down" :class="['sort-icon', {'active':sortColumns[header] === 'desc'}]" @click="sortFnFactory('desc')(header)"></fa>
                                    </div>
                                </div>
                            </div>
                            <div v-else></div>
                        </Cell>
                    </slot>
                </tr>
            </thead>
            <tbody>
                <tr
                    class="datatable-row"
                    v-for="(row, key) in displayData"
                >
                    <slot name="default" :row="row" :row-key="data.indexOf(row)" :row-key-viewport="key">
                        <Cell v-for="cellData in objectToValuesArray(row)">{{cellData}}</Cell>
                    </slot>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import {generateKey, descSortReturn, ascSortReturn} from "../../helpers/helpers";

    /**
     * default slot props:
     *      row - current row object data,
     *      rowKey - key (index) of row in original data
     *      rowKeyViewport - row number based on displayed data
     */
    export default {
        name: "DataTable",
        props:{
            data:{
                type:Array,
                required:true,
                description: 'Array of Array (rows x cols) data points that will be rendered as table rows. Array elements can be of any type, they will be provided as scoped slot prop in row slot.',
            },
            headers:{
                type:Array,
                required:false,
                description: 'Array of strings (can be other types too) that will be used to display headers. Will be provided as slot prop for header slot.'
            },
            perPage:{
                type:Number|String,
                required:false,
                default:15,
                description: 'Number of rows per page'
            },
            showAll:{
                type:Boolean,
                required:false,
                default:false,
                description: 'If set to true, showSize, currentPage and other pagination props will be ignored and all table rows will be displayed',
            },
            currentPage:{
                type: Number,
                required:false,
                default:1,
                description: 'Current page that should be displayed'
            },
            searchKeyword:{
                type:String,
                required:false,
                default:'',
                description: 'If searchKeyword is provided - table rows will be filtered based on provided value. If value is available in any of row elements - row will be shown, otherwise - hidden',
            },
            showFilterButtons:{
                type:Boolean,
                required:false,
                default:false,
                description: 'If set to true - table head rows will show ordering buttons. Default is false.'
            },
        },

        data(){
            return {
                // For redrawing html
                key:generateKey(),

                // Filters of datatable used to sort data
                filters:[],

                // Data used for displaying datatable
                displayData:[],

                // Sort based on selected header (asc, desc, none)
                sortColumns:{},
            };
        },

        methods:{

            objectToValuesArray(obj){
                return Object.values(obj);
            },

            // Main function which handles all data updates
            updateData(){
                let data = this.data;

                // Sort by searchKeyword
                if(this.searchKeyword.toString().length > 0){
                    data = this.searchData(this.searchKeyword, data);
                }

                // Sorting of data happens here
                for(let header in this.sortColumns){
                    if(this.sortColumns[header] !== null){
                        data = this.sort(header, this.sortColumns[header], data);
                    }
                }

                // Paginating data
                data = this.paginateData(data);

                // Update display data
                this.displayData = data;
                this.key = generateKey();
            },

            // Sort function based on sortOperation string (for sort method)
            getSortFunction(sortOperation){
                switch (sortOperation) {
                    case 'desc':
                        return descSortReturn;
                    case 'asc':
                        return ascSortReturn;
                    default:
                        return null;
                }
            },

            /**
             *
             * @param header from headers array
             * @param sortOperation descSort, asc, null
             * @param data
             */
            sort(header, sortOperation, data){
                let sortFn = this.getSortFunction(sortOperation);

                // No need to sort on null operation
                if(sortFn === null){
                    return data;
                }

                let i = this.headers.indexOf(header);
                if(i !== -1){
                    // Sort based on index
                    return Object.values(data).sort((a,b)=>{
                        return sortFn(Object.values(a)[i],Object.values(b)[i]);
                    });
                }

                // Return data unsorted if sorting was not required
                return data;
            },

            // Perform sorting based on provided header
            addSortByHeader(header, sortOperation){
                if(this.headers.indexOf(header) === -1){
                    console.warn(`${header} does not exist in provided headers array ${this.headers.toString()}`);
                }
                else{
                    if(this.sortColumns[header] !== sortOperation) {
                        this.sortColumns[header] = sortOperation;
                        this.updateData();
                    }
                }
            },

            /**
             * factory function for slot props
             * @param sortOperation
             * @returns {function(...[*]=)}
             */
            sortFnFactory(sortOperation){
                return (header) => {
                    // If same sorting operation is provided 2 times - remove sorting at all
                    if(this.sortColumns[header] === sortOperation){
                        this.addSortByHeader(header, null);
                    }
                    else{
                        this.addSortByHeader(header, sortOperation);
                    }
                }
            },

            paginateData(data){
                if(this.showAll === true){
                    return data;
                }
                else{
                    let perPage = parseInt(this.perPage);
                    let currentPage = parseInt(this.currentPage);
                    let start = Math.max(0, currentPage-1) * perPage;
                    let end = Math.min(data.length, currentPage*perPage);
                    return data.slice(start, end);
                }
            },

            // Filter data based on provided keyword
            searchData(keyword, data){
                keyword = keyword.toString().toLowerCase();
                return Object.values(data).filter(row=>{
                    // If keyword is not present in cellItem remove the row from search data
                    let shouldInclude = false;
                    Object.values(row).forEach(cellItem=>{
                         if(cellItem.toString().toLowerCase().indexOf(keyword) !== -1){
                             shouldInclude = true;
                         }
                    });
                    return shouldInclude;
                });
            },
        },

        created(){
            this.updateData();
        },

        watch:{
            searchKeyword(){
                this.updateData();
            },
            currentPage(){
                this.updateData();
            },
            perPage(){
                this.updateData();
            }
        }
    }
</script>

<style scoped>

</style>