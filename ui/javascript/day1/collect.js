let item={
        "name":"Mouse",
        "price":"3$"
}

console.log(item["name"])

for(let key in item)
{
    console.log( "key " + key + "value "  + item[key])
}

