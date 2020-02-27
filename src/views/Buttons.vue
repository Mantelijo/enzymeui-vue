<template>
    <div>
        <Card>
            <template v-slot:header>
                Normal buttons
            </template>
            <div class="showcase-wrapper">
                <Button class="demo-btn" type="default">Default</Button>
                <Button class="demo-btn" type="primary">Primary</Button>
                <Button class="demo-btn" type="secondary">Secondary</Button>
                <Button class="demo-btn" type="success">Success</Button>
                <Button class="demo-btn" type="info">Info</Button>
                <Button class="demo-btn" type="warning">Warning</Button>
                <Button class="demo-btn" type="danger">Danger</Button>
            </div>
        </Card>

        <Card class="mt-5">
            <template v-slot:header>
                Outline buttons
            </template>
            <div class="showcase-wrapper">
                <Button class="demo-btn" type="outline-default">Default</Button>
                <Button class="demo-btn" type="outline-primary">Primary</Button>
                <Button class="demo-btn" type="outline-secondary">Secondary</Button>
                <Button class="demo-btn" type="outline-success">Success</Button>
                <Button class="demo-btn" type="outline-info">Info</Button>
                <Button class="demo-btn" type="outline-warning">Warning</Button>
                <Button class="demo-btn" type="outline-danger">Danger</Button>
            </div>
        </Card>

        <Card class="mt-5">
            <template v-slot:header>
                Large buttons
            </template>
            <div class="showcase-wrapper">
                <Button class="demo-btn" type="default" size="lg">Default</Button>
                <Button class="demo-btn" type="primary" size="lg">Primary</Button>
                <Button class="demo-btn" type="secondary" size="lg">Secondary</Button>
                <Button class="demo-btn" type="success" size="lg">Success</Button>
                <Button class="demo-btn" type="info" size="lg">Info</Button>
                <Button class="demo-btn" type="warning" size="lg">Warning</Button>
                <Button class="demo-btn" type="danger" size="lg">Danger</Button>
            </div>
        </Card>

        <Card class="mt-5">
            <template v-slot:header>
                Small buttons
            </template>
            <div class="showcase-wrapper">
                <Button class="demo-btn" type="default" size="sm">Default</Button>
                <Button class="demo-btn" type="primary" size="sm">Primary</Button>
                <Button class="demo-btn" type="secondary" size="sm">Secondary</Button>
                <Button class="demo-btn" type="success" size="sm">Success</Button>
                <Button class="demo-btn" type="info" size="sm">Info</Button>
                <Button class="demo-btn" type="warning" size="sm">Warning</Button>
                <Button class="demo-btn" type="danger" size="sm">Danger</Button>
            </div>
        </Card>
        <Card class="mt-5 mb-5">
            <template v-slot:header>
                Buttons with icons
            </template>
            <div class="showcase-wrapper">
                <Button class="demo-btn" type="default" >
                    <fa icon="burn"></fa>
                    Default
                </Button>
                <Button class="demo-btn" type="primary" >
                    <fa icon="book"></fa>
                    Primary
                </Button>
                <Button class="demo-btn" type="secondary" >
                    <fa icon="book"></fa>
                    Secondary
                </Button>
                <Button class="demo-btn" type="success" >
                    <fa icon="air-freshener"></fa>
                    Success
                </Button>
                <Button class="demo-btn" type="info" >
                    <fa icon="shoe-prints"></fa>
                    Info
                </Button>
                <Button class="demo-btn" type="warning" >
                    <fa icon="calculator"></fa>
                    Warning
                </Button>
                <Button class="demo-btn" type="danger" >
                    <fa icon="keyboard"></fa>
                    Danger
                </Button>
            </div>
            <div class="showcase-wrapper mt-2">

                <Button class="demo-btn" type="default" >
                    <fa icon="burn"></fa>
                </Button>
                <Button class="demo-btn" type="primary" >
                    <fa icon="book"></fa>
                </Button>
                <Button class="demo-btn" type="success" >
                    <fa icon="air-freshener"></fa>
                </Button>
                <Button class="demo-btn" type="info" >
                    <fa icon="shoe-prints"></fa>
                </Button>
                <Button class="demo-btn" type="warning" >
                    <fa icon="calculator"></fa>
                </Button>
                <Button class="demo-btn" type="danger" >
                    <fa icon="keyboard"></fa>
                </Button>
            </div>
        </Card>

    </div>
</template>

<script>

    import {library} from '@fortawesome/fontawesome-svg-core';
    import {faBurn, faBook, faAirFreshener, faShoePrints, faCalculator, faKeyboard} from '@fortawesome/free-solid-svg-icons';

    library.add(faBurn, faBook, faAirFreshener, faShoePrints, faCalculator, faKeyboard);


    export default {
        name: "Buttons"
    }
</script>

<style scoped lang="scss">
    .showcase-wrapper{
        .demo-btn{
            margin: 5px 10px;
        }
    }
</style>