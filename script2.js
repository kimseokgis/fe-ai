function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    var main = document.getElementById("main");
    if (sidebar.style.left === "-250px") {
        sidebar.style.left = "0";
        main.style.marginLeft = "250px";
    } else {
        sidebar.style.left = "-250px";
        main.style.marginLeft = "0";
    }
}
