<template>
    <div class="datatable table">
        <table :key="key">
            <slot name="header">

            </slot>
            <tbody>
                <tr
                    class="datatable-row"
                    v-for="row in displayData"
                >
                    <slot name="default" :row="row">
                        <td
                            class="datatable-cell"
                            v-for="cell in row"
                        >
                            {{cell}}
                        </td>
                    </slot>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import {generateKey} from "../../helpers/helpers";
    import Cell from "./Cell";

    export default {
        name: "DataTable",
        components: {Cell},
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
            }
        },

        data(){
            return {
                // For redrawing html
                key:generateKey(),

                // Filters of datatable used to sort data
                filters:[],

                // Data used for displaying datatable
                displayData:[],
            };
        },

        methods:{

            updateData(){
                let data = this.data;

                // Sorting of data happens here

                this.displayData = data;
                this.key = generateKey();


            }

        },

        created(){
            this.updateData();
        }
    }
</script>

<style scoped>

</style>