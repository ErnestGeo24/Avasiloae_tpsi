const fs = require('fs');
const axios = require('axios');

async function fetchUsers() {
    try {
        const response = await axios.get('https://randomuser.me/api/?results=5&inc=gender,name,nat,id,location,picture');
        let users = response.data.results.map(user => ({
            gender: user.gender,
            name: `${user.name.first} ${user.name.last}`,
            nat: user.nat,
            id: user.id.value || null,
            city: user.location.city,
            picture: user.picture.large,
            email: `${user.name.first.toLowerCase()}.${user.name.last.toLowerCase()}@example.com`
        }));

        fs.writeFileSync('users.json', JSON.stringify(users, null, 2));
        console.log('Users saved to users.json');
    } catch (error) {
        console.error('Error fetching users:', error);
    }
}

fetchUsers();
