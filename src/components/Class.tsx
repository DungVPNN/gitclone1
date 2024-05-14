import React, { Component } from 'react'
interface Props{
}
interface State{
    name:string;
    age:number;
    address:string;
}
export default class Class extends Component<Props,State> {
    constructor(props:Props){
        super(props)
        this.state={
            name:"minh thu",
            age:15,
            address:"Ha Noi"
        }
    }
    Handleschanges=()=>{
      this.setState({
        age:25,
        name:"Lan",
      })
    }
  render() {
    return (
      <div>Class
        Ten:{this.state.name} nam nay {this.state.age}
        <button onClick={this.Handleschanges}>HandleClick</button>
      </div>
    )
  }
}
