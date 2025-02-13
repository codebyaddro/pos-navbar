function toggleIcon() {
    let icon = document.getElementById("iconDisplay");
    
    if (icon.classList.contains("bx-menu-alt-right")) {
        icon.classList.remove("bx-menu-alt-right");
        icon.classList.add("bx-menu-alt-left"); // Change to user alt 
    } else {
        icon.classList.remove("bx-menu-alt-left");
        icon.classList.add("bx-menu-alt-right"); // Change back to home icon
    }
}

// 