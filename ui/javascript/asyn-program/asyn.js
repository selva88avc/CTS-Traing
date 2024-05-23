async function myFun()
{
    try
    {
        let result= await fetch('localhost:3000/books')
    console.log(result)     

    }
    catch(err)  
    {
        console.log("error" + err)

    }
}

myFun()