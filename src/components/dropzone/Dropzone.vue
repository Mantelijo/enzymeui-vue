<template>
    <div :class="['dropzone p-5 rounded', {'active':active}]" ref="dropzone" @click="browseFilesOnClick?clickFile():null;">
        <input type="file" multiple @change="handleFileInput" ref="fileInput" />
        <div class="dropzone-content">
            <slot :items="files" :active="active" :remove-file="removeFile" :browse="clickFile">
                <div class="d-flex flex-column align-items-center text-center">
                    <div v-if="!active">
                        <p class="cursor-pointer m-0">
                            Drag and Drop files or <u @click="clickFile">click here</u> to browse
                        </p>
                        <div v-for="(file, key) in files" class="my-1">
                            <b>{{file.name}}</b>
                            &nbsp;
                            <span>{{formatFileSize(file.size)}}</span>
                            &nbsp;

                            <span @click="removeFile(key)" class="hover-underline cursor-pointer">(remove)</span>
                        </div>
                    </div>
                    <div v-else>
                        Drop it like it's hot!
                    </div>
                </div>
            </slot>
        </div>
    </div>
</template>

<script>
import {formatFileSize} from "@/helpers/helpers";

export default {
    name: "Dropzone",

    props:{
        browseFilesOnClick:{
            type:Boolean,
            required:false,
            default:false,
            description: 'If set to true browse files window will be opened when clicking on dropzone.'
        }
    },

    data(){
        return {
            // Array of added files
            files:[],

            // Whether currently something is being dragged over dropzone.
            active:false,
        }
    },

    methods:{
        // Handle input[type=file]
        handleFileInput(e){
            let files = e.target.files;

            if(files.length > 0){
                files.forEach(f=>this.handleFile(f));
            }
        },

        // Drag enter events
        enter(e){
            e.preventDefault();
            if(this.active === false){
                this.active = true;
            }
        },

        // Drag leave events
        leave(e){
            e.preventDefault();

            // Prevent child event triggers
            if(e.target !== this.$refs.dropzone){
                return;
            }

            if(this.active === true){
                this.active = false;
            }
        },

        // Handle dropped files
        handleDrop(e){
            e.preventDefault();

            let files = e.dataTransfer.files;

            if(files.length > 0){
                files.forEach(f=>this.handleFile(f));
            }
        },

        // Push single file to data property
        handleFile(file){
            this.files.push(file);
        },

        // Helper to format file size
        formatFileSize,

        // Emulate input click
        clickFile(){
            this.$refs.fileInput.click();
        },

        // Remove file from current items list based on provided index
        removeFile(index){
            this.files = this.files.filter(item=>this.files.indexOf(item) !== index);
        },
    },

    mounted(){
        let dropzone = this.$refs.dropzone;

        if(dropzone!==null){
            // Enter events
            ['dragenter', 'dragover'].forEach(eventName => {
                dropzone.addEventListener(eventName, this.enter);
            });
            // Leave events
            ['drop', 'dragleave'].forEach(eventName => {
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