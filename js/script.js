// Written by: Parth Vasdewani
//Date: 15/07/2023
//GitHub:imparthv
let inputString = "";
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach(button => {
    button.addEventListener('click', (e) => {
        try {
            if (e.target.innerHTML == "=") {
                inputString = eval(inputString);
                document.querySelector('input').value = inputString;
            }

            else if (e.target.innerHTML == "Reset") {
                inputString = "";
                document.querySelector('input').value = inputString;
            }

            else {
                console.log(e.target);
                inputString = inputString + e.target.innerHTML;
                document.querySelector('input').value = inputString;
            }

        } catch (error) {
            inputString = "Enter valid number";
            document.querySelector('input').value = inputString;
        }


    });
});