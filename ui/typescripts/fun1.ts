function calcuAverage(mark1:number ,mark2:number) 
{
    if(mark1<0 || mark2<0 )
        return "Invalid Scores";
    else
    return (mark1+mark2)/2;
}

function showDetails(amount : number | string)
{
      if(typeof(amount)=="number")
        {
            console.log( "Given amount is Rs." + amount)
        }
        else
        console.log("amount in words " + amount)
}

showDetails("three hundred")
let num1:number=0
let num2:number=0
console.log(calcuAverage(num1,num2))
