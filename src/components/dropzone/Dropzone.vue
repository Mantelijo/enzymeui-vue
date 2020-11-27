<template>
    <div :class="['dropzone p-5 rounded', {'active':active}]" ref="dropzone">
        <input type="file" multiple @change="handleFileInput" />
        <div class="d-flex flex-column align-items-center">
            <slot :items="items" :active="active">
                <div v-if="!active">
                    <div class="cursor-pointer">
                        Drop files or <u>click here</u> to browse
                    </div>
                    <div v-for="file in items">
                        <b>{{file.name}}</b>
                        <span>{{formatFileSize(file.size)}}</span>
                    </div>
                </div>
                <div v-else>
                    Drop it like it's hot!
                </div>
            </slot>
        </div>
    </div>
</template>

<script>
import {formatFileSize} from "@/helpers/helpers";

export default {
    name: "Dropzone",

    data(){
        return {
            items:[],
            active:false,
        }
    },

    methods:{
        handleFileInput(e){
            let files = e.target.files;

            if(files.length > 0){
                files.forEach(f=>this.handleFile(f));
            }
        },

        enter(e){
            if(this.active === false){
                this.active = true;
            }
            console.log("entering");
        },

        leave(e){
            if(this.active === true){
                this.active = false;
            }
            console.log("leaving");
        },

        handleDrop(e){
            e.preventDefault();

            let files = e.dataTransfer.files;

            if(files.length > 0){
                files.forEach(f=>this.handleFile(f));
            }
        },

        handleFile(file){
            this.items.push(file);
        },

        formatFileSize,
    },

    mounted(){
        let dropzone = this.$refs.dropzone;

        if(dropzone!==null){
            // Enter events
            ['dragenter', 'dragover'].forEach(eventName => {
                dropzone.addEventListener(eventName, this.enter);
            });
            // Leave events
            ['dragleave', 'drop'].forEach(eventName => {
                dropzone.addEventListener(eventName, this.leave);
            });

            // File drop
            dropzone.addEventListener('drop', this.handleDrop);
        }
    },
}
</script>

<style scoped>

</style>