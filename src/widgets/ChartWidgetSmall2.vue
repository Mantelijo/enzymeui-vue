<template>
    <Card>
        <div class="d-flex flex-row align-items-center">
            <div class="col-4 d-flex flex-column">
                <div class="font-size-75 font-weight-bold color-gray-500">
                    <slot name="title"></slot>
                </div>
                <div class="font-size-150 font-weight-bold">
                    <slot name="numbers"></slot>
                </div>
            </div>
            <div class="col-8">
                <Chart :config="chartConfig"/>
            </div>
        </div>
    </Card>
</template>

<script>
    export default {
        name: "ChartWidgetSmall2",

        props:['chartConfig']
    }
</script>

<style scoped>

</style>