//Exercise 1: Change The Article

/**
 * @author: N'goran Kouadio Jean Cyrille
 * @description: Change The Article
 * Date : 04/01/2023
 */



//1 Using a DOM property, retrieve the h1 and console.log it.
let takeH1=document.getElementsByTagName('h1')[0]
console.log(takeH1)

//2 Using DOM methods, remove the last paragraph in the <article> tag.
document.getElementsByTagName('article')[0].lastElementChild.remove()

/*3 Add a event listener which will change the background color of 
the h2 to red, when it’s clicked on. */
let h2element=document.querySelector('h2');

h2element.addEventListener("click", ChangeH2Color); 

function ChangeH2Color() { 
   h2element.setAttribute("style","background-color:red;")
} 


/* 4 Add an event listener which will hide the h3
 when it’s clicked on (use the display:none property). */
 let h3element=document.querySelector('h3');
 h3element.addEventListener("click", hideH3); 

function hideH3() { 
   h3element.setAttribute("style","display:none;")
} 


/* 5 Add a <button> to the HTML file, that when 
clicked on, should make the text of all the paragraphs, bold. */

// We create the button and fix it to the article
let createButton=document.createElement('button')
createButton.textContent='Click me to make bold'
document.querySelector('article').appendChild(createButton)



createButton.addEventListener("click", ChangeFontWeight); 

function ChangeFontWeight() { 
    let changeFont=document.querySelectorAll('article>p')

    changeFont.forEach(element => {
        element.setAttribute("style","font-weight:bold;")
    });
   
} 



