function calcuInterest(type,amt,day)
{
    if (type=='FD')
    return amt*8/100;
else if (type=="RD")
return amt*7/100;
else
return amt*5/100;
}
function processData(username, fun1, savingstype,amount)
{
    if(typeof username=='string' && typeof amount=='number')
    {
            console.log(fun1(savingstype,amount,"Tuesday"))
    }
    else
    console.log("Invalid Input")

}

processData("Abhishek",calcuInterest,"savings",50000)