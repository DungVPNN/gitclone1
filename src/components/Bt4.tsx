import React, { Component } from 'react'
import FBai4 from './FBai4'
interface Parent{
  name:string
}
export default class Bai4 extends Component<Parent> {
  constructor(props:Parent){
    super(props)
    this.state={
      name:'Dung'
    }
  }
  render() {
    return (
      <div>
        <FBai4 a={this.state.name}></FBai4>
      </div>
    )
  }
}
