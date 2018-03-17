let url = 'data/profiles.json';
let profiles = [];
let profileListElement = document.getElementsByClassName('profile-list')[0];

// display profiles on first load
let displayProfiles = function(profiles) {
    let listElem = document.createElement('ul');

    // create list of profile values
    for (let i = 0; i < profiles.length; i++) {
        let profileElem = document.createElement('li');
        profileElem.appendChild(document.createTextNode(profiles[i]));
        listElem.appendChild(profileElem);
    }

    profileListElement.appendChild(listElem);
}

// add a profile to existing list
let addProfile = function(profile) {

}

// remove the profile from existing list
let removeProfile = function(profile) {

}

// edit the profile
let editProfile = function(profile) {

}

// get the list of profiles
fetch(url).then(function(response) {
        return response.json();
    })
    .then(function(data) {
        profiles = data.profiles;
        displayProfiles(profiles);
    }).catch(function(error) {
        console.error(error);
    });