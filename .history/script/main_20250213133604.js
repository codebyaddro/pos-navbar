function toggleIcon() {
    let icon = document.getElementById("iconDi");
    
    if (icon.classList.contains("fa-home")) {
        icon.classList.remove("fa-home");
        icon.classList.add("fa-user"); // Change to user icon
    } else {
        icon.classList.remove("fa-user");
        icon.classList.add("fa-home"); // Change back to home icon
    }
}