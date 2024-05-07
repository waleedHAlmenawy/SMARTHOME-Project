document.addEventListener('DOMContentLoaded', function () {
    var dropdownToggle = document.querySelector('.dropdown-toggle');
    var dropdownMenu = document.querySelector('.dropdown-menu');

    dropdownToggle.addEventListener('click', function () {
        dropdownMenu.classList.toggle('show');
    });

    document.addEventListener('click', function (event) {
        var isClickInsideDropdown = dropdownToggle.contains(event.target) || dropdownMenu.contains(event.target);

        if (!isClickInsideDropdown) {
            dropdownMenu.classList.remove('show');
        }
    });
});