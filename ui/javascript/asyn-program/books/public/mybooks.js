var bookarr=[];

function addBook()
{
  let bid=document.getElementById("txtid").value
  let bname=document.getElementById("txtname").value
  let author=document.getElementById("txtauthor").value

  let data={
            "id":bid,
            "bookname":bname,
            "author":author
         }

     return    fetch('http://localhost:3000/books', 
            {
               "method":"POST",
               "headers": {"content-type": "application/json"},
               "body":JSON.stringify(data)
            }

         ).then(
               (res)=>
                  {
                        if(res.status===201)
                           {
                              console.log("Added")
                              bookarr.push(data);
                              displayData();
                              return Promise.resolve(data)

                           }
                  }

         )
         .catch(
               (err)=>
                  {
                     return Promise.reject(err)

                  }

         )
}

function getData()
{
   fetch('http://localhost:3000/books')
   .then( (res)=>{
                if(res.ok)
                    {
                       return     res.json()
                    }
                    else
                    {
                        return Promise.reject(new error("Something went wrong while fetching"))
                    }

   })
   .then( (res2)=>{
      console.log(res2)
      bookarr=res2;
      displayData();
   })
   .catch( (err)=>{

    console.log("Error occured " + err )
   })
}

function displayData()
{

    result="<table border=3>";
    result+="<tr><td>bookid</td><td>bookname</td><td>author</td></tr>";
  if(typeof bookarr!='undefined')
    {
         bookarr.forEach( rec=>
            {
                result+="<tr>";
                result+=`<td>${rec.id}</td><td>${rec.bookname}</td><td>${rec.author}</td>`;
                result+=`<td><button onclick=deleteBook(${rec.id})>Delete</button></td>`;
                result+=`<td><button onclick=viewBook(${rec.id})>Update</td>`;
                result+="</tr>"

            }
         )
         result+="</table>"
    }
 
document.getElementById("display").innerHTML=result;

}

function deleteBook(id)
{
   let ind=bookarr.findIndex( (bk)=> bk.id===id)
   console.log(id)
   fetch('http://localhost:3000/books/'+id,
   {
      "method":"DELETE"
   }
   )
   .then( (res)=>
   {
        if(res.status==200)

      {         
         
         bookarr.splice(ind,1);
        displayData()
         console.log("Record deleted")
  
      }
   }
 )
   .catch((err)=>
   {
      console.log("Error found " + err)
   })   
}

function viewBook(id)
{
console.log("id " + id)
   
   let obj=bookarr.find( (bk)=>bk.id==id)
console.log(obj)
   let bid=obj.id
   let bname=obj.bookname
   let author=obj.author
    document.getElementById("txtid").value=bid
 document.getElementById("txtname").value=bname
 document.getElementById("txtauthor").value=author
}

function updateBook()
{
   let bid=document.getElementById("txtid").value
   let bname=document.getElementById("txtname").value
   let author=document.getElementById("txtauthor").value
 
   let data={
             "id":bid,
             "bookname":bname,
             "author":author
          }

   let ind=bookarr.findIndex( (bk)=> bk.id===bid)
   if(ind<0)
      {
          console.log("Book id doesnt exist");
      }
      else
      {
         fetch('http://localhost:3000/books/'+bid,
         {
            "method":"PUT",
            "headers": {"content-type": "application/json"},
               "body":JSON.stringify(data)
         }
         )
         .then((res)=>{
              if(res.status==200)
               {
          
                  bookarr.splice(ind,1,data)
                  displayData()

               }
         })
         .catch((err)=>{
            console.log("Error " + err)
         })

      }

}
getData()