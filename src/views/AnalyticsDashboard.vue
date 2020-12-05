<template>
    <div>
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
            <div class="col-sm-6 mt-5">
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
                            <template #default="{row}">
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
            <div class="col-sm-6 mt-5">
                <Card body-classes="p-0" header-classes="d-flex flex-row align-items-center justify-content-between">
                    <template #header>
                        <div>
                            Top referrers
                        </div>
                        <div>
                            <Select :data="['Last 7 Days', 'Last 14 Days', 'Last Month']" selected="Last 7 Days"/>
                        </div>
                    </template>
                    <DataTable :headers="referrersTable.headers" :data="referrersTable.data">
                        <template #default="{row}">
                            <Cell v-for="(item, itemKey) in row">
                                <div v-if="itemKey === 0" class="d-flex flex-row align-content-center">
                                    <span v-html="item.icon"></span>
                                    <span class="ml-3">
                                        <a href="#">{{item.url}}</a>
                                    </span>
                                </div>
                                <div v-else-if="itemKey === 2">
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
                </Card>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-3 mt-5" v-for="item in infoCols">
                <Card>
                    <template #default>
                        <div class="row align-items-center align-content-center">
                            <div class="col-6">
                                <div
                                    style="height: 100px;width:100px;display: block"
                                    :class="[`bg-${item.color}-light rounded p-3 text-${item.color}`]"
                                    v-html="item.icon"></div>
                            </div>
                            <div class="col-6">
                                <div class="font-size-125 font-weight-bold">{{ item.title }}</div>
                                <div class="font-size-75 color-gray-600">
                                    In the last 7 day
                                </div>
                                <div :class="[`mt-3 text-${item.color} font-size-200 font-weight-bold`]">
                                    {{ item.value }}
                                </div>
                            </div>
                        </div>
                    </template>
                </Card>
            </div>
        </div>
    </div>

</template>

<script>
import icons from './../helpers/icons';
export default {
    name: "AnalyticsDashboard",

    data() {
        return {
            mostVisitedPagesTable: {
                headers: [
                    'Page',
                    'Views',
                    null
                ],
                data: [
                    ['/shopping-cart', 13204, +12],
                    ['/how-to-install-outlook', 12923, -23],
                    ['/best-page-in-website', 9434, +343],
                    ['/en/learn-mandarin-language', 2394, +12],
                    ['/en/pdf-download', 435, -83],
                ]
            },

            referrersTable:{
                headers:[
                    'Website',
                    'Visitors',
                    null,
                ],
                data:[
                    [{icon:icons.Facebook, url:'https://facebook.com'}, 14506, -12],
                    [{icon:icons.Reddit, url:'https://reddit.com'}, 9563, +7],
                    [{icon:icons.Pinterest, url:'https://pinterest.com'}, 3523, -59],
                    [{icon:icons.Twitter, url:'https://twitter.com'}, 1876, -76],
                    [{icon:icons.YCombinator, url:'https://news.ycombinator.com'}, 998, -12],
                ]
            },

            infoCols:[
                {
                    title:'Sessions',
                    value:"65'345",
                    icon:icons.Activity,
                    color:'primary',
                },
                {
                    title:'Visitors',
                    value:"58'893",
                    icon:icons.Users,
                    color:'secondary',
                },
                {
                    title:'Pageviews',
                    value:"430'452",
                    icon:icons.Eye,
                    color:'warning',
                },
                {
                    title:'Sales',
                    value:"$1532",
                    icon:icons.Cash,
                    color:'success',
                },
            ],

            visitsChart:[

            ]
        }
    },

    computed:{
    }
}
</script>

<style scoped>

</style>