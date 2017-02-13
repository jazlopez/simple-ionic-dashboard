/**
 * Seed collection with demo users using faker.js
 * Optional: export users in HTML table for report purposes.
 *
 * @author: Jaziel Lopez <juan.jaziel@gmail.com>
 */

const faker = require('faker');
const tableify = require('tableify');

let i,
    user,
    seeds = [];

for(i=0; i < 300; i++){

    user = {
        first: faker.name.firstName(),

        last: faker.name.lastName(),

        email: faker.internet.email(),

        address: faker.address.streetAddress(),

        city: faker.address.city(),

        state: faker.address.state(),

        zip: faker.address.zipCode(),

        url: faker.internet.url()
    };

    seeds.push(user);
}

/**
 * Want all demo data in a HTML page?
 * Uncomment the line below.
 * Open a terminal and navigate to the seeders path directory
 * Run $node 0001.users.js > users.html
 */
// console.log(tableify(seeds));

