class UserAccount {
    
    constructor(private _userId?: number, private _userName?: string){

    }
    set userId(id: number){
        this._userId=id;
    }
    set userName(name: string) {
        this._userName=name
    }
    get userName(){
        return this._userName;
    }
    display(){
        console.log("User ID: "+ this._userId+ " Name: "+this._userName);
    }

    

}

let user1: UserAccount = new UserAccount();
user1.userId=11;
user1.userName= 'Dhrubajit';
user1.display();
console.log(user1.userName);


