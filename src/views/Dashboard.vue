<template>
    <div class="row">
        <div class="col-sm-10 offset-sm-1 col-md-8 col-lg-6 offset-md-2 offset-lg-3">
            <TaskList/>
        </div>
    </div>
</template>

<script>
    import TaskList from "../widgets/TaskList";
    export default {
        name: "Dashboard",
        components: {TaskList}
    }
</script>

<style scoped>

</style>