export class Receipe{
    public name:string;
    public description:string;
    public imagepath:string;

    constructor(name:string,desc:string,image:string){
        this.name=name;
        this.description=desc;
        this.imagepath=image;
    }
}