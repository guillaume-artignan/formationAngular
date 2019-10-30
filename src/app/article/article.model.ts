
export class Article {
    public  uuid : string;
    private title : string;
    private link : string;
    private vote : number;

    constructor ( title:string, link:string, vote:number = 0,uuid? : string){
        this.title = title;
        this.link = link;
        this.vote = vote;
        this.uuid = uuid;
    }

    voteUp(){    this.vote++;}
    voteDown(){  this.vote--;}

    getVote() : number{
        return this.vote;
    }



    setTitle(title:string){
        this.title = title;
    }

    getTitle(){
        return this.title;
    }

    setLink(link:string){
        this.link = link;
    }

    getLink(){
        return this.link;
    }

    getDomaine(){
        if (this.link && this.link.indexOf("//")!=-1){
            return this.link.split("//")[1];
        }
        return this.link;
        
    }
}
