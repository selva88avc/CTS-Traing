class Book
{
    bookid=0;
    bookName="";
    author="";
    constructor(bid,bname,auth)
    {
        this.bookid=bid
        this.bookName=bname
        this.author=auth
    }
    display()
    {
        console.log( `book is ${this.bookName} autho is ${this.author}`)

    }
}

let book1=new Book(10,"Java in nutsheel","Jurang")
//book.display()
let book2=new Book(20,"Python","Kennedy")
let book3=new Book(30,"spring","narayan")
let bookarr=[book1,book2,book3]
bookarr.map(bk=>bk.bookName).forEach( nm=>console.log(nm))

