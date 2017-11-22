<template>
  <div class="hello">
    <h2>1px边框解决方案</h2>
    <div class="box scale-1px" @click="test"> </div>
  </div>
</template>

<script>

export default {
  name: 'border',
  data () {
    return {
      msg: 'my name is border'
    }
  },
  methods: {
    test: function(argument) {
        alert(window.devicePixelRatio)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .box{
        margin: 0 auto;
        width: 5rem;
        height: 5rem;
        background-color: skyblue;
    }
    .scale-1px{
      position: relative;
      border:none;
    }
   /* .scale-1px:after{
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      background: #000;
      width: 100%;
      height: 1px;
      -webkit-transform: scaleY(0.5);
      transform: scaleY(0.5);
      -webkit-transform-origin: 0 0;
      transform-origin: 0 0;
    }*/
    .scale-1px:after{
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      border: 1px solid #000;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 200%;
      height: 200%;
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
      -webkit-transform-origin: left top;
      transform-origin: left top;
    }

</style>
