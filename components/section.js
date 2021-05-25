import React from "react";

const Section = (props) => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col"></div>
          <div className="col-8">{props.children}</div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
};

export default Section;
