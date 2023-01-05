//Exercice 4 : Volume Of A Sphere


/**
 * @author: N'goran Kouadio Jean Cyrille
 * @description: Volume Of A Sphere
 * Date : 05/01/2023
 */



//1 Write a JavaScript program to calculate the volume of a sphere. 


// Formula to calculate the volume is : V = 4/3 π r³

// get the form
let getForm=document.getElementById('MyForm');
//function to calculate
function Calculate(e){
    e.preventDefault()
//we check the form before send
    let radius = document.getElementById('radius').value
    if (isNaN(radius)) {
        alert('Please a number for radius')
        return
    }
    radius= Number(radius)
    let volume = 4 / 3 * Math.PI * Math.pow(radius, 3)
    document.getElementById('volume').value = volume.toFixed(3)
}
getForm.addEventListener('submit', Calculate)