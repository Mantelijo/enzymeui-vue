<template>
    <div>
        <Card :body-classes="['d-flex']">
            <template slot="header">Dropdown examples</template>
            <Dropdown class="mr-5">
                <template slot="button">
                    <Button type="primary" still>Simple</Button>
                </template>
                <div>
                    <div class="dropdown-item">Item1</div>
                    <div class="dropdown-item">Item2</div>
                    <div class="dropdown-item">Item3</div>
                </div>
            </Dropdown>

            <Dropdown class="mr-5" :menu-classes="['p-4', 'dropdown-menu-lg']" manual-close ref="dropdown1">
                <template slot="button">
                    <Button type="secondary" still>Magical</Button>
                </template>
                <div>
                    <div class="mb-3">
                        <b>A dropdown with a form</b>
                    </div>
                    <form>
                        <Input type="text" label="Name" placeholder="Enter your name" />
                        <Input type="text" label="Email" placeholder="Enter your name" />
                        <Input type="text" :valid="false" error-text="Some random error text" label="Error message" placeholder="Enter your name" />
                        <Button class="mr-2" type="info" @click.prevent="$refs.dropdown1.close()">Save</Button>
                        <Button type="danger" @click.prevent="$refs.dropdown1.close()">Close</Button>
                    </form>
                </div>

            </Dropdown>

            <Dropdown class="mr-5" :menu-classes="['dropdown-menu-md', 'p-2']" >
                <template slot="button">
                    <Button type="primary" still>Dropdowns</Button>
                </template>
                <div>
                    <b>Use any custom html inside the dropdown. There are multiple dropdown sizes to fit different content sizes</b>

                    <ul>
                        <li>dropdown-menu-xs: 160px</li>
                        <li>dropdown-menu-sm: 200px</li>
                        <li>dropdown-menu-md: 300px</li>
                        <li>dropdown-menu-lg: 430px</li>
                    </ul>
                </div>
            </Dropdown>
        </Card>
    </div>
</template>

<script>
    import Dropdown from "../components/base/Dropdown";
    export default {
        name: "Dropdowns",
        components: {Dropdown}
    }
</script>

<style scoped>

</style>