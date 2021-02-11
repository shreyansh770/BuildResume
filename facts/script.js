let signUpForm = document.querySelector("#signup-form");
let emailInput = document.querySelector("#email");
let passWordInput = document.querySelector("#password")

signUpForm.addEventListener("submit", (e) => {

    e.preventDefault();

    let email = emailInput.value;
    let password = passWordInput.value;

    //this function will add user into firebase db
    auth.createUserWithEmailAndPassword(email, password).then((res) => {
            console.log(res)

        })
        .catch((error) => {
            console.log(error)
        })


})