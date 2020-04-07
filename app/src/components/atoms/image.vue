<template>
  <div>
    <img :src="url" />
  </div>
</template>

<script>
export default {
  props: {
    url: String,
  },
}
</script>
