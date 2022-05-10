document.getElementsByClassName("loginBtn")[0].addEventListener("click", function () {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    if (username === "" || password === "") {
        alert("Username and password required!");
        return;
    }
    if (username === "user" && password === "password") {
        console.log("username", username);
        console.log("pass", password);
        localStorage.setItem("username", username);
        window.location.assign("index.html");
    }
    else{
        alert("Incorrect username and/or password!");
        return;
    }
});