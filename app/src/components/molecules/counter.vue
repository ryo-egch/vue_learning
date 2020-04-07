<template>
  <div class="counter">
    <div>
      <simplebutton icon="+" @event="countPlus"/>
      <simplebutton icon="-" @event="countMinus"/>
    </div>
    <div>
        <span>Current counter num is <numbertext :num="number" /></span>
    </div>    
  </div>
</template>

<script>
import simplebutton from '../atoms/simplebutton.vue'
import numbertext from '../atoms/numbertext.vue'
export default {
  components: {
    simplebutton,
    numbertext
  },
  data() {
      return {
          number: 0
      }
  },
  methods: {
    countPlus: function() {
      this.number += 1;
    },
    countMinus: function(){
      this.number -= 1;
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
