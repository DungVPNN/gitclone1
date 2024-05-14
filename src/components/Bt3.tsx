import React, { Component } from 'react';

interface Props {
  users: User[];
}

interface User {
  id: number;
  name: string;
  address: string;
}

interface State {
  users: User[];
}

export default class Bt3 extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      users: [
        {
          id: 1,
          name: "Nguyen Minh Son",
          address: "Ha Noi",
        }
      ]
    };
  }

  render() {
    return (
      <div>Bt3
        <ul>
          {this.state.users.map((item, index) => {
            return <li key={index}>Tên {item.name} địa chỉ {item.address} ID {item.id}</li>
          })}
        </ul>
      </div>
    );
  }
}