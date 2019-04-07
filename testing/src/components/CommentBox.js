import React, { Component } from "react";

// export default ()=>{
//     //retrun <div>Box for Comment</div>;
//     return <div>Box for Comment</div>;
// }

class CommentBox extends Component {
  state = { comment: "" };

  handlechange = event => {
    this.setState({
      comment: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    //Call an Action creator
    //And save the comment
    this.setState({ comment: "" });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Add a Comment</h4>
        <textarea onChange={this.handlechange} value={this.state.comment} />
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
    );
  }
}

export default CommentBox;
