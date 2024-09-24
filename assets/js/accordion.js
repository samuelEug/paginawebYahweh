document.addEventListener('DOMContentLoaded', function () {
    var accordions = document.querySelectorAll(".accordion-btn");

    accordions.forEach(function (button) {
        button.addEventListener("click", function () {
            this.classList.toggle("active");

            var panel = this.nextElementSibling;
            if (panel.classList.contains('show')) {
                panel.classList.remove('show');
            } else {
                panel.classList.add('show');
            }
        });
    });
});