import React from "react";
import ReactJson from "react-json-view";
import { connect } from "react-redux";
import { consoleLog } from "../actions";

class LogList extends React.Component {
  render() {
    return (
      <div>
        {this.props.logsList.length > 0 && (
          <div>
            {this.props.logsList.map(function (item, i) {
              return <ReactJson key={i} src={item} />;
            })}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  //   console.log(state);
  return { logsList: state.logsList };
};

export default connect(mapStateToProps, {
  //actions if needed
  consoleLog,
})(LogList);
