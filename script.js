const APIKey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImYyMTcxMThkLWI2NzQtNDQzNy05NjM3LTc4NTc5NGEyZTlhMiIsImlhdCI6MTY3OTc3ODI3Miwic3ViIjoiZGV2ZWxvcGVyL2UxODRkYWZhLThjMDUtYjY1NC00MThlLWQyODE1NjU4ZjQ1YSIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjUuNTkuMTcwLjI1MiIsIjEwOS44Ny4zMy4yNDYiLCI1NC44Ni41MC4xMzkiXSwidHlwZSI6ImNsaWVudCJ9XX0.nPtIT1f_hMe6WzhKwqJgBAOuKq3mF-A6qSIQZnu73L3C2tiJY6S_t4thTH2y0v3RQDb4ifUvQdi0w_gQSNSBlQ';

const 

const dipoClanTag = '2LQ99PC9L',
adviceClanTag = '';

getDipoCurrentWar();

function getDipoCurrentWar () {
    fetch(`https://api.clashofclans.com/v1/clans/%23${dipoClanTag}/currentwar`,{
        headers: {
            'Authorization': `Bearer ${APIKey}`
        }
    })
    .then(response => response.json())
    .then(answer => {
        let outputString = '', counter = 1;
        while (counter <= answer.clan.members.length) {
            for (const key in answer.clan.members) {
                if (Object.hasOwnProperty.call(answer.clan.members, key)) {
                    if (answer.clan.members[key].mapPosition == counter) {
                        outputString += `${answer.clan.members[key].name} - ${answer.clan.members[key].mapPosition}\n`;
                        counter++;
                    }
                }
            }
        }
        console.log(answer.clan.members);
        console.log(outputString);
    }).catch((error) => {
        console.log(error)
    });
}