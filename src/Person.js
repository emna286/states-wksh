import React from "react"
class Person extends React.Component{
constructor(props){
super (props);
this.state={
    Person:{ fullName:"Haamour",bio:" a Cat",
    imgScr:"https://www.thesprucepets.com/thmb/y5JGbldlBUUtRA7ZqeVdQsbVvxg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1288261359-4016b054680e41d28451f081babd0c45.jpg",
    profession:"sleep all the day"},
    shows:true,
    mountingTime:0,
    };
}
componentDidMount(){

setInterval(()=>{
    this.setState({mountingTime:this.state.mountingTime+=0.5})
},1000)
}
change=()=>{
    this.setState({shows:!this.state.shows})
}
render(){
    return(
        <div>
    {this.state.shows?<><h1>Hello I'm {this.state.Person.fullName}</h1>  
        <h1> I'm {this.state.Person.bio}</h1>  
        <h1> I {this.state.Person.profession}</h1>  
        <img src={this.state.Person.imgScr}></img>
        <h1>Time :{this.state.mountingTime}</h1>
        </>:null
    }
    
    <button onClick={this.change}>show</button>
    
        </div>
    );

    
}
}
export default Person
