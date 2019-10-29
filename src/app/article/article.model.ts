
export class Article {
    private titre : string;
    private lien : string;
    private vote : number;

    constructor (titre:string, lien:string, vote:number = 0){
        this.titre = titre;
        this.lien = lien;
        this.vote = vote;
    }

    voteUp(){    this.vote++;}
    voteDown(){  this.vote--;}

    getVote() : number{
        return this.vote;
    }



    setTitre(titre:string){
        this.titre = titre;
    }

    getTitre(){
        return this.titre;
    }

    setLien(lien:string){
        this.lien = lien;
    }

    getLien(){
        return this.lien;
    }

    getDomaine(){
        return this.lien.split("//")[1];
    }
}
