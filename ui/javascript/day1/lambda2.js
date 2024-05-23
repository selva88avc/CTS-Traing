let x1=num=>num*num  
let x2=num=>num*num*num

function addAll(fun1,fun2,num)
{
                    x1(5) + x2(5)
    console.log( fun1(num) + fun2(num) )
}

//addAll(x1,x2,5)

addAll( (n)=>n*10 , x2, 5 )


