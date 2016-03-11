
// Tam, your javascript code should go here. There is a section at the bottom
// of this long write-up where you can add your code. This file is included
// on the index.html page

// First, before you get started, a bit about something called JSON (JASON).
// JSON is a data format used to store javascript data. You can see an example
// of what it looks like in the package.json file in the root of this project.
// JSON is short for JavaScript Object Notation, and as the name implies it's
// basically just a javascript object.
/*
{
  "name": "Jared Barboza",
  "tel": "(434) 353-2314"
}
*/
// the above is valid JSON.
/*
{
  name: "Jared Barboza",
  tel: "(434) 353-2314",
  changePassword: function(oldPwd, newPwd) {
    return newPwd;
  }
}
*/
// the code above here, is NOT valid JSON. Why? The property names aren't
// strings and it contains a function. Functions aren't allowed in JSON. You
// can store Arrays, Booleans, Strings, Numbers and other Objects but not
// functions.

// So, how do we convert a javascript object, to JSON? Glad you asked.
// There are a few methods we can use client side to deal with JSON:
// JSON.stringify and JSON.parse.

// JSON.stringify will take a javascript object and return the JSON representation
// as a string. **protip:** if you want to have pretty indents you can use
// JSON.stringify( object, null, 2 ) ex:
/*
var myself = { name: "Jared", username: "codeimpossible" };
var json = JSON.stringify(myself, null, 2);
*/

// JSON.parse will take a JSON string and return a javascript object
// ex:

/*
var json = '{ "name": "Jared", "username": "codeimpossible" }';
var myself = JSON.parse(json);
*/

// ### Now, onto the challenge.

// each trip on the index.html page has a data-trip-id attribute that
// contains the trip id from the server.

// we need to add some features to this page, and each will depend on
// the trip id

// 1: when you click "View Itinerary" for each trip, you should make
// an ajax request to /itineraries/<id> where <id> is the trip id.

// 2: when you click "Cancel Trip" you should send a DELETE request
// to /itineraries/<id> and then remove the trip from the page.

// 3: when you click "Confirm Trip" you should send a PUT request
// to /itineraries/<id>. The request should include the following
// JSON:
// {
//   "confirmed": true
// }
//
// **note** jQuery will automatically convert javascript objects to JSON for you.
// ex:
// $.ajax('some-url', { my: "object" });
//
// the data { my: "object" } will be converted (using JSON.stringify) to
// '{ "my": "object" }' before it is sent to the server.
//
// after the trip is confirmed, change the confirmed button class from
// btn-default to btn-success and the button text from "Confirm trip" to "Confirmed!"

// ### One last protip.
// When working with network requests and javascript, use chrome dev tools.
// Specifically the console and network tabs. The network tab will let you see
// each network request that the browser is making (you can filter it to "xhr"
// so you only see the ajax requests) and you can inspect the data being sent with
// each request and the responses.

$(function() {
  // your application code should go here. bonus points if you can
  // tell me why we use this $(function() { ... }) wrapper.
});
