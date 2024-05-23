function fetchData()
{
let searchdata=document.getElementById("txtsearch").value

let tab=document.getElementsByTagName("table")[0]
//console.log(tab)

let tbodyobj=tab.getElementsByTagName("tbody")[0]
//console.log(tbodyobj)

let rows=tbodyobj.getElementsByTagName("tr")
 
var flag="n"
let result="";
for (let i=1;i<rows.length;i++)
    {
         
        tcells=rows[i].getElementsByTagName("td")

console.log(tcells)



     let name=tcells[0].innerText
       if(name===searchdata)
        {
            flag="y"
     
result=tcells[1].innerText + "  " + tcells[2].innerText
        }
    }
 
    if (flag==="n")
        {
            document.getElementById("idresult").innerText=" Account holder not found"
        }
        else
        document.getElementById("idresult").innerText= result
}




        //spread operator
// tcellarr=[...tcells]

// console.log(tcellarr)

// let ans=tcellarr.filter( td=> td.innerText==searchdata)
        
//  if(ans.length==0)
//     {
//         console.log("not found")
//     }
// else
//  console.log(ans)