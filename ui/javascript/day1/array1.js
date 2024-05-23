function funRemove(arr,search)
{

    if (Array.isArray(arr))
    {
    let index=arr.findIndex( sub=> sub.includes(search))
    if(index>=0)
    {
   arr.splice(index,1)
   console.log(`${search} got deleted`)
    }
    else
    console.log("Element not found " + search)
    }

    else
    console.log("Invalid array ")
}

let subjects=["c","c++","python","java"]

funRemove(subjects,"python")
console.log(subjects)

//subjects.push("spring")
//console.log(subjects)

// console.log(subjects.slice(1,3))

// console.log(subjects.pop())
// console.log(subjects)

//subjects.splice(1,2,)

//console.log(subjects)


