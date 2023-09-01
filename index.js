function checkLogin() {
    // In una situazione reale, dovresti confrontare queste informazioni con un database.
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;


//Zona Privata :)    
    if (username === "Admin" && password === "dani") {

        document.getElementById("loginForm").style.display = "none";
        document.getElementById("welcome").style.display = "block";
        document.getElementById("userSpan").textContent = username;
    }

    if (username === "daniele" && password === "dani") {
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("welcome").style.display = "block";
        document.getElementById("userSpan").textContent = username;
    
    }
///////////////////////////////////////////////////////////////////////////



//////////////////////////// family ////////////////////////////////////////////

    if (username === "maria" && password === "tessitore") {

        document.getElementById("loginForm").style.display = "none";
        document.getElementById("welcome").style.display = "block";
        document.getElementById("userSpan").textContent = username;
    
    }

    if (username === "agostino" && password === "varavallo") {
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("welcome").style.display = "block";
        document.getElementById("userSpan").textContent = username;
    
    }

    if (username === "nicola" && password === "varavallo") {
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("welcome").style.display = "block";
        document.getElementById("userSpan").textContent = username;
    
    }

    if (username === "salvatore" && password === "varavallo") {
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("welcome").style.display = "block";
        document.getElementById("userSpan").textContent = username;
    
    }

////////////////////////////////////////////////////////////////////////////







///////////////////////// friends //////////////////////////////////////////
    if (username === "Mister" && password === "gnam") {
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("welcome").style.display = "block";
        document.getElementById("userSpan").textContent = username;
    
    }

    if (username === "Piaa" && password === "Jo") {
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("welcome").style.display = "block";
        document.getElementById("userSpan").textContent = username;
    
    }

    if (username === "totor" && password === "ladr") {
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("welcome").style.display = "block";
        document.getElementById("userSpan").textContent = username;
    
    }

    if (username === "carlotus" && password === "terrone") {
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("welcome").style.display = "block";
        document.getElementById("userSpan").textContent = username;
    
    }

    if (username === "myriam" && password === "spinacina") {
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("welcome").style.display = "block";
        document.getElementById("userSpan").textContent = username;
    
    }

    if (username === "silvana" && password === "alfonsino") {
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("welcome").style.display = "block";
        document.getElementById("userSpan").textContent = username;
    
    }
}
//////////////////////////////////////////////////////////////////////////////    





function logout() {
// Rimuovi il nome utente dal localStorage al momento del logout
localStorage.removeItem("username");
// Reindirizza alla pagina di login
window.location.href = "homepage.html";
}
