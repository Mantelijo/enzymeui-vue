<template>
    <Card>
        <template #header>Latest sales</template>
        <div v-for="item in demo" >

        </div>
    </Card>
</template>

<script>
    export default {
        name: "Messages",

        data(){
            return {
                demo:[
                    {
                        img:'',
                        amount:'',
                        title:'',
                        subtitle:'',

                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>