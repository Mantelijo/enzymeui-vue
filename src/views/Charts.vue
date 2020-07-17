<template>
    <div>
        <div class="row">
            <div class="col-sm-6">
                <Card class="bg-primary">
                    <div>
                        <h3 class="text-white">Monthly revenue</h3>
                    </div>
                    <div>
                        <Chart :config="config"/>
                    </div>
                </Card>
            </div>
            <div class="col-sm-6">
                <Card class="bg-primary">
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
            <NavItem title="Swx"><div>Test test</div></NavItem>
            <NavItem title="Swx2"><div>Test test sdfsdsdf</div></NavItem>
        </Nav>
    </div>
</template>

<script>
    export default {
        name: "Charts",

        data() {
            return {
                config: {
                    type: 'bar',
                    data: {
                        labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July'],
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
                                ],
                                backgroundColor: '#fff',
                                borderColor: '#fff',
                            }
                        ]
                    },
                    options: {
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        },
                        legend: {
                            display: false,
                        }
                    }
                }
            }
        },
    }
</script>

<style scoped>

</style>