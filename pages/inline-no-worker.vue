<template>
  <section class="container">
    <div class="element">&nbsp;</div>
  </section>
</template>

<script>
// https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers

export default {
  
  mounted() {

    setInterval(() => {

      const result = expensiveTask(100);

      console.log(result);

    }, 500);
  },

  methods: {

    expensiveTask(time) {
    
      const start = Date.now()

      let count = 0
      
      while (Date.now() - start < time) {
          count++
      }

      return count;
    }
  }
}
</script>

<style>

 .element {
  height: 250px;
  width: 250px;
  margin: 0 auto;
  background-color: red;
  animation-name: stretch;
  animation-duration: 1.5s; 
  animation-timing-function: ease-out; 
  animation-delay: 0;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  animation-fill-mode: none;
  animation-play-state: running;
}

@keyframes stretch {
  0% {
    transform: scale(.3);
    background-color: red;
    border-radius: 100%;
  }
  50% {
    background-color: orange;
  }
  100% {
    transform: scale(1.5);
    background-color: yellow;
  }
}

body,
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
