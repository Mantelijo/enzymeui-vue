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
                           type="secondary"
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
            }
        },
    }
</script>

<style scoped>

</style>