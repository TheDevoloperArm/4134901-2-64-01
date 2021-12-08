import React from "react";

class Wheel extends React.Component{
  constructor(props){
    super(props);
    this.state = [2, 4, 6, 8, 10];
  }
    render(){
        return <p>{this.state.length > 0 && <p>I hav 4 wheels</p>}</p>
    }
}

class Car extends React.Component{
    constructor(props){
      super(props);
      this.state = { brand: "toyota"}
    }
    changeBrand = (msg) =>{
        this.setState({brand  : "Mazda"})
        alert(msg)
    }
    render(){
      return(
        <>
        <Wheel />
            <p>
            My Name is <span>{this.state.brand}</span> Om, {this.props.age}
            <br />
            Eye color is {this.props.eye}  
            </p>
            <button onClick={() =>this.changeBrand("Hi !!")}>Click Me!!!</button>
        </>
      );
    }
}

export default Car;