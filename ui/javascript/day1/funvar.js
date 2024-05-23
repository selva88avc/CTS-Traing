let fun1= (type,amt)=>
{   if (type=='FD')
    return amt*8/100;
else if (type=="RD")
return amt*7/100;
else
return amt*5/100;
}
let fun2= (amount)=>
{
    if(amount<0)
    return false;
    else
    return true;
}
function displayAll(f1,f2)
{    if(f2(10000))
    {        console.log(f1("FD",10000))
    }
    else
    console.log("Invalid")
}

//displayAll(fun1,fun2)

displayAll(fun1, (amount)=> {
    if(amount<0)
    return false;
    else
    return true;
})