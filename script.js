// Write your JavaScript code here!

window.addEventListener("load", function() {
    // Define DOM objects to call in formSubmission
    let launchForm = document.getElementById("launchForm");
    let pilotName = document.querySelector("input[name=pilotName]");
    let copilotName = document.querySelector("input[name=copilotName]");
    let fuelLevelNumber = document.querySelector("input[name=fuelLevel]");
    let cargoLevelMass = document.querySelector("input[name=cargoMass]");
    let faultyItemsList = document.getElementById("faultyItems");

    // Define DOM objects to update "Awaiting Information"
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let launchStatus = document.getElementById("launchStatus");
    
    formSubmission(launchForm, faultyItemsList, pilotName, copilotName, fuelLevelNumber, cargoLevelMass);
    
    


   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let pickedPlanet = {};
       pickedPlanet = pickPlanet(listedPlanets);
       console.log(pickedPlanet);
       addDestinationInfo(document, pickedPlanet["name"], pickedPlanet["diameter"], pickedPlanet["star"], pickedPlanet["distance"], pickedPlanet["moons"], pickedPlanet["image"]);
   })   

});