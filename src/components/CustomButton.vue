<script setup lang="ts">

const props = defineProps({
  msg: String,
})

const test = () => {
  console.log('button clicked!')
}

</script>

<template>
  <button type="button" @click="test">{{ props.msg }}</button>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
