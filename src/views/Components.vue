<template>
    <div>
        <Card>
            <template slot="header">Badges</template>
            <div>
                <h5>Simple inline badges</h5>
                <Badge type="default">A default badge</Badge>
                <Badge type="primary">A primary badge</Badge>
                <Badge type="secondary">A secondary badge</Badge>
                <Badge type="success">A success badge</Badge>
                <Badge type="info">A info badge</Badge>
                <Badge type="warning">A warning badge</Badge>
                <Badge type="danger">A danger badge</Badge>
                <Badge type="light">A light badge</Badge>
            </div>
            <div class="mt-5">
                <h5>Simple pill badges</h5>
                <Badge pill type="default">A default badge</Badge>
                <Badge pill type="primary">A primary badge</Badge>
                <Badge pill type="secondary">A secondary badge</Badge>
                <Badge pill type="success">A success badge</Badge>
                <Badge pill type="info">A info badge</Badge>
                <Badge pill type="warning">A warning badge</Badge>
                <Badge pill type="danger">A danger badge</Badge>
                <Badge pill type="light">A light badge</Badge>
            </div>
            <div class="mt-5">
                <h5>Link badges</h5>
                <Badge type="default" link="#">A default badge</Badge>
                <Badge type="primary" link="#">A primary badge</Badge>
                <Badge type="secondary" link="#">A secondary badge</Badge>
                <Badge type="success" link="#">A success badge</Badge>
                <Badge type="info" link="#">A info badge</Badge>
                <Badge type="warning" link="#">A warning badge</Badge>
                <Badge type="danger" link="#">A danger badge</Badge>
                <Badge type="light" link="#">A light badge</Badge>
            </div>
            <div class="mt-5">
                <h5>Link pill badges</h5>
                <Badge pill type="default" link="#">A default badge</Badge>
                <Badge pill type="primary" link="#">A primary badge</Badge>
                <Badge pill type="secondary" link="#">A secondary badge</Badge>
                <Badge pill  type="success" link="#">A success badge</Badge>
                <Badge pill type="info" link="#">A info badge</Badge>
                <Badge pill type="warning" link="#">A warning badge</Badge>
                <Badge pill type="danger" link="#">A danger badge</Badge>
                <Badge pill type="light" link="#">A light badge</Badge>
            </div>
            <div class="mt-5">
                <h5>Link inverse badges</h5>
                <Badge inverse type="default" link="#">A default badge</Badge>
                <Badge inverse type="primary" link="#">A primary badge</Badge>
                <Badge inverse type="secondary" link="#">A secondary badge</Badge>
                <Badge inverse  type="success" link="#">A success badge</Badge>
                <Badge inverse type="info" link="#">A info badge</Badge>
                <Badge inverse type="warning" link="#">A warning badge</Badge>
                <Badge inverse type="danger" link="#">A danger badge</Badge>
                <Badge inverse type="light" link="#">A light badge</Badge>
            </div>
        </Card>
        <Card class="mt-5">
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
            <h5 class="mt-5">Large Pagination with 100 pages</h5>
            <Pagination size="lg" :pages="100" v-model="selectedPage3">
                <span slot="next">Next</span>
                <span slot="previous">Prev</span>
            </Pagination>

            <h5 class="mt-5">Simple Pagination with Icons</h5>
            <Pagination :pages="100" v-model="selectedPage4">
                <span slot="previous"><fa icon="chevron-left" /></span>
                <span slot="next"><fa icon="chevron-right" /></span>
            </Pagination>
            <h5 class="mt-5">Simple Pagination with Icons and no first and last pages</h5>
            <Pagination :pages="100" v-model="selectedPage5" :show-first-page="false" :show-last-page="false">
                <span slot="previous"><fa icon="chevron-left" /></span>
                <span slot="next"><fa icon="chevron-right" /></span>
            </Pagination>
            <h5 class="mt-5">Simple Pagination with Icons and disabled pages</h5>
            <Pagination :pages="100" v-model="selectedPage6" :disabled-pages="[14, 16]">
                <span slot="previous"><fa icon="chevron-left" /></span>
                <span slot="next"><fa icon="chevron-right" /></span>
            </Pagination>
        </Card>
        <Card class="mt-5 progresses">
            <template slot="header">Progress bars</template>

            <h5>Simple progress bars</h5>

            <Badge type="default">Default progress bar: {{progress.default}}% </Badge>
            <ProgressBar type="default" :progress="progress.default"/>

            <Badge type="primary">Primary progress bar: {{progress.primary}}% </Badge>
            <ProgressBar type="primary" :progress="progress.primary"/>

            <Badge type="secondary">Secondary progress bar: {{progress.secondary}}% </Badge>
            <ProgressBar type="secondary" :progress="progress.secondary"/>

            <Badge type="success">Success progress bar: {{progress.success}}% </Badge>
            <ProgressBar type="success" :progress="progress.success"/>

            <Badge type="info">Info progress bar: {{progress.info}}% </Badge>
            <ProgressBar type="info" :progress="progress.info"/>

            <Badge type="warning">Warning progress bar: {{progress.warning}}% </Badge>
            <ProgressBar type="warning" :progress="progress.warning"/>

            <Badge type="danger">Danger progress bar: {{progress.danger}}% </Badge>
            <ProgressBar type="danger" :progress="progress.danger"/>

            <Button @click="shuffleProgress" type="secondary" size="sm">Shuffle</Button>
        </Card>
        <Card class="mt-5">
            <template slot="header">Tab Navs</template>

            <h5>Tab navs with full width tabs</h5>
            <Nav nav-fill :init-active-tab="1">
                <NavItem title="First tab">
                    <div>
                        <h2>This is the first tab</h2>
                    </div>
                </NavItem>
                <NavItem title="second tab">
                    <div>
                        <h2>This is the second tab</h2>
                    </div>
                </NavItem>
                <NavItem title="Third tab">
                    <div>
                        <h2>This is the third tab</h2>
                    </div>
                </NavItem>
            </Nav>

            <h5 class="mt-5">Tab navs with auto width tabs</h5>
            <Nav :init-active-tab="1">
                <NavItem title="First tab">
                    <div>
                        <h2>This is the first tab</h2>
                    </div>
                </NavItem>
                <NavItem title="second tab">
                    <div>
                        <h2>This is the second tab</h2>
                    </div>
                </NavItem>
                <NavItem title="Third tab">
                    <div>
                        <h2>This is the third tab</h2>
                    </div>
                </NavItem>
            </Nav>

            <h5 class="mt-5">Tab navs with column placed tabs</h5>
            <Nav :init-active-tab="1" nav-column>
                <NavItem title="First tab">
                    <div>
                        <h2>This is the first tab</h2>
                    </div>
                </NavItem>
                <NavItem title="second tab">
                    <div>
                        <h2>This is the second tab</h2>
                    </div>
                </NavItem>
                <NavItem title="Third tab">
                    <div>
                        <h2>This is the third tab</h2>
                        <p>
                            It has some random text and small pagination
                        </p>
                        <div>
                            <Pagination size="sm" :pages="25" v-model="fakePagination">
                                <span slot="next">Next</span>
                                <span slot="previous">Prev</span>
                            </Pagination>
                        </div>
                    </div>
                </NavItem>
            </Nav>
        </Card>
        <Card>
            <template slot="header">Some tooltips</template>
            <Button v-tooltip="'a12'">Tooltip</Button>
            <Tooltip id="a1">
                <b>Fancy tooltip</b>
                You can put any stuff in it
                <Button type="warning">Test</Button>
                <Pagination :pages="25" v-model="fakePagination"/>
            </Tooltip>
            <Button v-tooltip="'a142'">Tooltip</Button>
            <Button v-tooltip="'a1'">Tooltip</Button>
            <Button v-tooltip="'a1'">Tooltip</Button>
        </Card>
        <Card class="mt-5">
            <template slot="header">Breadcrumb</template>
            <h5>Breadcrumb with last page active</h5>
            <Breadcrumb :items="[
                {
                    page:'Home',
                    link:'/'
                },
                {
                    page:'Product',
                    link: '/product'
                },
                {
                    page:'Checkout',
                    link: '/checkout',
                    active:true,
                },
            ]" />
            <h5 class="mt-5">Breadcrumb with no page active</h5>
            <Breadcrumb :items="[
                {
                    page:'Home',
                    link:'/'
                },
                {
                    page:'First page',
                    link: '/first-page'
                },
                {
                    page:'Second page',
                    link: '/second-page',
                },
                {
                    page:'Page without a link',
                },
                {
                    page:'Last page',
                    link: '/last-page',
                },
            ]" />
        </Card>
    </div>
</template>

<script>

    import {library} from '@fortawesome/fontawesome-svg-core';
    import {faChevronLeft, faChevronRight, faHome} from '@fortawesome/free-solid-svg-icons'
    import Tooltip from "../components/tooltip/Tooltip";

    library.add(faChevronLeft, faChevronRight, faHome);

    export default {
        name: "Components",
        components: {Tooltip},
        data(){
            return{
                selectedPage1:30,
                selectedPage2:50,
                selectedPage3:40,
                selectedPage4:40,
                selectedPage5: 15,
                selectedPage6: 15,
                progress:{
                    default:10,
                    primary:20,
                    secondary:30,
                    success:40,
                    info:50,
                    warning:60,
                    danger:70,
                },
                fakePagination:1,
            };
        },

        methods:{
            shuffleProgress(){
                Object.keys(this.progress).forEach((key)=>{
                    this.progress[key] = parseInt(Math.random() * 100);
                });
            }
        }
    }
</script>

<style scoped lang="scss">
    .badge{
        margin-right: 10px;
    }

    .progress{
        margin-bottom: 2rem;
    }

    .progresses{
        .badge{
            margin-bottom:0.5rem;
        }
    }
</style>