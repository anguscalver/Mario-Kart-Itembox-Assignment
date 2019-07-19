// Mario Kart Item Box Simulator
'use strict'
// Global Variables
let randBana = 0;
let randGreenshell = 0;
let randStar = 0;
let randGoldenmushroom = 0;
let randBulletbill = 0;

// event listener 
document.getElementById ('mario-kart-itembox').addEventListener ('click', simulateItems);
document.getElementById ('plus5').addEventListener ('click', plus5);
document.getElementById ('until10Bulletbill').addEventListener ('click', until10Bulletbill);
document.getElementById ('user-input-btn').addEventListener ('click', runuseramount);
// event functions 
    function simulateItems (){
        console.log ('simulate-items');
        // generate a random number 0.00 > 0.99 (0% > 100%)
        // simulate the result
        let randNum = Math.random ();

        // simulate result of trying to catch ONE fish 
 

        // Simulate an item using the random number
        // Banana
        if (randNum <= 0.25){
            //make a banana appear
            document.getElementById('results').innerHTML += "<img src='media/Banana.png'>";
            randBana++;
            document.getElementById('banana').innerHTML = randBana;
            // console.log('randItem: ' + randNum);
            // console.log('randBana: ' + randBana);
            
        } else if (randNum <= 0.5) { // Code the green shells here
            // make a green shell appear
            document.getElementById ('results').innerHTML += "<img src='media/Green-Shell.png'>";
            randGreenshell++;
            document.getElementById ('green-shell').innerHTML = randGreenshell;
            
        } else if (randNum <= 0.65){
            // make star appear
            document.getElementById ('results').innerHTML += "<img src='media/Star.png'>";
            randStar++;
            document.getElementById ('star').innerHTML = randStar;

        } else if (randNum <= 0.8){
            // make golden mushroom appear
            document.getElementById ('results').innerHTML += "<img src='media/Golden-Mushroom.png'>";
            randGoldenmushroom++;
            document.getElementById ('golden-mushroom').innerHTML = randGoldenmushroom;

        } else if (randNum <= 1.0) {
        // make bullet bill appear
        document.getElementById ('results').innerHTML += "<img src='media/Bullet-Bill.png'>"
        randBulletbill++;
        document.getElementById ('bullet-bill').innerHTML = randBulletbill;

    }
}

function plus5 (){
    for (let n= 0; n < 5; n++){
      simulateItems(); 
    }
}

function until10Bulletbill (){
    let count = 0;
    while (randBulletbill < 10){
        simulateItems ();
        count++;
    }
    console.log ('count: '+ count);
}

function runuseramount (){
    let count = document.getElementById('runuseramount').value;
    for ( let n=0; n < count; n++ ) {
        simulateItems ();

}
}