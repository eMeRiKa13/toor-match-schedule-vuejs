<template>
    <div class="grid grid-cols-1 gap-4">
    <section aria-labelledby="section-2-title">
        <div class="rounded-lg bg-white overflow-hidden shadow">
                
            <div class="bg-white p-4 border-b border-gray-200">
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                    Configuration
                </h3>
                <p class="mt-1 text-sm text-gray-500">
                    Create an <a class="underline hover:no-underline" target="_blank" href="https://developer.toornament.com/applications">application for the Toornament API</a> and copy your API IDs below.
                </p>
            </div>
                
            <div class="min-w-full divide-y divide-gray-200">

                <form class="p-4" @submit.prevent="onSubmit">
                    <div>
                        <label for="api_key" class="block text-sm font-medium text-gray-700">API Key</label>
                        <div class="mt-1">
                        <input type="text" v-model="apiKey" id="api_key" class="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                        </div>
                    </div>
                    <div class="mt-4">
                        <label for="api_client_id" class="block text-sm font-medium text-gray-700">API Client ID</label>
                        <div class="mt-1">
                        <input type="text" v-model="clientId" id="api_client_id" class="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                        </div>
                    </div>
                    <div class="mt-4">
                        <label for="api_client_secret" class="block text-sm font-medium text-gray-700">API Client Secret</label>
                        <div class="mt-1">
                        <input type="text" v-model="clientSecret" id="api_client_secret" class="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                        </div>
                    </div>
                    <div class="mt-4">
                        <label for="tournament_id" class="block text-sm font-medium text-gray-700">ID of your tournament</label>
                        <div class="mt-1">
                        <input type="text" v-model="tournamentId" id="tournament_id" class="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                        </div>                        
                        <p class="mt-1 text-xs break-words text-gray-500">
                            Copy your tournament ID, example for https://organizer.toornament.com/tournaments/441680454962233344/matches/ the tournament id is 441680454962233344
                        </p>
                    </div>
                    <div class="mt-4">
                        <label for="timezone" class="block text-sm font-medium text-gray-700">Timezone</label>
                        <div class="mt-1">
                            <select 
                                v-model="timezone"
                                id="timezone" 
                                class="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            >
                                <option disabled value="">Please select one</option>
                                <option v-for="option in listTimezones" :value="option.tzCode" :key="option.tzCode">
                                    {{ option.name }}
                                </option>
                            </select>
                        </div>  
                    </div>
                    <div class="my-4 text-center">
                        <button type="submit" class="py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            Import Matches
                        </button>
                    </div>
                </form>
                
            </div>

        </div>
    </section>
    </div>
</template>

<script>
import timezones from 'timezones-list';

export default {
  name: 'Settings',
  data() {
    return {
        apiKey: null,
        clientId: null,
        clientSecret: null,
        tournamentId: null,
        timezone: 'Europe/Paris',  
        listTimezones: timezones
    };
  },
  methods: {
    onSubmit() {
      if (this.apiKey === '' || this.clientId === '' || this.clientSecret === '' || this.clientSecret === '' || this.timezone === '') {
        alert('Please fill out every configuration field.')
        return;
      }

      const settingsData = {
        apiKey: this.apiKey,
        clientId: this.clientId,
        clientSecret: this.clientSecret,
        tournamentId: this.tournamentId,
        timezone: this.timezone
      }

      this.$emit('settings-submitted', settingsData);
    }
  },
};
</script>