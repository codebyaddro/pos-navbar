function toggleIcon() {
    let icon = document.getElementById("iconDisplay");
    
    if (icon.classList.contains("bx-menu-alt-right")) {
        icon.classList.remove("fa-home");
        icon.classList.add("fa-user"); // Change to user icon
    } else {
        icon.classList.remove("fa-user");
        icon.classList.add("fa-home"); // Change back to home icon
    }
}