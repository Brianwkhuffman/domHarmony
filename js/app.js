/*Hey Prepsters! Let's help Ronald McDonald find true love by revising his online dating profile!*/

//1. In the nav element, target the span element with the id of 'matCount' and change the number from 0 to 11.
var matchCount = document.getElementById('matCount');
matchCount.innerHTML = 11;

//2. In the nav element, target the span element with the id of 'msgCount' and change the number from 0 to 23.
var messageCount = document.getElementById('msgCount');
messageCount.innerHTML = 23;

//3. In the div id data section, target the div element with the id of 'fullname' and change Full Name to Ronald McDonald.
var nameBox = document.getElementById('fullname');
nameBox.innerHTML = 'Ronald McDonald';

//4. In the div id data section, target the div element with the id of 'age' and change Age to 63 Years Old.
var ageBox = document.getElementById('age');
ageBox.innerHTML = 63; 

//5. In the div id data section, create a div with an id of job and give it the following information: Clown and Restauranteur.
var jobDiv = document.createElement('div');
jobDiv.id = 'job';
jobDiv.innerHTML = 'Clown and Restauranteur.';
data.appendChild(jobDiv);

//6. In the div id data section, create a div with an id of hobbies and give it the following information: Long romantic walks on the beach, candle light Big Mac dinners and tormenting the King.
var hobbyDiv = document.createElement('div');
hobbyDiv.id = 'hobbies';
hobbyDiv.innerHTML = 'Long romantic walks on the beach, candle light Big Mac dinners and tormenting the King.';
data.appendChild(hobbyDiv);

//7. In the div id data section, create a div with an id of location and give it the following information: Honolulu, HI.
var locationDiv = document.createElement('div');
locationDiv.id = 'location';
locationDiv.innerHTML = 'Honolulu, HI.';
data.appendChild(locationDiv);

//8. In the div id data section, create a div with an id of wants and give it the following information: Looking for a Mrs. McDonald.
var wantsDiv = document.createElement('div');
wantsDiv.id = 'wants';
wantsDiv.innerHTML = 'Looking for a Mrs. McDonald.';
data.appendChild(wantsDiv);

//9. In the div id profile section, create a paragraph element with an id of pro2 and create a your own profile for Ronald (at least 2 sentences).
var proP = document.createElement('p');
proP.id = 'pro2';
proP.innerHTML = 'Real down to earth clown. Guaranteed to knock your socks off or your money back!';
profile.appendChild(proP);

//10. In the div id matches section, target the first div element with the class name of firstName and change Name to Wendy.
var nameFirst = document.getElementsByClassName('firstName');
nameFirst[0].innerHTML = 'Wendy';

//11. In the div id matches section, target the first div element with the class name of otherAge and change Age to 48.
var ageFirst = document.getElementsByClassName('otherAge');
ageFirst[0].innerHTML = '48';

//12. In the div id matches section, target the first div element with the class name of status and change Status to Single Mother.
var statusFirst = document.getElementsByClassName('status');
statusFirst[0].innerHTML = 'Single Mother';

//13. In the div id matches section, target the second div element with the class name of firstName and change Name to Peko Chan.
nameFirst[1].innerHTML = 'Peko Chan';

//14. In the div id matches section, target the second div element with the class name of otherAge and change Age to 68.
ageFirst[1].innerHTML = 68;

 //Final Boss Create your own profile into the page:
 //change image to match your profile
 //div with class name of firstName
 //div with class name of otherAge
 //div with class name of status
 //div with class anem of Motto




