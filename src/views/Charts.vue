<template>
    <div>
        <div class="row">
<!--            Widget chart 1-->
            <div class="col-sm-4">
                <ChartWidgetSmall :chart-config="widgetChartVisitors" class="mb-5">
                    <template #icon>
                        <svg xmlns="http://www.w3.org/2000/svg"
                             class="rounded-circle bg-gray-200 p-1 stroke-success" width="40" height="40"
                             viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round"
                             stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z"/>
                            <line x1="17" y1="7" x2="7" y2="17"/>
                            <polyline points="8 7 17 7 17 16"/>
                        </svg>
                    </template>
                    <template #icon-text>
                        <span class="text-success font-size-150 font-weight-bold ml-3">+78%</span>
                    </template>
                    <template #default>Site Visitors by hour</template>
                </ChartWidgetSmall>
            </div>
<!--            Widget chart 2-->
            <div class="col-sm-4">
                <ChartWidgetSmall :chart-config="widgetChartUsers" class="mb-5">
                    <template #icon>
                        <svg xmlns="http://www.w3.org/2000/svg"
                             class="rounded-circle bg-gray-200 p-1 stroke-info" width="40" height="40"
                             viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round"
                             stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z"/>
                            <circle cx="9" cy="7" r="4" />
                            <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                            <path d="M16 11h6m-3 -3v6" />
                        </svg>
                    </template>
                    <template #icon-text>
                        <span class="text-info font-size-150 font-weight-bold ml-3">+64%</span>
                    </template>
                    <template #default>New users by month</template>
                </ChartWidgetSmall>
            </div>
<!--            Widget chart 3-->
            <div class="col-sm-4">
                <ChartWidgetSmall :chart-config="widgetChartSales" class="mb-5">
                    <template #icon>
                        <svg xmlns="http://www.w3.org/2000/svg"
                             class="rounded-circle bg-gray-200 p-1 stroke-danger" width="40" height="40"
                             viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round"
                             stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z"/>
                            <rect x="7" y="9" width="14" height="10" rx="2"/>
                            <circle cx="14" cy="14" r="2"/>
                            <path d="M17 9v-2a2 2 0 0 0 -2 -2h-10a2 2 0 0 0 -2 2v6a2 2 0 0 0 2 2h2"/>
                        </svg>
                    </template>
                    <template #icon-text>
                        <span class="text-danger font-size-150 font-weight-bold ml-3">-13%</span>
                    </template>
                    <template #default>Sales by month</template>
                </ChartWidgetSmall>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-6">
                <Card class="gradient-primary-white border-0">
                    <div>
                        <h3 class="text-white">Monthly revenue</h3>
                    </div>
                    <div>
                        <Chart :config="config"/>
                    </div>
                </Card>
            </div>
        </div>
        <Nav class="mt-5">
            <NavItem title="Swx">
                <div>Test test</div>
            </NavItem>
            <NavItem title="Swx2">
                <div>Test test sdfsdsdf</div>
            </NavItem>
        </Nav>
    </div>
</template>

<script>
    import ChartWidgetSmall from "../widgets/ChartWidgetSmall";
    export default {
        name: "Charts",
        components: {ChartWidgetSmall},
        data() {

            // Demo helper
            const dataGenerator = (from, to, amount) => {
                let data = [];

                for(let i=0;i<amount;i++){
                    data.push(Math.floor(Math.max(from + Math.random()*from, Math.random()*to)));
                }

                return data;
            }

            return {
                widgetChartVisitors: {
                    type: 'line',
                    data: {
                        labels: ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00',],
                        datasets: [
                            {
                                data: dataGenerator(100, 1000, 12),
                                backgroundColor:'rgba(40,167,69,0.1)',
                                borderColor: 'rgba(40,167,69,0.8)',
                                pointBackgroundColor: 'transparent',
                                pointBorderColor: 'transparent',
                                lineTension: 0.5,
                            }
                        ],
                    },
                    options: {
                        layout: {
                            padding: 5,
                        },
                        tooltips: {
                            mode: 'nearest',
                            intersect: false,
                        },
                        // Hide axes for smaller charts
                        scales: {
                            xAxes: [{
                                display: false,
                                scaleLabel: {
                                    display: false,
                                },
                            }],
                            yAxes: [{
                                ticks: {
                                    display: false,
                                    beginAtZero: true
                                },
                                gridLines: {
                                    display: false,
                                },
                            }],
                        }
                    }
                },
                widgetChartSales: {
                    type: 'bar',
                    data:{
                        labels: ['Jan', 'Feb', 'Mat', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                        datasets: [
                            {
                                label: 'Test dataset',
                                data: dataGenerator(100, 850, 12),
                                backgroundColor: '#fe346e',
                            },
                        ],
                    },
                    options: {
                        layout: {
                            padding: 5,
                        },
                        tooltips: {
                            mode: 'nearest',
                            intersect: false,
                        },
                        // Display axes for smaller charts
                        scales: {
                            xAxes: [{
                                display: false,
                                scaleLabel: {
                                    display: false,
                                },
                            }],
                            yAxes: [{
                                ticks: {
                                    display: false,
                                    beginAtZero: true
                                },
                                gridLines: {
                                    display: false,
                                },
                            }],
                        }
                    }
                },
                widgetChartUsers: {
                    type: 'bar',
                    data:{
                        labels: ['Jan', 'Feb', 'Mat', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                        datasets: [
                            {
                                label: 'Test dataset',
                                data: dataGenerator(1000, 8500, 12),
                                backgroundColor: '#17a2b8',
                            },
                        ],
                    },
                    options: {
                        layout: {
                            padding: 5,
                        },
                        tooltips: {
                            mode: 'nearest',
                            intersect: false,
                        },
                        // Display axes for smaller charts
                        scales: {
                            xAxes: [{
                                display: false,
                                scaleLabel: {
                                    display: false,
                                },
                            }],
                            yAxes: [{
                                ticks: {
                                    display: false,
                                    beginAtZero: true
                                },
                                gridLines: {
                                    display: false,
                                },
                            }],
                        }
                    }
                },

                config: {
                    type: 'bar',
                    data: {
                        labels: ['Jan', 'Feb', 'Mat', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                        datasets: [
                            {
                                data: [
                                    5443,
                                    7434,
                                    6993,
                                    4902,
                                    4108,
                                    5923,
                                    7898,
                                    5443,
                                    7434,
                                    6993,
                                    4902,
                                    4108,
                                    5923,
                                    7898,
                                ],
                                backgroundColor: '#fff',
                                borderColor: '#fff',
                            },
                            {
                                data: [
                                    55443,
                                    57434,
                                    46993,
                                    64902,
                                    74108,
                                    25923,
                                    47898,
                                    35443,
                                    57434,
                                    66993,
                                    74902,
                                    84108,
                                    55923,
                                    47898,
                                ],
                                backgroundColor: '#fff',
                                borderColor: '#fff',
                            }
                        ]
                    },
                    options: {
                        tooltips: {
                            mode: 'nearest',
                            intersect: false,
                        },
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        },
                    }
                }
            }
        },
    }
</script>

<style scoped>

</style>