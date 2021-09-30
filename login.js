const dublet= {
    utilizator:"admin",
    parola:"admin"
}
function validare()
{
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
console.log(user)
    if (user == dublet.utilizator && pass == dublet.parola)
    {
        alert("Autentificare realizata cu succes.");
        window.open("https://www.google.com");
    }
    else 
    {
        alert("Numele de utilizator sau parola sunt gresite.");
       
        return 
    }
}