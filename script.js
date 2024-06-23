function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener("DOMContentLoaded", function() {
    const searchIcon = document.getElementById('search-icon');
    const searchBar = document.getElementById('search-bar');

    searchIcon.addEventListener('click', function(event) {
        event.preventDefault();
        if (searchBar.style.display === 'none' || searchBar.style.display === '') {
            searchBar.style.display = 'block';
        } else {
            searchBar.style.display = 'none';
        }
    });
});