<template>
  <div class="hello">
    <h2>布局</h2>
    <div class="wrapper">
      <div class="first-face">
        <span class="pip">1</span>
      </div>
      <div class="second-face">
        <span class="pip">1</span>
        <span class="pip">2</span>
      </div>
      <div class="third-face">
        <span class="pip">1</span>
        <span class="pip">2</span>
        <span class="pip">3</span>
      </div>
      <div class="fourth-face">
        <div class="column">
          <span class="pip">1</span>
          <span class="pip">2</span>
        </div>
        <div class="column">
          <span class="pip">3</span>
          <span class="pip">4</span>
        </div>
      </div>
      <div class="fifth-face">
        <div class="column">
          <span class="pip">1</span>
          <span class="pip">2</span>
        </div>
        <div class="column">
          <span class="pip">3</span>
        </div>
        <div class="column">
          <span class="pip">4</span>
          <span class="pip">5</span>
        </div>
      </div>
      <div class="sixth-face">
        <div class="column">
          <span class="pip">1</span>
          <span class="pip">2</span>
          <span class="pip">3</span>
        </div>
        <div class="column">
          <span class="pip">4</span>
          <span class="pip">5</span>
          <span class="pip">6</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'layoutFlex',
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
<style lang="stylus" scoped>
  .first-face {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .second-face {
    display: flex;
    justify-content: space-between;
  }

  .second-face .pip:nth-of-type(2) {
    align-self: flex-end;
  }

  .third-face {
    display: flex;
    justify-content: space-between;
  }
    
  .third-face .pip:nth-of-type(2) {
    align-self: center;
  }

  .third-face .pip:nth-of-type(3) {
    align-self: flex-end;
  }

  .fourth-face, .sixth-face {
    display: flex;
    justify-content: space-between;
  }

  .fourth-face .column, .sixth-face .column {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .fifth-face {
    display: flex;
    justify-content: space-between;
  }
    
  .fifth-face .column {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
    
  .fifth-face .column:nth-of-type(2) {
    justify-content: center;
  }

  /* OTHER STYLES */

  * {
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
  }

  body {
    display: flex;
    align-items: center;
    justify-content: center;
    vertical-align: center;
    flex-wrap: wrap;
    align-content: center;
    font-family: 'Open Sans', sans-serif;
    
    background: linear-gradient(top, #222, #333);
  }

  [class$="face"] {
    margin: 16px;
    padding: 4px;
    
    background-color: #e7e7e7;
    width: 104px;
    height: 104px;
    object-fit: contain;
    
    box-shadow:
      inset 0 5px white, 
      inset 0 -5px #bbb,
      inset 5px 0 #d7d7d7, 
      inset -5px 0 #d7d7d7;
    
    border-radius: 10%;
  }

  .pip {
    display: block;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    margin: 4px;

    background-color: #333;
    box-shadow: inset 0 3px #111, inset 0 -3px #555;
    
    color: #fff;
  }
  

</style>
