function funPromise()
{
    let age=11;
    let promobj=new Promise( (resolve,reject)=>{
                                          
                            if(age>=18)
                            resolve("You are eligible for voting")
                           else
                            reject("not valid for voting")

    });

    promobj.then( res=> console.log(res))
            .catch( err=> console.log("error " + err ))

}

funPromise()