<template>
    <Card>
        <template #header>
            File drag and drop uploader
        </template>
        <div>
            <Dropzone v-slot:default="{items, removeFile, active, browse}" ref="dropzone" @change="files = $event">
            </Dropzone>
        </div>

        <div v-if="files.length > 0">
        <div class="mt-4">These are the files that you have added:</div>
        <ul>
            <li v-for="file in files">{{file.name}}</li>
        </ul>
        </div>
    </Card>
</template>

<script>
export default {
    name: "FileDropzone",

    data(){
        return {
            files:[],
        }
    },
}
</script>

<style scoped>

</style>