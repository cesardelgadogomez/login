const signUpForm = document.querySelector("#signupform");
signUpForm.addEventListener("submit", (e) => {
  e.preventDefault()
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const isUserRegistered = users.find(user => user.email === email);
  if(isUserRegistered){
    return alert("El usuario ya está registrado")
  }

  users.push({name:name, email:email, password:password})
  localStorage.setItem("users", JSON.stringify(users));
  alert("¡Registro exitoso!");
  //Redirección a Login
  window.location.href = "login.html";

  
})