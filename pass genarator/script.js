let password =()=>{
let char= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+=-><:;?"
let password=""
console.log("imp");

for (let i = 0; i < 10; i++) {
    let reasult= Math.floor(Math.random()*10);
    password += char.charAt(reasult);
    
}
document.getElementById("pass").value = password; // 






}


// // const Password = () => {
// //     let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
// //     let password = "";

// //     for (let i = 0; i < 10; i++) {
// //         let randomIndex = Math.floor(Math.random() * characters.length);
// //         password += characters[randomIndex];
// //     }

// //     document.getElementById("pass").value = password; // Show password
// // };

// const copy = () => {
//     const password = document.getElementById("pass").value;
//     navigator.clipboard.writeText(password); // Copy to clipboard
//     alert("password is copied sucessfully")
// };

// // Call `generatePassword()` to create a password
// Call `copyPassword()` to copy it when needed
let copy = () => { 

    let oldpassword = document.getElementById("password").value;
     if (oldpassword === "") {
         document.getElementById("pass").innerHTML = "Please generate a password"; }
          else { navigator.clipboard.writeText(oldpassword)}
     }