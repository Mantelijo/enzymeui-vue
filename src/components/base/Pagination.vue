<template>
    <div :class="['pagination', size.length>0?`pagination-${size}`:'']">
        <div class="page-item" @click="previous" v-if="$slots['previous']">
            <span class="page-link">
                <slot name="previous"></slot>
            </span>
        </div>
        <div
                :class="['page-item', {'active': i === parseInt(currentPage)}]"
                v-for="i in middle"
                :key="i"
        >
            <span @click="change(i)" class="page-link">{{i}}</span>
        </div>
        <div class="page-item" @click="next" v-if="$slots['next']">
            <span class="page-link">
                <slot name="next"></slot>
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Pagination",

        props:{
            pages:{
                type:Number,
                required:true,
                default:1,
                description: 'Total number of pages'
            },
            value:{
                type:Number,
                required:false,
                default:1,
                description: 'Currently selected page'
            },
            size:{
                type:String,
                required:false,
                default:'',
                validator(val){
                    if(val.length > 0 ) {
                        return ['lg', 'sm'].indexOf(val) !== -1;
                    }
                    // Disable errors on non provided values
                    return true;
                },
                description: 'Sized bootstrap pagination: lg or sm for large and small respectively',
            },
            threshold:{
                type:Number,
                default:3,
                required:false,
            }
        },

        data(){
            return {
                middleCalculated:false,
                middle:[],
            }
        },

        computed:{
            // First block for pagination
            first(){

            },

            currentPage(){
                return this.value;
            },
        },

        methods:{
            change(pageNum){
                this.$emit('input', pageNum);
            },

            previousAvailable(){
                return this.currentPage - 1 > 0;
            },

            previous(){
                if(this.previousAvailable()){
                    this.change(this.currentPage-1);
                }
            },

            nextAvailable(){
                return this.currentPage + 1 <= parseInt(this.pages);
            },

            next(){
                if(this.nextAvailable()){
                    console.log(this.currentPage, "DOes work!");
                    this.change(this.currentPage+1);
                }
            },

            // This function is the key for creating smooth experience,
            // middle page numbers are recalculated only when
            // currentPage number reaches an edge
            recalculateMiddle(){
                let list = [];
                if(this.middleCalculated === false || this.currentPage === this.middle[0]-1 || this.currentPage === this.middle[this.middle.length-1]+1) {
                    for (let i = Math.max(1, this.currentPage - this.threshold); i <= Math.min(this.pages, this.currentPage + this.threshold); i++) {
                        list.push(i);
                    }
                    this.middleCalculated = true;
                }
                else{
                    list = this.middle;
                }
                this.middle = list;
            }
        },

        watch:{
            // When current page is changed we want to recalculate middle pages
            value(){
                this.$nextTick(this.recalculateMiddle);
            }
        },

        mounted() {
            // init
            this.recalculateMiddle();
        },
    }
</script>

<style scoped>

</style>