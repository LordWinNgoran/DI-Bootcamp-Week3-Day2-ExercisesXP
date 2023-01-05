//Exercice 5 : Event Listeners


/**
 * @author: N'goran Kouadio Jean Cyrille
 * @description: Event Listeners
 * Date : 05/01/2023
 */




let system_solar = ["Earth"]

let putPlanet=document.getElementsByTagName("section")[0]
system_solar.forEach((element,index )=> {
        //We create a div for each planet
        let creation=document.createElement('div')
        //We add three class to each planet define in the html file
        creation.classList.add("planet","couleur",element);
        //we append each planet to the section
        putPlanet.appendChild(creation)
        //We change the text content to put a name view on the planet
        creation.textContent=element
});


// 1. Add many events listeners to one element on your webpage. Use the click, mouseover, mouseout and dblclick events.

let takeObject=document.querySelector('div')


// for click
takeObject.addEventListener('click', () => {
    takeObject.style.backgroundColor = 'red'
})



// for mouseover

takeObject.addEventListener('mouseover', () => {
    takeObject.style.backgroundColor = 'green'
    takeObject.style.color = 'black'
})



// for mouseout
takeObject.addEventListener('mouseout', () => {
    takeObject.style.backgroundColor = 'orange'
    
})

// for dblclick
takeObject.addEventListener('dblclick', () => {
    takeObject.style.backgroundColor = 'white'
    takeObject.style.fontSize = '25pt'
}) 