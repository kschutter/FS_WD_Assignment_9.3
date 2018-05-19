// Combine the three arrays into one without seperators
var evens = [2, 4, 6, 8];
var odds = [1, 3, 5, 7];
var primes = [2, 3, 5, 7, 11];

var combine = [...primes, ...evens, ...odds];

// Copy primes into a new array
var newPrimes = primes;

// Destructure the below object into individual variables
var jamesBond = {
    first: 'James',
    last: 'Bond',
    country: 'United States',
    city: 'New york',
    twitter: '@jamesbond'
};

var {first, last, country, city, twitter} = jamesBond;

// Deconstruct the below array into individual variables
var players = ['paul', 'andy', 'darrell', 'jim'];

var [player1, player2, player3, player4] = players;
