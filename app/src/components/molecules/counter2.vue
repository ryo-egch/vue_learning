<template>
  <div class="counter">
    <div>
      <simplebutton icon="+" @event="countPlus"/>
      <simplebutton icon="-" @event="countMinus"/>
    </div>
    <div>
        <span>今の数字は <numbertext :num="number" /></span>
    </div>    
  </div>
</template>

<script>
import store from '../../store/store.js'
import simplebutton from '../atoms/simplebutton.vue'
import numbertext from '../atoms/numbertext.vue'
export default {
  components: {
    simplebutton,
    numbertext
  },
  computed: {
    number () {
      return store.getters.getCount;
    }
  },
  methods: {
    countPlus: function() {
        store.dispatch('increment');
    },
    countMinus: function(){
        store.dispatch('decrement');
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
