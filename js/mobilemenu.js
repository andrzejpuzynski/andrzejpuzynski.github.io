function mobileMenu() {
    const menu = document.getElementById("navigation")
    if(menu.className === "navigation") {
        menu.className += " mobile";
    } else {
        menu.className = "navigation";
    }
}

function closeMenu() {
	const menu = document.getElementById("navigation");
	menu.className = "navigation";

}