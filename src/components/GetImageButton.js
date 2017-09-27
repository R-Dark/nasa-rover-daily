import React, { Component } from "react";

class GetImageButton extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.fetchRoverImage}>Submit</button>;
      </div>
    );
  }
}

export default GetImageButton;
