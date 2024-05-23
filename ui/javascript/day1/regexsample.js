let phonenumber="12347890"
const phonepattern= /^\d{10}$/;

// console.log(phonepattern.test(phonenumber))

// if(phonepattern.test(phonenumber))
// console.log("Valid number")
// else
// console.log("Invalid phone number, should be 10 dit")

let dob="my dateof birth is 01-12-2013"
const dobpattern=/(\d{2})-(\d{2})-(\d{4})/

const result=dobpattern.exec(dob)
//console.log(result)
if(result)
{
    console.log('Day is ' + result[1] + ' year is ' + result[3])
}

const sentence="today is wednesday and is a holiday";
const pattern=/holiday/

let ans=pattern.test(sentence)
if(ans)
console.log(" It is a holiday")
else
console.log("working day")