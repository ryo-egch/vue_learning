<template>
    <span>{{num}}</span>
</template>

<script>
export default {
  props: {
    num: Number,
  },
}
</script>

<style scoped>
span {
  font-size: 12px;
}
</style>