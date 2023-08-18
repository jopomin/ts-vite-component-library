<script setup lang="ts">
import ButtonEditorOption from './ButtonEditorOption'
import { nextTick, onBeforeMount, onMounted, ref } from 'vue'

import { DxResponsiveBox, DxLocation, DxItem } from 'devextreme-vue/responsive-box'
import { DxButton } from "devextreme-vue"
import Button from 'devextreme/ui/button'
import ButtonOption from './ButtonOption';
import ButtonEditor from './ButtonEditor';

const props = defineProps({
  options: {
    type: ButtonEditorOption,
    required: true
  },
  buttonOptions: {
    type: ButtonOption,
    required: true
  }
})

const responsiveBoxRef = ref<DxResponsiveBox | null>(null)
const buttonRef = ref<DxButton | null>(null)

let editor: ButtonEditor
let button: Button
// let overlayInstance: HTMLElement | null

onBeforeMount(() => {
  // HACK: without tick nested component ref returns null
  nextTick(() => {
    // get the parent instance and define the component inserting empty childs
    var responsiveBox = responsiveBoxRef.value?.instance!
    editor = new ButtonEditor(responsiveBox, button, props.options, props.buttonOptions)
  })
})

onMounted(() => {
  // HACK: without tick nested component ref returns null
  nextTick(() => {
    // initialize child component
    button = buttonRef.value?.instance!
    editor.initButton(button, props.buttonOptions)
  })
})
</script>

<template>
  <div>
    <DxResponsiveBox ref="responsiveBoxRef">
      <DxItem>
        <DxLocation :row="0" :col="0" />
        <DxButton ref="buttonRef" />
      </DxItem>
    </DxResponsiveBox>
  </div>
</template>