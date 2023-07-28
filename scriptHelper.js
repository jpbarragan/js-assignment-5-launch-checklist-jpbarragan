// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
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
}

function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(testInput)) {
        return "Not a Number";
    } else if (typeof testInput === "number") {
        return "Is a Number";
    }
}

//function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel)
function formSubmission() {
   console.log("Data go to script.js")
    //Prevent Form Submission and Validate Submission
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event){
        // Declare form Objects
        let pilot = document.querySelector("input[name=pilotName]");
        let copilot = document.querySelector("input[name=copilotName]");
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let cargoLevel = document.querySelector("input[name=cargoMass]");
        // Declare Awaiting Information Objects
        let faultyItems = document.getElementById("faultyItems");
        let pilotStatus = document.getElementById("pilotStatus");
        let copilotStatus = document.getElementById("copilotStatus");
        let fuelStatus = document.getElementById("fuelStatus");
        let cargoStatus = document.getElementById("cargoStatus");
        let lauchStatus = document.getElementById("launchStatus");
        // Check if all fields are completed
        if (validateInput(pilot.value) === "Empty" || validateInput(copilot.value) === "Empty" || validateInput(fuelLevel.value) === "Empty" || validateInput(cargoLevel.value) === "Empty"){
            alert("All fields are required!");
            event.preventDefault();
        }
        // Check if fields include the correct format & update "Awaiting Information"
        if (validateInput(pilot.value) !== "Not a Number" || validateInput(copilot.value) !== "Not a Number" || validateInput(fuelLevel.value) === "Not a Number" || validateInput(cargoLevel.value) === "Not a Number"){
            alert("Make sure to enter valid information for each field!");
            event.preventDefault();
        } else if (fuelLevel.value < 10000) {
            faultyItems.style.visibility = "visible";
            launchStatus.innerHTML = "Shuttle not ready for launch";
            lauchStatus.style.color = "#C7254E"; 
            pilotStatus.innerHTML = `Pilot ${pilot.value} is ready for launch`;
            copilotStatus.innerHTML = `Co-pilot ${copilot.value} is ready for launch`;
            fuelStatus.innerHTML = `Fuel level too low for launch`;
            cargoStatus.innerHTML = `Cargo is ready for launch`;
            event.preventDefault();
        } else if (cargoLevel.value > 10000) {
            faultyItems.style.visibility = "visible";
            launchStatus.innerHTML = "Shuttle not ready for launch";
            lauchStatus.style.color = "#C7254E"; 
            pilotStatus.innerHTML = `Pilot ${pilot.value} is ready for launch`;
            copilotStatus.innerHTML = `Co-pilot ${copilot.value} is ready for launch`;
            fuelStatus.innerHTML = `Fuel level ready for launch`;
            cargoStatus.innerHTML = `Cargo is too heavy for launch`;
            event.preventDefault();
        } else {
            faultyItems.style.visibility = "visible";
            launchStatus.innerHTML = "Shuttle is ready for launch";
            lauchStatus.style.color = "#419F6A"; 
            pilotStatus.innerHTML = `Pilot ${pilot.value} is ready for launch`;
            copilotStatus.innerHTML = `Co-pilot ${copilot.value} is ready for launch`;
            event.preventDefault();
        }
   });
   
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
