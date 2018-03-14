let url = './data/profiles.json';
let profiles = [];

fetch(url).then(function(response) {
        return response.json();
    })
    .then(function(data) {
        profiles = data.profiles;
    }).catch(function(error) {
        console.error(error);
    });

console.log(profiles);