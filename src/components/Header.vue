<template>
  <header class="bg-gray-900">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
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
    </nav>
  </header>

    <div 
    id="flashMessage" 
    v-if="GStore.flashMessage" 
    class="fixed right-1/2 top-4 max-w-sm w-full bg-white shadow-lg rounded-lg ring-1 ring-black ring-opacity-5"
    >
      <h3 class="text-sm p-4 leading-6 font-normal text-gray-900">{{ GStore.flashMessage }}</h3>
    </div>
  
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
@keyframes slideout {
  from {
  }
  to {
    top: -200px;
  }
}

#flashMessage {
  animation-name: slideout;
  animation-duration: 4s;
  transition-property: all;
	transition-duration: .5s;
	transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}
</style>