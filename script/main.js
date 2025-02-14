// JS function for Side Navigation Bar Toggle

function togglesideMenuIcon() {
    let icon = document.getElementById("sideMenuIcon");
    
    if (icon.classList.contains("bx-menu-alt-right")) {
        icon.classList.remove("bx-menu-alt-right");
        icon.classList.add("bx-menu-alt-left"); // Change to user alt left icon
    } else {
        icon.classList.remove("bx-menu-alt-left");
        icon.classList.add("bx-menu-alt-right"); // Change back to alt right icon
    }
}

// End of Side Navigation Bar Toggle

// JS function for Language Switch

function toggleText() {
    let textElement = document.getElementById("text");
    textElement.textContent = textElement.textContent === "LTR" ? "RTL" : "LTR";
}

// End of Language Switch

// JS function for Image Switch

function toggleImage() {
    let image = document.getElementById("image");

    if (image.src.endsWith("/img/united-states.png")) {
        image.src = "/img/bangladesh.png";
        image.title = "Bengali"; // Change title for image2
    } else {
        image.src = "/img/united-states.png";
        image.title = "English"; // Change title for image1
    }
}

// End of Image Switch

// JS function for Fullscreen Switch

function toggleFullscreen() {
    let icon = document.getElementById("fullScreenIcon");
    
    if (icon.classList.contains("bx-fullscreen")) {
        icon.classList.remove("bx-fullscreen");
        icon.classList.add("bx-exit-fullscreen"); // Change to exit fullscreen icon
    } else {
        icon.classList.remove("bx-exit-fullscreen");
        icon.classList.add("bx-fullscreen"); // Change back to fullscreen icon
    }
}

// End of Fullscreen Switch

// JS function for Modal

// Open of modal

function openModal() {
    document.getElementById("user-modal").style.display = "block";
}

// Close of modal

function closeModal() {
    document.getElementById("user-modal").style.display = "none";
}

// End of Modal