import React, { Component } from "react";
import FBai8 from "./FBai8";

interface ListProduct {
id: number;
name: string;
price: number;
quantity: number;
}
interface Prop {

}
interface State {
listProduct: ListProduct[];
}
export default class Bai8 extends Component<Prop, State> {
constructor(props: Prop) { 
  super(props);
  this.state = {
    listProduct: [
      {
        id: 1,
        name: 'Sach',
        price: 1000,
        quantity: 1
      },
      {
        id: 2,
        name: 'But',
        price: 2000,
        quantity: 2
      },
      {
        id: 3,
        name: 'Thuoc',
        price: 3000,
        quantity: 3
      },
    ],
  };
}
render() {
  return (
    <div>
      <table border={1}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Tên</th>
            <th>Giá</th>
            <th>Số lượng</th>
          </tr>
        </thead>
        <tbody>
          {this.state.listProduct.map((product) => (
            <FBai8 key={product.id} a={product} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
}