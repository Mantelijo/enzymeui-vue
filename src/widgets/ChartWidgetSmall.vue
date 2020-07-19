<template>
    <Card>
        <div class="d-flex flex-column align-items-center">
            <div class="d-flex flex-lg-row align-items-center flex-column justify-content-center">
                <span class="font-size-125 font-weight-bold color-gray-800 mb-lg-0 mb-3 text-center">
                    <slot></slot>
                </span>
                <div class="d-flex flex-row align-items-center ml-lg-3 ml-sm-0" >
                    <slot name="icon"></slot>
                    <slot name="icon-text"></slot>
                </div>
            </div>
            <div class="mt-3 w-100 position-relative">
                <Chart :config="chartConfig"/>
            </div>
        </div>
    </Card>
</template>

<script>
    export default {
        name: "ChartWidgetSmall",

        props:['chartConfig']
    }
</script>

<style scoped>

</style>