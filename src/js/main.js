let url = 'data/profiles.json';
let profiles = [];
const profilesHeading = ['Name', 'Age', 'Email', 'Children'];
let profileListElem = document.getElementsByClassName('profile-list');

// utility methods
// create div with class name as parameter
let createDivWithClass = function(className) {
    const element = document.createElement('div');
    element.classList.add(className);
    return element;
}

// create div with class name and text in inner html
let createDivWithClassAndText = function(className, text) {
    const element = createDivWithClass(className);
    element.innerHTML = text;
    return element;
}

// create div with text in inner html
let createDivWithText = function(text) {
    const element = document.createElement('div');
    element.innerHTML = text;
    return element;
}

// create profile heading with columns
let profileListHeadingElem = function() {
    let pHeadElem = document.createElement('li');
    pHeadElem.classList.add('profile-heading');
    pHeadElem.appendChild(createDivWithClassAndText('profile-name', profilesHeading[0]));
    pHeadElem.appendChild(createDivWithClassAndText('profile-age', profilesHeading[1]));
    pHeadElem.appendChild(createDivWithClassAndText('profile-email', profilesHeading[2]));
    pHeadElem.appendChild(createDivWithClassAndText('profile-children', profilesHeading[3]));
    return pHeadElem;
}

// display profiles on first load
let displayProfiles = function(profiles) {
    let listElem = document.createElement('ul');

    // if profiles is more than one, creaete heading for it
    if (profiles) {
        listElem.appendChild(profileListHeadingElem());

        // create list of profile values
        for (let i = 0; i < profiles.length; i++) {
            let profileElem = document.createElement('li');
            profileElem.classList.add('profile-data');
            for (let key in profiles[i]) {
                if (key !== 'children') {
                    profileElem.appendChild(createDivWithText(profiles[i][key]));
                } else { // TODO: children coming soon
                    profileElem.appendChild(createDivWithText('Coming soon.'));
                }
            }
            listElem.appendChild(profileElem);
        }
    }

    profileListElem[0].appendChild(listElem);
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