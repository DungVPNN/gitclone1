import React, { Component } from "react";
import FBai6 from "./FBai6";
interface User {
  id: number;
  name: string;
  address: string;
  email: string;
}
interface Prop {

}
interface State {
  users: User[];
}
export default class Bai6 extends Component<Prop, State> {
  constructor(props: User) {
    super(props);
    this.state = {
      users: [
        {
          id: 1,
          name: "Dung",
          address: "Ha Noi",
          email: "abc@gmail.com",
        },
        {
          id: 2,
          name: "Dung",
          address: "Ha Noi",
          email: "abc@gmail.com",
        },
      ],
    };
  }
  render() {
    return (
      <div>
        {this.state.users.map((user) => (
          <FBai6 key={user.id} a={user}></FBai6>
        ))}
      </div>
    );
  }
}