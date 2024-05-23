let items=[

    {
        "name":"Mouse",
        "price":"3$"
},
{
    "name":"printer",
    "price":"10$"
},
{
    "name":"kboard",
    "price":"5$"
}
]

items.forEach(
  (itm)=>
  {
     for (let key in itm)
     {
        console.log( key + " : " + itm[key])
     }
  }




)