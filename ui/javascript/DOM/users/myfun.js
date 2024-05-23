function validateData( )
{
    event.preventDefault();
    let isValid="y";

    let error="<ul>";
    let userid=document.getElementById("userid").value
    let username=document.getElementById("username").value
    let password=document.getElementById("password").value
    let email=document.getElementById("emailid").value

    

    let mypattern=/^[M | D]/
    let resutlarr=userid.match(mypattern)
    console.log(resutlarr)
      if (resutlarr==null)
        {
          
            isValid="n"
            error=error+"<li> Invalid Id</li>"
            document.getElementById("userid").value=""
            document.getElementById("userid").focus()

        }

         if ((username.length<5) || (password.length<5))
            {
            isValid="n"
            error=error+"<li> invalid name  or passowrd </li>";
            }
         if((email.includes("@cts.com"))==false)
            {
            isValid="n"
            error=error+"<li> invalid emailid</li>";
            }

        if (isValid=="y")
            {
            alert("Data validated")
            sessionStorage.setItem("uname",username)
            localStorage.setItem("ekey",email)
            window.open("dashboard.html")
            }
            else

            {
                error=error+"</ul>"
              document.getElementById("spaerror").innerHTML=error  
               // alert("Invalid Userid")
            }

}

function validateEmail()
{
    let email=document.getElementById("emailid").value

    if (email==null ||  email.length===0 )
        {
            document.getElementById("emailid").focus();
        }
}