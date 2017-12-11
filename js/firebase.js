var config =
{
    apiKey: "AIzaSyD8H2eatEERSfJq1DaTj2PylW-ed_fR0DY",
    databaseURL: "https://dynamic-web-database.firebaseio.com/"
};
firebase.initializeApp(config);

var database = firebase.database();
var peopleDatabase = database.ref('people');
var peopleList = [];

peopleDatabase.on('child_added', function( firebaseObject )
{
	var person = firebaseObject.val();
  	peopleList.push(person);
  	// "push" is JavaScript's lingo for "add to a list"
})

console.log(peopleList);
