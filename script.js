document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById("sidebar");
    const openSidebar = document.getElementById("openSidebar");
    const searchSidebar = document.getElementById("searchSidebar");
    const closeSidebar = document.getElementById("closeSidebar");

    openSidebar.addEventListener("click", function () {
        sidebar.classList.add("open");
    });

    searchSidebar.addEventListener("click", function () {
        sidebar.classList.add("open");
    });

    closeSidebar.addEventListener("click", function () {
        sidebar.classList.remove("open");
    });
});