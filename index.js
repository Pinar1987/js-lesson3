function check () {
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value
    isValidPassword(username, password)
}

function isValidPassword (username, password){

    if (password.length<8){
        alert("password must be atleast 8 characters")
        return false
    } else 
    if (password.indexOf(" ")>0){
        alert("password cannot contain spaces")
        return false
    } else
    if (password.indexOf(username)>0){
        alert("password cannot contain the username")
        return false
    }else {
        return true
    }
}