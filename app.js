document.addEventListener("DOMContentLoaded", function() {
    let dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function(event) {
            let dropdownContent = this.querySelector('.dropdown-content');
            dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
            event.stopPropagation();
        });
    });

    window.addEventListener('click', function() {
        let dropdownContents = document.querySelectorAll('.dropdown-content');
        dropdownContents.forEach(dropdownContent => {
            dropdownContent.style.display = 'none';
        });
    });
});
