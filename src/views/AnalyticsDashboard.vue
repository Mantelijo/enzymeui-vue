<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-6">
                <Card>
                    Chart 1
                </Card>
            </div>
            <div class="col-sm-6">
                <Card>
                    Chart 2
                </Card>
            </div>
        </div>
        <div class="row">

            <div class="col-sm-5 mt-5">
                <Card body-classes="p-0" header-classes="d-flex flex-row align-items-center justify-content-between">
                    <template #header>
                        <div>
                            Most visited pages
                        </div>
                        <div>
                            <Select :data="['Last 7 Days', 'Last 14 Days', 'Last Month']" selected="Last 7 Days"/>
                        </div>
                    </template>
                    <template #default>
                        <DataTable show-all :headers="mostVisitedPagesTable.headers" :data="mostVisitedPagesTable.data">
                            <template #header="{sortAsc, sortDesc, sortedHeaders}">
                                <Cell is-header v-for="header in mostVisitedPagesTable.headers">
                                <span>
                                    {{ header }}
                                </span>
                                    <span v-if="mostVisitedPagesTable.headers.indexOf(header) === 1">
                                    <span
                                        @click="sortAsc(header)"
                                        :class="[sortedHeaders[header] === 'asc'?'color-gray-800 font-weight-bold':'color-gray-400', 'cursor-pointer']">
                                        &#x2191;
                                    </span>
                                    <span
                                        @click="sortDesc(header)"
                                        :class="[sortedHeaders[header] === 'desc'?'color-gray-800 font-weight-bold':'color-gray-400', 'cursor-pointer']">
                                        &#x2193;
                                    </span>
                                </span>
                                </Cell>
                            </template>
                            <template #default="{row, rowKey}">
                                <Cell v-for="(item, itemKey) in row">
                                    <div v-if="itemKey === 0" >
                                        <a href="#">{{item}}</a>
                                    </div>
                                    <div v-else-if="itemKey === 2" class="text-right">
                                        <Badge :type="item>0?'success':'danger'">
                                            {{item}}%
                                        </Badge>
                                    </div>
                                    <div v-else>
                                        {{item}}
                                    </div>
                                </Cell>
                            </template>
                        </DataTable>
                    </template>
                </Card>
            </div>
            <div class="col-sm-7 mt-5">
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: "AnalyticsDashboard",

    data() {
        return {
            mostVisitedPagesTable: {
                headers: [
                    'page',
                    'views',
                    null
                ],
                data: [
                    ['/shopping-cart', 13204, +12],
                    ['/how-to-install-outlook', 12923, -23],
                    ['/best-page-in-website', 9434, +343],
                    ['/en/learn-mandarin-language', 2394, +12],
                    ['/en/pdf-download', 435, -83],
                ]
            }
        }
    }
}
</script>

<style scoped>

</style>