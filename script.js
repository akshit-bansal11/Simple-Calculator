document.addEventListener('DOMContentLoaded', function() {
    var Buttons = document.querySelectorAll('.btn');
    var inputBox = document.getElementById('result-box');

    Buttons.forEach(function(button) {
        button.addEventListener('click', function() {

            var btnvalue = this.value;

            if (btnvalue === "del") {
                inputBox.value = inputBox.value.slice(0, -1);
            }

            else if (btnvalue === "delall") {
                inputBox.value = inputBox.value.slice(0, 0)
            }

            else if (btnvalue === "=") {
                inputBox.value = eval(inputBox.value);
            }

            else {
                inputBox.value += this.value;
            }
        });
    });
});