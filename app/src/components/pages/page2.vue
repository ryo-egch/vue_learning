<template>
  <div class="hello">
    <counter2 />
    <aho />
  </div>
</template>

<script>
import counter2 from '../molecules/counter2.vue'
import aho from '../molecules/aho.vue'
export default {
  name: 'Page2',
  components: {
    counter2,
    aho
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
