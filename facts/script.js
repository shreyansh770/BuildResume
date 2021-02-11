let signUpForm = document.querySelector(".signup-form");
let signInForm = document.querySelector(".signin-form");


let emailInput = document.querySelector("#email");
let passWordInput = document.querySelector("#password")
let nameInput = document.querySelector("#name")

let signIn = document.querySelector("#signin")
let signUp = document.querySelector("#signup")
let logout = document.querySelector("#logout")

let emailSignIn = document.querySelector("#email-si");
let passWordSignIn = document.querySelector("#password-si")



// it will keep a check on if user is logged in or not
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      
      signUp.classList.add("hide");
      signIn.classList.add("hide");
      signUpForm.classList.remove("active");
      signInForm.classList.remove("active");
      logout.classList.remove("hide");

      let uid = user.uid;

      //getting data from db using uid 
      db.collection("user-table").doc(uid).get().then((user) => {

        //console.log(user.data());//data is function when called returns user details obj

        document.querySelector(".welcome").innerHTML = "Welcome" + " " + user.data().name
    })

    } 
    
    else {
      // No user is signed in.

      signUp.classList.remove("hide");
      signIn.classList.remove("hide");
      signInForm.classList.add("active");
      logout.classList.add("hide")


      document.querySelector(".welcome").innerHTML = "Please Log In"
    }

  });



signUpForm.addEventListener("submit", (e) => {

    e.preventDefault();

    let email = emailInput.value;
    let password = passWordInput.value;
    let name = nameInput.value

    //this function will add user into firebase db
    auth.createUserWithEmailAndPassword(email, password).then((res) => {
            
        //collection me ek doxument ban jayega

        db.collection('user-table')//creating a collection with user-table name(if it does not exists)
        .doc(res.user.uid)//adding you can say row 
        .set({name : name , email :email , password : password})//setting the data we need in the doc

        })
        .catch((error) => {
            console.log(error)
        })


})



signInForm.addEventListener("submit", (e) => {

    e.preventDefault();

    let email = emailSignIn.value;
    let password = passWordSignIn.value;

    if(email && password){

        auth.signInWithEmailAndPassword(email, password).then((res) => {
            console.log(res.user);
        })
        .catch((error) => {
            console.log(error);
        })
    }



})





signIn.addEventListener("click" , (e)=>{

    e.preventDefault();

    signUpForm.classList.remove("active");
    signInForm.classList.add("active");

})

signUp.addEventListener("click" , (e)=>{

    e.preventDefault();

    signInForm.classList.remove("active");
    signUpForm.classList.add("active");
})


logout.addEventListener("click" , (e)=>{
    e.preventDefault();

    auth.signOut()
    // .then((res) => {
    //     document.querySelector(".welcome").innerHTML = "";
    // })
    // .catch((error) => {

    // })
    
})