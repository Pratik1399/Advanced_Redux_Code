import React, { Component } from "react";
import { connect } from "react-redux";

// export default ()=>{
//     return <div>Comment List</div>;
// }

class CommentList extends Component {
  renderComments() {
    return this.props.comments.map(comment => {
      return <li key={comment}>{comment}</li>;
    });
  }
  render() {
    return (
      <div>
        <ul>{this.renderComments()}</ul>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    comments: state.comments
  };
}

export default connect(mapStateToProps)(CommentList);
