<script setup lang="ts">
import { ref } from 'vue';
import CustomButton from './components/CustomButton.vue';
import ButtonEditorOption from './components/ButtonEditorOption';
import ButtonOption from './components/ButtonOption';
import ButtonEditor from "./components/ButtonEditor.vue"

const testMsg = ref('TEST CLICK')

const options = new ButtonEditorOption()
const buttonOptions = new ButtonOption()

const testClick = () => {
  console.log('TEST COMPONENT LIBRARY')
}

const printOptions = () => {
  console.log('Content Ready!', buttonOptions)
}

buttonOptions.onClick = testClick
buttonOptions.onInitialized = printOptions
buttonOptions.width = "100"
buttonOptions.height = "100"

console.log(options)
console.log(buttonOptions)

</script>

<template>
  <CustomButton :msg="testMsg"></CustomButton>
  <ButtonEditor :options="options" :button-options="buttonOptions"></ButtonEditor>
</template>

<style scoped></style>
