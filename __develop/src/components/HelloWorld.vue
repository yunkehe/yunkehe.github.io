<template>
  <div class="hello">
    <!-- <border></border> -->
    <!-- <border-radius></border-radius> -->
    <!-- <layout-flex></layout-flex> -->
    <flex-grid></flex-grid>
  </div>
</template>

<script>
import border from './border';
import borderRadius from './borderRadius';
import layoutFlex from './layoutFlex';
import flexGrid from './flexGrid';

export default {
  name: 'HelloWorld',
  data () {
    return {  
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    border,
    borderRadius,
    layoutFlex,
    flexGrid
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
