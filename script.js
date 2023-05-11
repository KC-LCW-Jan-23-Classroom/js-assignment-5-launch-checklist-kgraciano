// Write your JavaScript code here!

















window.addEventListener("load", function () {
    let testForm = document.querySelector('[data-testid="testForm"]')


    testForm.addEventListener("submit", function (e) {
        e.preventDefault();
        let pilot = document.querySelector('[name="pilotName"]');
        let copilot = document.querySelector('[name="copilotName"]');
        let fuelLevel = document.querySelector('[name="fuelLevel"]');
        let cargoLevel = document.querySelector('[name="cargoMass"]');
        

       

        if (!pilot || !copilot || !fuelLevel || !cargoLevel) {
            alert("All fields are required!");
        } else {
            formSubmission(document, 'list', pilot, copilot, fuelLevel, cargoLevel);
        }
        
    



       let  listedPlanets;
        let listedPlanetsResponse =  myFetch();
        console.log("Listed Planet Response: ", listedPlanetsResponse)

        listedPlanetsResponse.then(function(result) {
           console.log("result:", result)
            listedPlanets = result;
            console.log('listed Planets:', listedPlanets);
        }).then(function () {
        console.log("listed planets: ", listedPlanets);

        let randomPlanet = pickPlanet(listedPlanets);
addDestinationInfo(document, randomPlanet);
   });


    });

    // let listedPlanets;
    // let listedPlanetsResponse = myFetch();
    // console.log(listedPlanetsResponse)
    // listedPlanetsResponse.then(function (result) {
    //     console.log("result:", result)
    //    let listedPlanets = result;
    //     console.log(listedPlanets);
    // }).then(function () {
    // console.log(listedPlanets);

    

//       let listedPlanets;
//  let listedPlanetsResponse;
//         listedPlanetsResponse.then(function (result) {
//             listedPlanets = result;
//             console.log(listedPlanets);
//         }).then(function () {
//         console.log(listedPlanets);

//    });

});
