let spaceship = {
    crew: {
        captain: {
            name: 'Lily',
            degree: 'Computer Engineering',
            cheerTeam() {
                console.log('You got this!')
            }
        },
        'chief officer': {
            name: 'Dan',
            degree: 'Aerospace Engineering',
            agree() {
                console.log('I agree, captain!')
            }
        },
        medic: {
            name: 'Clementine',
            degree: 'Physics',
            announce() {
                console.log(`Jets on!`)
            }
        },
        translator: {
            name: 'Shauna',
            degree: 'Conservation Science',
            powerFuel() {
                console.log('The tank is full!')
            }
        }
    }
};

for (let members in spaceship.crew) {
    console.log(`${members}:${spaceship.crew[members].name}`);
}

// for (let i in spaceship) {
//     console.log(`${spaceship.crew[i].name}`);

// }