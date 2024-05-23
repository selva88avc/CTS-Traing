interface iAccount
{
    accounttype : string;
    showDetail() : void
}

class UserAccount implements iAccount
{
    accounttype: string;
    showDetail(): void {
        throw new Error("Method not implemented.");
        
    }
    
}