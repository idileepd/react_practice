import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

class UserHeader extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }
  render() {
    if (this.props.user) return <div>user: {this.props.user.name}</div>;
    else return <></>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users.find((user) => user.id === ownProps.userId),
  };
};
export default connect(mapStateToProps, { fetchUser: fetchUser })(UserHeader);
