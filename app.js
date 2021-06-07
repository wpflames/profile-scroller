const data = [
    { 
        name: 'Rezső',
        age: 32,
        gender: 'male',
        lookingfor: 'female',
        location: 'Budapest',
        image: 'https://randomuser.me/api/portraits/men/75.jpg'
    },
    { 
        name: 'Zsanett',
        age: 20,
        gender: 'female',
        lookingfor: 'male',
        location: 'Budapest',
        image: 'https://randomuser.me/api/portraits/women/75.jpg'
    },
    { 
        name: 'Balazs',
        age: 37,
        gender: 'male',
        lookingfor: 'female',
        location: 'Budapest',
        image: 'https://randomuser.me/api/portraits/men/84.jpg'
    },
    { 
        name: 'Julia',
        age: 25,
        gender: 'female',
        lookingfor: 'male',
        location: 'Budapest',
        image: 'https://randomuser.me/api/portraits/women/84.jpg'
    },
];

const profiles = profileIterator(data);

// Call first profile
nextProfile();

// Next Event
document.getElementById('next').addEventListener('click', nextProfile);

// Next Profile Display
function nextProfile(){
    const currentProfile = profiles.next().value;

    if(currentProfile !== undefined){
        document.getElementById('imageDisplay').innerHTML = `<img class="rounded" src="${currentProfile.image}">`;

        document.getElementById('profileDisplay').innerHTML = `
            <ul class="list-group">
                <li class="list-group-item">Name: ${currentProfile.name}</li>
                <li class="list-group-item">Age: ${currentProfile.age}</li>
                <li class="list-group-item">Location: ${currentProfile.location}</li>
                <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
            </ul>
        `;

    } else {
        // No more profiles
        window.location.reload();
    }
    
    
}

// Profile Iterator
function profileIterator(profiles){
    let nextIndex = 0;

    // Return an object with a next function
    return {
        next: function(){
            return nextIndex < profiles.length ? 
            { value: profiles[nextIndex++], done: false } :
            { done: true }
        }
    };
}