import Vue from 'vue';

import DataTable from "./DataTable";
import Row from "./Row";
import Cell from "./Cell";

const DataTablePlugin = {
    install(Vue){
        Vue.component(DataTable.name, DataTable);
        Vue.component(Row.name, Row);
        Vue.component(Cell.name, Cell);
    }
}

export default DataTablePlugin;