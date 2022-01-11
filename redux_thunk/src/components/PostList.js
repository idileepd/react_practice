import React from "react";

import { connect } from "react-redux";
import { fetchUsersPosts } from "../actions";
import UserHeader from "./UserHeader";

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchUsersPosts();
  }
  renderList() {
    return this.props.posts.map((post, index) => {
      return (
        <div
          key={post.id}
          style={{
            marginLeft: "30px",
            marginRight: "30px",
            marginBottom: "30px",
            marginTop: "30px",
          }}
        >
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <UserHeader userId={post.userId} />
          <hr />
        </div>
      );
    });
  }
  render() {
    return (
      <div>
        PostList
        {this.renderList()}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchUsersPosts })(PostList);
