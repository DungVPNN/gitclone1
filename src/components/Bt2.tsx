import React, { Component } from 'react'
interface Props{

}
interface State{
    id:number;
    name:string;
    age:string;
    address:string;
}
export default class Bt2 extends Component<Props,State> {
    constructor(props:Props){
        super(props)
        this.state={
            id:1,
            name:"Nguyen Van Son",
            age:"20/12/2023",
            address:"Thanh Xuan-Ha Noi"
        }
    }
  render() {
    return (
      <div>Bt2
      <p>id:{this.state.id}</p>
      <p>ten:{this.state.name}</p>
      <p>ngay sinh:{this.state.age}</p>
      <p>dia chi:{this.state.address}</p>
      </div>
    )
  }
}
