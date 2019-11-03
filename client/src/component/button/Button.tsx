import React, { Component } from "react";

interface IButtonProps {
  title: string;
  onClick?: (e?: any) => void;
}

class Button extends Component<IButtonProps, object> {
  public render() {
    return (
      <div>
        <button
          style={{ width: "200px", height: "30px" }}
          onClick={this.props.onClick}
        >
          {this.props.title}
        </button>
      </div>
    );
  }
}

// const Button: React.FC<any> = () => (
//   <div>
//     <button
//       style={{ width: "200px", height: "30px" }}
//       onClick={handleClick}
//     >
//       Get List
//     </button>
//   </div>
// );

export default Button;
