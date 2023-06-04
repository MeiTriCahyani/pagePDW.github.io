// JavaScript code for updating the greeting, date, and time
function updateDateTime() {
    var today = new Date();
    var hour = today.getHours();
    var greeting = "";

    if (hour >= 0 && hour < 12) {
        greeting = "Good morning";
    } else if (hour >= 12 && hour < 18) {
        greeting = "Good afternoon";
    } else {
        greeting = "Good evening";
    }

    document.getElementById("greeting").innerHTML = greeting;
    document.getElementById("datetime").innerHTML = today.toLocaleString();
}

// Call the updateDateTime function when the page loads
window.onload = updateDateTime;