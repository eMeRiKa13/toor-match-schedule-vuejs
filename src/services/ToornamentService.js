import axios from 'axios';
import Tools from '@/services/Tools.js';
import moment from 'moment-timezone'

let toornamentToken         = null;
let toornamentTokenValidity = null;

async function getToken(clientId, clientSecret) {

    const params = new URLSearchParams();
    params.append('grant_type', 'client_credentials');
    params.append('client_id', clientId);
    params.append('client_secret', clientSecret);
    params.append('scope', 'organizer:result');
    
    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }

    return axios.post('https://api.toornament.com/oauth/v2/token', params, config)
    .then(response => response.data.access_token);
}

async function getTournamentMatches(tournamentId, apiKey, page = 1) {
    return axios({
        method: 'get',
        url: 'https://api.toornament.com/organizer/v2/matches',
        headers: {
            'X-Api-Key': apiKey,
            Authorization: toornamentToken,
            Range: 'matches=0-99'
        },
        params: {
            tournament_ids: tournamentId,
        }
      })
      .then(response => response.data);
}

async function getTournamentStages(tournamentId, apiKey) {
    return axios({
        method: 'get',
        url: 'https://api.toornament.com/organizer/v2/stages',
        headers: {
            'X-Api-Key': apiKey,
            Authorization: toornamentToken,
            Range: 'stages=0-49'
        },
        params: {
            tournament_ids: tournamentId,
        }
      })
      .then(response => response.data);
}

async function getTournamentGroups(tournamentId, apiKey) {
    return axios({
        method: 'get',
        url: 'https://api.toornament.com/organizer/v2/groups',
        headers: {
            'X-Api-Key': apiKey,
            Authorization: toornamentToken,
            Range: 'groups=0-49'
        },
        params: {
            tournament_ids: tournamentId,
        }
      })
      .then(response => response.data);
}

export default {
              
    async findTournamentMatches(tournamentId, timezone, apiKey, clientId, clientSecret, page = 1) {
   
        if(toornamentToken == null || toornamentTokenValidity < Date.now()) {
            // Make a first request
            toornamentToken         = await getToken(clientId, clientSecret);   
            toornamentTokenValidity = Date.now() + 86000; //token is valid 24 hours = 86400. I removed some seconds for the time of this call
        }
        
        // call Matches with token
        let listMatches = await getTournamentMatches(tournamentId, apiKey);
        
        // call stages & groups information
        const tempStages = await getTournamentStages(tournamentId, apiKey);
        // const tempGroups = await getTournamentGroups(tournamentId, apiKey);

        // indexby
        const listStages = Tools.indexBy(tempStages, 'id');
        // const listGroups = Tools.indexBy(tempGroups, 'id');

        // Add stage name + proper date & time
        listMatches.forEach(function(match){            
            match.stage = listStages[match.stage_id];
            delete match.stage_id;

            if(match.scheduled_datetime !== null) {
                
                const dateTimezone   = moment.utc(match.scheduled_datetime).tz(timezone);
                const date           = dateTimezone.format();
                match.scheduled_date = date.slice(0, 10);
                match.scheduled_time = date.slice(11, 16);
            }
        });

        return listMatches;
    }
};
