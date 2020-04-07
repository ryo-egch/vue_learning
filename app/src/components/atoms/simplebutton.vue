<template>
    <button v-on:click="$emit('event')">{{icon}}</button>
</template>

<script>
export default {
  props: {
    icon: String,
  },
}
</script>
