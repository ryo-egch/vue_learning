<template>
  <div class="hello">
    <Img v-show="isAho" url="https://stickershop.line-scdn.net/stickershop/v1/product/1785863/LINEStorePC/main.png;compress=true"/>
  </div>
</template>


<script>
import store from '../../store/store.js'
import Img from '../atoms/image.vue'
export default {
  components: {
    Img
  },
  computed: {
    isAho() {
      return (store.getters.getCount > 0 && store.getters.getCount % 3 === 0)
    }
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
