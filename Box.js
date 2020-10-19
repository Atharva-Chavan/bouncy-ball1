class Box{
constructor(){
    var ball_options ={
        restitution: 1.0
    }
this.body = Bodies.rectangle(200,200,50,30,ball_options)
World.add(world,this.body)


}
display(){

    var position = this.body.position;
    rectMode(CENTER)

    rect(position.x,position.y,this.width,this.height)
}

}