import React from "react";

const HOC = (Cmp) => {
  return class extends React.Component {
    render() {
      return (
        <>
          <Cmp {...this.props} />
        </>
      );
    }
  };
};
export default HOC;