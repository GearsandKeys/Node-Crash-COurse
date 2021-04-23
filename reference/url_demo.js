const url = require('url');
const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active');

// Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString()); //same result as above
// http://mywebsite.com/hello.html?id=100&status=active

// Host (root domain)
console.log(myUrl.host);
//mywebsite.com:8000

// Hostname (does not get port)
console.log(myUrl.hostname);
//mywebsite.com

// Pathname
console.log(myUrl.pathname);
// /hello.html

// Serialized query
console.log(myUrl.search);
// ?id=100&status=active

//Params Object
console.log(myUrl.searchParams);
// URLSearchParams { 'id' => '100', 'status' => 'active' }


