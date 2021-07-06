export class Comment {
    

    constructor( private commentId: number){

    }
    public displayComment(){
        console.log("Comment ID: "+ this.commentId);
    }
   
}

export class Like {
    constructor ( private _likeCount: number, private _likeFlag: boolean){

    }

    
}
let comment= new Comment(12);


comment.displayComment();
//edit
