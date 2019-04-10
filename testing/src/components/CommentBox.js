import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "actions";

// export default ()=>{
//     //retrun <div>Box for Comment</div>;
//     return <div>Box for Comment</div>;
// }

class CommentBox extends Component {
  state = { comment: "" };

  handleChange = event => {
    this.setState({
      comment: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.saveComment(this.state.comment);
    //Call an Action creator
    //And save the comment
    this.setState({ comment: "" });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Add a Comment</h4>
        <textarea onChange={this.handleChange} value={this.state.comment} />
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
    );
  }
}

export default connect(
  null,
  actions
)(CommentBox);
