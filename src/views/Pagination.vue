<template>
    <Card class="">
        <template slot="header">Pagination</template>
        <h5>Simple Pagination with 100 pages</h5>
        <Pagination :pages="100" v-model="selectedPage1">
            <span slot="next">Next</span>
            <span slot="previous">Prev</span>
        </Pagination>
        <h5 class="mt-5">Small Pagination with 100 pages</h5>
        <Pagination size="sm" :pages="100" v-model="selectedPage2">
            <span slot="next">Next</span>
            <span slot="previous">Prev</span>
        </Pagination>

        <h5 class="mt-5">Simple Pagination with Icons</h5>
        <Pagination :pages="100" v-model="selectedPage4">
            <span slot="previous"><fa icon="chevron-left"/></span>
            <span slot="next"><fa icon="chevron-right"/></span>
        </Pagination>
        <h5 class="mt-5">Simple Pagination with Icons and no first and last pages</h5>
        <Pagination :pages="100" v-model="selectedPage5" :show-first-page="false" :show-last-page="false">
            <span slot="previous"><fa icon="chevron-left"/></span>
            <span slot="next"><fa icon="chevron-right"/></span>
        </Pagination>
        <h5 class="mt-5">Simple Pagination with Icons and disabled pages</h5>
        <Pagination :pages="100" v-model="selectedPage6" :disabled-pages="[14, 16]">
            <span slot="previous"><fa icon="chevron-left"/></span>
            <span slot="next"><fa icon="chevron-right"/></span>
        </Pagination>
    </Card>
</template>

<script>
    export default {
        name: "Collapses",

        data(){
            return{
                selectedPage1: 30,
                selectedPage2: 50,
                selectedPage3: 40,
                selectedPage4: 40,
                selectedPage5: 15,
                selectedPage6: 15,
            }
        }
    }
</script>

<style scoped>

</style>