<template>
  <div class="hello">
    <counter />
  </div>
</template>

<script>
import counter from '../molecules/counter.vue'
export default {
  name: 'HelloWorld',
  components: {
    counter
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
