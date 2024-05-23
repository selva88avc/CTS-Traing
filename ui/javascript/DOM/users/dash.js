function displayData()
{
    let username=sessionStorage.getItem("uname")
    let email=localStorage.getItem("ekey")
    console.log(username + "" + email)
    document.getElementById("spauser").innerText=username + " " + email

}