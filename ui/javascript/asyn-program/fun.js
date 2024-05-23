function printAll()
{
    setTimeout( ()=>{

        for(i=0;i<=15000;i++)
            console.log("*")
    },3000)
  
}

function getData()
{
    console.log("Welcome all");
}

function mainFun()
{
    printAll();
    getData();
    console.log("Main Method - processing");
}

mainFun()

