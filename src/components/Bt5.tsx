import React, { Component } from 'react'
import FBai5 from './FBai5'
interface Product{
  id:number,
  name:string,
  price:number,
  quantity:number
}
export default class Bai5 extends Component<{},Product> {
  constructor(props:Product){
    super(props)
    this.state ={
      id:1,
      name:'Box',
      price:9000,
      quantity:2
    }
  }
  render() {
    return (
      <div>
        <FBai5 a={this.state}></FBai5>
      </div>
    )
  }
}
