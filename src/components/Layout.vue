<template>

  <Header />

  <main class="py-8 px-4 lg:p-8 bg-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        
        <div class="grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8">
          
          <MatchList />

          <Settings />

        </div>
      </div>
    </main>

  <Footer />

</template>

<script>
import Header from '@/components/Header.vue';
import MatchList from '@/components/MatchList.vue';
import Settings from '@/components/Settings.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: "Layout",
  components: {
    Header,
    MatchList,
    Settings,
    Footer,
  },
}
</script>