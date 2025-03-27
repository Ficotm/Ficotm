document.addEventListener("DOMContentLoaded", function () {
    // Get all links in the sidebar and all the pages (sections)
    const links = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll(".page");

    // Initially, set the first section (home) as active
    let currentPage = 'home';
    document.getElementById(currentPage).classList.add('active');

    // Add event listeners to all links
    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent the default anchor behavior

            // Remove 'active' class from the current active page
            document.getElementById(currentPage).classList.remove('active');

            // Set the new page as active
            currentPage = this.getAttribute("data-page");
            document.getElementById(currentPage).classList.add('active');
        });
    });
});
