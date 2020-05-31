<template>
    <div>
        <Card>
            <template v-slot:header>
                Input fields
            </template>
            <div class="row">
                <div class="col-12">
                    <Input  placeholder="Basic input"  label="Input label"></Input>
                </div>
                <div class="col-12">
                    <Input  placeholder="Basic input with info text" info-text="Some basic informative info text"  label="Input label"></Input>
                </div>
                <div class="col-6">
                    <Input  placeholder="Basic input with error" :valid="false" error-text="Sample error text" >
                        <template v-slot:label>
                            <label class="text-danger">Error input label</label>
                        </template>
                    </Input>
                </div>
                <div class="col-6">
                    <Input  placeholder="Basic input with success" :valid="true">
                        <template v-slot:label>
                            <label class="text-success">Success input label</label>
                        </template>
                    </Input>
                </div>
            </div>
        </Card>
        <Card class="mt-5">
            <template v-slot:header>
                Sized fields
            </template>
            <div class="row">
                <div class="col-12">
                    <Input  size="lg" placeholder="Large input"  label="Input label"></Input>
                </div>
                <div class="col-12">
                    <Input  size="sm" placeholder="Small input"  label="Input label"></Input>
                </div>
            </div>
        </Card>
        <Card class="mt-5">
            <template v-slot:header>
                Tag input
            </template>
            <div class="row">
                <div class="col-sm-6">
                   <TagInput
                           label="Tag input label"
                           v-model="tags"
                           info-text="Tag input info text"
                           placeholder="Try to type something and hit enter..."
                   ></TagInput>
                </div>
                <div class="col-sm-6">
                    <p>Tag input value:</p>
                    <pre>{{tags}}</pre>
                </div>
            </div>
        </Card>

        <Card class="mt-5">
            <template slot="header">Checkboxes & Radio inputs</template>
            <div class="row">
                <div class="col-sm-6">
                    <Checkbox v-model="checkboxes" checkbox-value="first">Simple checkbox</Checkbox>
                    <Checkbox v-model="checkboxes" checkbox-value="second">Simple checked checkbox</Checkbox>
                    <Checkbox v-model="checkboxes" checkbox-value="third" disabled>Disabled unchecked checkbox</Checkbox>
                    <Checkbox :value="true" checkbox-value="fourth" disabled >Disabled checked checkbox</Checkbox>
                </div>
                <div class="col-sm-6">
                    <Radio v-model="radio" name="test" radio-value="first">Simple Radio</Radio>
                    <Radio v-model="radio" name="test" radio-value="second" >Simple checked Radio</Radio>
                    <Radio v-model="radio" name="test" radio-value="third" disabled>Disabled unchecked Radio</Radio>
                    <Radio value="last" radio-value="last"  disabled >Disabled checked Radio</Radio>
                </div>
                <div class="col-sm-12">
                    <h5 class="mt-5">Switch checkboxes</h5>
                    <Checkbox show-as-switch v-model="checkboxes" checkbox-value="first">Simple switch checkbox</Checkbox>
                    <Checkbox show-as-switch v-model="checkboxes" checkbox-value="second">Simple switch checked checkbox</Checkbox>
                    <Checkbox show-as-switch v-model="checkboxes" checkbox-value="third" disabled>Disabled switch unchecked checkbox</Checkbox>
                    <Checkbox show-as-switch :value="true" checkbox-value="fourth" disabled >Disabled switch checked checkbox</Checkbox>
                </div>
            </div>
        </Card>

        <Card class="mt-5">
            <template slot="header">Select dropdown</template>
            <div class="row">
                <div class="col">
                    <Select :list="selectData" :selected="selectedItem" @change="selectedItem = $event">
                    </Select>
                    <p>Selected item: {{selectedItem}}</p>
                </div>
                <div class="col">
                    <Select :list="selectData1" :selected="selectedItem1" @change="selectedItem1 = $event">
                        <template v-slot:default="{item}">{{item.name}}</template>
                    </Select>
                    <p>Selected item: {{selectedItem1}}</p>
                </div>
            </div>
        </Card>
    </div>
</template>

<script>
    export default {
        name: "Forms",

        data(){
            return {
                tags:['JavaScript', 'Tag-input', 'JSX', 'Vue.js'],
                checkboxes:['second', 'fourth'],
                radio:'first',
                selectData:['Vue.js', 'Svelte', 'React', 'Angular', "jQuery", 'Ember.js', 'Lodash', 'Bootstrap'],
                selectData1:[{test:true, name:'John'},{test:true, name:'Doe'}],
                selectedItem:null,
                selectedItem1:null,
            }
        },

        methods:{
        }
    }
</script>

<style scoped>

</style>