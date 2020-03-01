//jshint esversion:9

// const btn = document.querySelector("button");
// btn.addEventListener("click", () => {
//     alert("herllo")
// });

let email = document.querySelector("input");

const error = document.querySelector(".error");

const form = document.querySelector("form");


form.addEventListener("submit", (event) => {
    event.preventDefault();
    validate();
});


function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}


function validate() {
    // let email = input;

    if (!validateEmail(email.value)) {
        error.innerText = "Please provide a valid email address";
        error.style.color = "hsl(354, 100%, 66%)";
        email.style.borderColor = "hsl(354, 100%, 66%)";
    } else {
        error.innerText = "";
    }
    return false;
}

// $("form").bind("submit", validate);