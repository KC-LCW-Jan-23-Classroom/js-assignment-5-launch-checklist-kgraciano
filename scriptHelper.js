// Write your helper functions here!
require('isomorphic-fetch');




document.addEventListener('DOMContentLoaded', function(){

});







function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {

  

        const missionTarget = document.getElementById("missionTarget");
        let header = document.createElement('h2');
        let text = document.createTextNode('Mission Destination');



        missionTarget.appendChild(header);
        header.appendChild(text);


//why does my alert not work anymore when fields are empty????

//how do i make it like this:

//  planet that was randomly selected by pickedPlanet and display their properties when selected.
//  name: 
//  diameter:
//  star: 
//  distance:
//  moons:
//  imgURL: 


   // let planetPromise = myFetch();
// planetPromise.then(function(planet){
//     console.log("promise: ", planet);
//     for (let props of planet) {
//         let names = props.name;
//         let planetName = document.createElement('li');
//         missionTarget.appendChild(planetName);
//         console.log("planetName: ", planetName)

//     }
// })





//          newOl = document.createElement('ol');
//         missionTarget.appendChild(newOl);

//         name = document.createElement('li');
//         name.innerHTML = `Name: `
//         newOl.appendChild(name);
// console.log('Name:', name.value)

//        diameter = document.createElement('li');
//         diameter.innerHTML = `Diameter: `
//         newOl.appendChild(diameter);

//         star = document.createElement('li');
//         star.innerHTML = `Star:  `
//         newOl.appendChild(star);

//         distance = document.createElement('li');
//         distance.innerHTML = `Distance from Earth: `
//         newOl.appendChild(distance);

//         moons = document.createElement('li');
//         moons.innerHTML = `Number of Moons: `
//         newOl.appendChild(moons);

//         imageUrl = document.createElement('img');

//         missionTarget.appendChild(imageUrl);




    
}

        // Here is the HTML formatting for our mission target div.
        /*
                     <h2>Mission Destination</h2>
                     <ol>
                         <li>Name: </li>
                         <li>Diameter: </li>
                         <li>Star: ${star}</li>
                         <li>Distance from Earth: </li>
                         <li>Number of Moons: </li>
                     </ol>
                     <img src="">

        */

                





    function validateInput(testInput) {
        if (testInput === "") {
            return "Empty";
        } else {
            if (isNaN(testInput)) {

                testInput = String(testInput);

                return "Not a Number";


            } else {

                return "Is a Number";

            }
        }



    }



    function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
        let pilotValidation = validateInput(pilot);
        let copilotValidation = validateInput(copilot);
        let fuelLevelValidation = validateInput(fuelLevel);
        let cargoLevelValidation = validateInput(cargoLevel);

        const faultyItems = document.getElementById("faultyItems");
        const copilotStatusElement = faultyItems.querySelector("#copilotStatus");
        const pilotStatusElement = faultyItems.querySelector('#pilotStatus');
        const launchStatusHeader = document.getElementById("launchStatus");

        let updatedPilot = document.createElement('li');
        updatedPilot.textContent = `Pilot ${pilot.value} is ready for launch`;
        pilotStatusElement.parentNode.replaceChild(updatedPilot, pilotStatusElement);

        let updatedCopilot = document.createElement('li');
        updatedCopilot.textContent = `Co-pilot ${copilot.value} is ready for launch`;
        copilotStatusElement.parentNode.replaceChild(updatedCopilot, copilotStatusElement);

        if (fuelLevel.value < 10000) {
            const fuelStatus = faultyItems.querySelector('#fuelStatus');

            let updatedFuel = document.createElement('li');
            updatedFuel.textContent = 'Not enough fuel';
            fuelStatus.parentNode.replaceChild(updatedFuel, fuelStatus);

            faultyItems.style.visibility = 'visible';
            launchStatusHeader.innerHTML = 'Shuttle not ready for launch';
            launchStatusHeader.style.color = 'red';

        } else {
            launchStatusHeader.innerHTML = 'Shuttle is ready for launch';
            launchStatusHeader.style.color = 'green';
            faultyItems.style.visibility = 'visible';
        };

        if (cargoLevel.value > 10000) {
            const cargoStatus = faultyItems.querySelector("#cargoStatus");
            let updatedCargo = document.createElement('li');
            updatedCargo.textContent = 'Cargo mass too high for shuttle launch';
            cargoStatus.parentNode.replaceChild(updatedCargo, cargoStatus);
            faultyItems.style.visibility = 'visible';

            launchStatusHeader.innerHTML = 'Shuttle not ready for launch';
            launchStatusHeader.style.color = 'red';

        } else {
            launchStatusHeader.innerHTML = 'Shuttle is ready for launch';
            launchStatusHeader.style.color = 'green';
            faultyItems.style.visibility = 'visible';
        };


    };






    //2 saturn 







    async function myFetch() {

        let planetsReturned;

        planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response){
            return response.json();
        }).then(function(result) {
            console.log("result:", result);
            return result
        });
            
        
        return planetsReturned;
    };












    function pickPlanet(listedPlanets) {
console.log("Pick planet: " + listedPlanets);
        return Math.floor(Math.random() *listedPlanets.length);
    };







    module.exports.addDestinationInfo = addDestinationInfo;
    module.exports.validateInput = validateInput;
    module.exports.formSubmission = formSubmission;
    module.exports.pickPlanet = pickPlanet;
    module.exports.myFetch = myFetch;

