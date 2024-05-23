let fruits=["Apple","Banana","Apricot","Mango","Musambi","Avacoda"]

fruits.forEach( (frt)=> {
                           // if(frt.startsWith('A'))
                        //    console.log(frt)

                    })


// let fruitresult=fruits.filter( (frt)=>frt.length>5)
// console.log(fruitresult)

//fruits.filter( (frt)=>frt.length>5).forEach( frt=>console.log(frt))

// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   0,
// )
// console.log(sumWithInitial)

const answer=fruits.reduce(
                             (cnt,frt)=>{
                                      //  if (frt.startsWith('A'))
                                     cnt=cnt+frt.length;
                                     return cnt;
                                        }
                                , 0
                            )
//console.log(`count of string is ${answer}`)



const resutlarr=fruits.reduce(
    (arr,frt)=>{
               if (frt.startsWith('A'))
            arr.push(frt)
            return arr;
               }
       , []
   )
   //console.log(resutlarr)


 //  fruits.map( frt=> frt.toUpperCase()).forEach( frt1=> console.log(frt1))


let anscount=fruits.map(frt=>frt.toUpperCase())
      .filter( frt1=> frt1.startsWith('M'))
      .reduce(  (cnt,frt)=> {cnt++; return cnt} , 0 )

console.log(anscount)
