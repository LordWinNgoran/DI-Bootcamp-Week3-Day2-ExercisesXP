//Exercise 3: Work With Forms

/**
 * @author: N'goran Kouadio Jean Cyrille
 * @description: Work With Forms
 * Date : 04/01/2023
 */


//1 Declare a global variable named allBoldItems.
let allBoldItems
/* 2 Create a function called getBold_items() that takes no parameter. This function should
 collect all the bold items inside the paragraph and assign them to the allBoldItems variable. */
 (function getBold_items(){
    allBoldItems=document.querySelectorAll('strong')
 })()


 // 3 Create a function called highlight() that changes the color of all the bold text to blue

 function highlight(){
    allBoldItems.forEach(element => {
        element.setAttribute("style","color:blue")
    })}


 // 4 Create a function called return_normal() that changes the color of all the bold text back to black.

 function return_normal(){
    allBoldItems.forEach(element => {
        element.setAttribute("style","color:black")
    });
 }

 /* 5 Call the function highlight() on mouseover 
 (ie. when the mouse pointer is moved onto the paragraph),. */

let p=document.getElementsByTagName('p')[0] 
p.addEventListener('mouseover', highlight); 


/*  and 
 the function return_normal() on mouseout (ie. when the mouse pointer is moved out of the paragraph) */
p.addEventListener("mouseout", return_normal); 