export class SceneObject 
{
    public filename:string;
    public pos:number[];
    public rotation:number[] = [ 0, 0, 0, 1 ];
    public angles:number[] = [ 0, 0, 0 ];
    public scale:number[] = [ 1, 1, 1 ];
    
    // optional properties
    public portable:boolean = false;
    public throwable:boolean = false;
    public rigidbody:boolean = false;
    public text:string = "";
}