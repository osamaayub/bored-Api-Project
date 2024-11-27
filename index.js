const button = document.querySelector("#get-activity");
const activityTitle = document.querySelector("#activity");
button.addEventListener("click", () => {
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response => response.json())
    .then(data => {
      activityTitle.classList.add("activity-title");
      activityTitle.style.fontSize = "17px"
      activityTitle.style.color = "#FFF"
      activityTitle.textContent = data.activity
    })
})
