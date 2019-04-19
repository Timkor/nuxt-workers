<template>
  <section class="container">
    <div class="element">&nbsp;</div>
  </section>
</template>

<script>
// https://github.com/developit/workerize-loader

import createTasks from 'workerize-loader!~/shared/tasks';

const tasks = createTasks();

export default {
  
  mounted() {

    setInterval(async () => {

      const result = await tasks.expensiveTask(100);

      console.log(result);

    }, 500);
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
