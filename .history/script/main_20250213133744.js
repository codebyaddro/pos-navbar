function toggleIcon() {
    let icon = document.getElementById("iconDisplay");
    
    if (icon.classList.contains("bx-menu-alt-right")) {
        icon.classList.remove("bx-menu-alt-right");
        icon.classList.add("bx-menu-alt-left"); // Change to user icon
    } else {
        icon.classList.remove("bx-menu-alt-left");
        icon.classList.add("fa-home"); // Change back to home icon
    }
}