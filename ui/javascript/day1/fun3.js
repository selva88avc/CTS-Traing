function wishMe(name)
{
    console.log(`Welcome ${name}`)
}
function calcuTax(amount)
{
    console.log(typeof(amount))
    if(typeof amount =='number')
    {
        if (amount>50000)
        {
        return amount*18/100;
           }
        else
        return amount*12/100;
    }

    else
    return "Invalid Number";
}
wishMe("Hari")
let tax=calcuTax("60000")
console.log(" Tax is  " + tax)


