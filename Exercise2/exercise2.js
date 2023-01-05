//Exercise 2: Work With Forms

/**
 * @author: N'goran Kouadio Jean Cyrille
 * @description: Work With Forms
 * Date : 04/01/2023
 */

//1 Retrieve the form and console.log it.

let getForm=document.forms[0]
console.log(getForm)

//2 Retrieve the inputs by their id and console.log them.

    let fname1=document.getElementById("fname")
    let  lname1=document.getElementById("lname")
    console.log(fname1)
    console.log(lname1)


//3 Retrieve the inputs by their name attribute and console.log them.



    let fname2=getForm.elements.lname
    let lname2=getForm.elements.lname
    console.log(fname2)
    console.log(lname2)
//4 When the user submits the form (ie. submit event listener
 
getForm.addEventListener("submit", AddLi); 

function AddLi(e) { 
    e.preventDefault()
    let fname=document.getElementsByTagName('input')[0].value;
    let lname=document.getElementsByTagName('input')[1].value;
    if(fname.length==0 || lname.length==0){
        alert('Un champ est vide')
    }else{
        let values=document.querySelectorAll('input[type="text"]')
        //console.log(values)
        let usersAnswer=document.querySelector('.usersAnswer')
        values.forEach(element => {
            let li=document.createElement('li')
            li.textContent=element.value
            usersAnswer.appendChild(li)
            
        });
    }

    
} 












