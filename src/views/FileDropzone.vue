<template>
    <Card>
        <template #header>
            File drag and drop uploader
        </template>
        <div>
            <Dropzone v-slot:default="{items}" />
        </div>
    </Card>
</template>

<script>
export default {
name: "FileDropzone"
}
</script>

<style scoped>

</style>