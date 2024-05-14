import React, { Component } from 'react'
interface Props{
}
interface States{
    name:string;
}
export default class Bt1 extends Component<Props,States> {
    constructor(props:Props){
        super(props)
        this.state={
            name:"Nguyen Minh Son",
        }
    }
  render() {
    return (
      <div>Bt1
        <p>Ho va ten {this.state.name}</p>
      </div>
    )
  }

    
}

