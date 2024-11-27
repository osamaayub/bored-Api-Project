/**
Challenge: 

- Make the styling more exciting once an activity idea comes 
back from the Bored API
    - Resources: DOM element "classList" property, uigradients.com, 
      Google Fonts, color.adobe.com
    - Some ideas:
      - Change the title from "BoredBot" to something more exciting!
      - Change the background to something less drab.
      - Bonus: Animate something on the screen to move around and add more 
        excitement to the page
*/

const button=document.getElementById("get-activity");
const activityTitle=document.getElementById("activity");
button.addEventListener("click",()=>{
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response => response.json())
    .then(data => {
        activityTitle.classList.add("activity-title");
       activityTitle.style.fontSize="17px"
       activityTitle.style.color="#FFF"
      activityTitle.textContent = data.activity
    })
})
