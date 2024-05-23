function display()
{
  let data=document.getElementById("idseason").value
    let spaobj=document.getElementById("spa1")

  if (data==="summer")
   { 
     spaobj.innerText="Summer"
     document.getElementsByClassName("clsh3")[0].innerText="Watermelon"
     document.getElementById("spa2").innerHTML="<ul><li>Juice</li><li>Buttermilk</li></ul>"
   }
     else
     {
     spaobj.innerText="Winter"
     document.getElementsByClassName("clsh3")[0].innerText="Papaya"
     document.getElementById("spa2").innerHTML="<ul><li>Soups</li><li>Hot Coffee</li></ul>"

     }

    document.getElementsByClassName("clsh3")[0].style.color="red"
    document.getElementById("idh3").style.background="green"

    // alert("Welcome ")
}

function setColor(colorcode)
{
    console.log(colorcode)
     if(colorcode==='r')
        document.body.style.backgroundColor="red"
    else if(colorcode='b')
    document.body.style.backgroundColor="blue"
else
document.background="white"
}
