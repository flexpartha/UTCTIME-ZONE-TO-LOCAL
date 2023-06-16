//Factory Method Pattern
//The Factory method pattern provides an interface for creating objects that can be modified after creation. 

export class Allien {
    name: any;
    phrase:any
    constructor(name:any, phrase:any){
        this.name = name,
        this.phrase = phrase
    }

    fly=()=> {
        console.log("Zzzzzziiiiiinnnnnggggg!!")
    }

    sayPhrase =() => console.log(this.phrase)
}