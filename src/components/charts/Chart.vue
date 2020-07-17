<script>
    /**
     *  Simple ChartJS wrapper
     */
    import ChartJS from 'chart.js';
    export default {
        name: "Chart",

        props:{
            config:{
                type:Object,
                required:true,
                description: 'Chart.js constructor config properties. Please see chartjs.org for more information.'
            }
        },

        data(){
            return {
                chart:null,
            }
        },

        methods:{
            renderChart(){
                this.chart = new ChartJS(this.$refs.chart, this.config);
            }
        },

        mounted() {
            this.renderChart();
        },

        render(h){
            return h('canvas', {
                ref:'chart'
            });
        }
    }
</script>