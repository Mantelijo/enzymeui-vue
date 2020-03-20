<template>
    <div :class="['progress', typeClass]">
        <div
                :class="['progress-bar']"
                :style="{'width':progress+'%'}"
                role="progressbar"
                :aria-valuenow="progress"
                aria-valuemin="0"
                aria-valuemax="100"
        >
            <span v-if="label.length > 0">{{label}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProgressBar",

        props:{
            progress:{
                type:Number,
                required:true,
                description: 'Progress of progress bar in %'
            },
            label:{
                type:String,
                required:false,
                default:'',
                description: 'Label for progress bar. Will be placed inside progress area. Best'
            },
            type:{
                type:String,
                default:'primary',
                required:false,
                description: 'One of available bootstrap button types: primary, default, success, info, warning, danger',
            }
        },

        computed:{
            typeClass(){
                return `progress-${this.type}`;
            },
        }
    }
</script>

<style scoped>

</style>