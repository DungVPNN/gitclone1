import React, { Component } from "react";
import FBai7 from "./FBai7";
interface ListPost {
  id: number;
  title: string; 
  content: string;
  author: string;
}
interface Prop {

}
interface State {
  listPost: ListPost[];
}
export default class Bai7 extends Component<Prop, State> {
  constructor(props: ListPost) {
    super(props);
    this.state = {
      listPost: [
        {
          id: 1,
          title: 'Canh dep thien nhien',
          content: 'Trong cay moi ngay',
          author: 'Top do an vat',
        },
        {
          id: 2,
          title: 'asd',
          content: 'asd',
          author: 'asd',
        },
      ],
    };
  }
  render() {
    return (
      <div>
        {this.state.listPost.map((ListPost) => (
          <FBai7 key={ListPost.id} a={ListPost}></FBai7>
        ))}
      </div>
    );
  }
}