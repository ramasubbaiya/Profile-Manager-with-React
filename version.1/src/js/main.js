let url = 'data/profiles.json';
let profiles = [];
const profilesTitle = ['Name', 'Age', 'Email', 'Children'];

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
    let pHeadElem = createDivWithClass('profile-title');
    pHeadElem.appendChild(createDivWithText(profilesTitle[0]));
    pHeadElem.appendChild(createDivWithText(profilesTitle[1]));
    pHeadElem.appendChild(createDivWithText(profilesTitle[2]));
    pHeadElem.appendChild(createDivWithText(profilesTitle[3]));
    return pHeadElem;
}

// display profiles on first load
let displayProfiles = function(profiles) {
    let listElem = document.getElementsByClassName('profile-list')[0];

    // if profiles is more than one, create heading for it
    if (profiles) {
        listElem.appendChild(profileListHeadingElem());

        let profileData = createDivWithClass('profile-data');
        listElem.appendChild(profileData);

        // create list of profile values
        for (let i = 0; i < profiles.length; i++) {
            let profileElem = createDivWithClass('profile');
            for (let key in profiles[i]) {
                if (key !== 'children') {
                    profileElem.appendChild(createDivWithText(profiles[i][key]));
                } else { // TODO: children coming soon
                    profileElem.appendChild(createDivWithText('Coming soon.'));
                }
            }
            profileData.appendChild(profileElem);
        }
        listElem.appendChild(profileData);
    }

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