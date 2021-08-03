<template>

  <Header />

  <main class="py-8 px-4 lg:p-8 bg-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        
        <div class="grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8">
          
          <MatchList @match-date-submitted="updateMatchDate" :matches="matches" />

          <Settings @settings-submitted="importMatches" />

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
import ToornamentService from '@/services/ToornamentService.js';

export default {
  name: "Layout",
  components: {
    Header,
    MatchList,
    Settings,
    Footer,
  },  
  data() {
    return {
      matches: [],
      settingsData: null,
      loading: false,
      error: null,
    }
  },
  inject: ['GStore'],
  methods: {
    async importMatches(settingsData) {
      this.matches      = await ToornamentService.findTournamentMatches(settingsData.tournamentId, settingsData.timezone, settingsData.apiKey, settingsData.clientId, settingsData.clientSecret);
      this.settingsData = settingsData;
      
      this.GStore.flashMessage = 'Your matches have been successfully imported';
      setTimeout(() => {  // After 3 seconds remove it
        this.GStore.flashMessage = ''
      }, 5000);
    },
    async updateMatchDate(matchDateData) {
      await ToornamentService.updateMatchDate(matchDateData.matchId, matchDateData.scheduledDate, matchDateData.scheduledTime, this.settingsData.timezone, this.settingsData.apiKey, this.settingsData.clientId, this.settingsData.clientSecret);

      this.GStore.flashMessage = 'This match is now scheduled';
      setTimeout(() => {  // After 3 seconds remove it
        this.GStore.flashMessage = ''
      }, 5000);
    }
  },
}
</script>

<style>
</style>
