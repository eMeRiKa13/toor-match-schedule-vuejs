<template>
    <div class="grid grid-cols-1 gap-4 lg:col-span-2">
        <section aria-labelledby="section-1-title">
            <div class="rounded-lg bg-white overflow-hidden shadow">
                
                <div class="bg-white p-4 border-b border-gray-200">
                    <h3 class="text-lg leading-6 font-medium text-gray-900">
                    List of Matches
                    </h3>
                </div>
                
                <table class="min-w-full table-fixed divide-y divide-gray-200">
                <thead class="bg-gray-50">
                    <tr>
                    <th scope="col" class="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Match
                    </th>
                    <th scope="col" class="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Scheduled date & hour (24 hours format)
                    </th>
                    </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                    <tr v-for="match in matches" :key="match.id">        
                        <td class="w-2/4 p-4">
                            <div class="text-sm text-gray-500">{{ match.stage.name }} <span class="hidden">/ Group {{ match.group_id }}</span> / Match {{ match.number }}</div>
                            <div 
                            v-if="match.opponents[0].participant !== null"
                            class="text-sm font-semibold text-gray-900">{{ match.opponents[0].participant.name }} vs {{ match.opponents[1].participant.name }}</div>
                            <div 
                            v-else
                            class="text-sm font-semibold text-gray-500">Participants to be determined</div>
                        </td>
                        <td class="p-4 text-sm text-gray-900">                            
                            <form @submit.prevent="onSubmit">
                                <div class="w-2/5 float-left mt-1 border-b border-gray-300 focus-within:border-green-600">
                                    <input type="date" v-model="match.scheduled_date" id="date" class="block w-full border-0 border-b border-transparent bg-gray-50 focus:border-green-600 focus:ring-0 sm:text-sm" />
                                </div>
                                
                                <div class="w-1/5 float-left mt-1 ml-4 border-b border-gray-300 focus-within:border-green-600">
                                    <input type="text" v-model="match.scheduled_time" id="time" class="block w-full border-0 border-b border-transparent bg-gray-50 focus:border-green-600 focus:ring-0 sm:text-sm" placeholder="24:00" />
                                </div>
                                
                                <div class="w-1/5 float-left ml-4 mt-1 text-right text-sm font-medium">
                                    <a href="#" class="inline-block px-6 py-2 rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none">Edit</a>
                                </div>
                            </form>
                        </td>
                    </tr>
                </tbody>
                </table>

            </div>
        </section>
    </div>
</template>

<script>
export default {
  name: 'MatchList',
  props: {
    matches: {
      type: Array,
      required: true,
    },
  },
  computed: {
  }
};
</script>