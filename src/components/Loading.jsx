import React from "react";

const Loading = () => {
  return (
    <div className="loading-overlay">
      <div className="loading">
        <h4 style={{color: "black"}}>Processing. Please Wait...</h4>
      </div>
    </div>
  );
};

export default Loading;
