<template>
  <header class="bg-gray-900">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" aria-label="Top">
      <div class="w-full py-6 flex items-center justify-between border-b border-black lg:border-none">
        <div class="flex items-center">
          <a href="#">
            <span class="sr-only">Workflow</span>
            <img class="h-10 w-auto" src="@/assets/toornament_circles.svg" alt="" />
          </a>
          <div class="ml-10 space-x-8">
            <h1 class="text-white font-semibold text-xl lg:text-3xl">Match Schedule Tool for Toornament.com</h1>
          </div>
        </div>
      </div>

      <div 
      id="flashMessage"
      v-if="GStore.flashMessage" 
      class="absolute right-8 top-4 max-w-sm w-full bg-white shadow-lg rounded-lg ring-1 ring-black ring-opacity-5 p-4"
      >
        <h3 class="text-sm leading-6 font-normal text-gray-900">{{ GStore.flashMessage }}</h3>
      </div>

    </nav>
    
  </header>
  
</template>


<script>
export default {
  name: 'Header',
  inject: ['GStore'],
  props: {
  },
};
</script>

<style scoped>
@keyframes whitefade {
  from {
    background: white;
  }
  to {
    background: transparent;
  }
}

#flashMessage {
  animation-name: whitefade;
  animation-duration: 5s;
}
</style>