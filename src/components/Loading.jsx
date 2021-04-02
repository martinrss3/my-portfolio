import React from "react";
import Loader from "react-loader-spinner";

const Loading = () => {
  return (
    <div>
      <Loader
        type="Puff"
        color="rgb(0, 153, 255)"
        height={100}
        width={100}
        timeout={10000}
      />
    </div>
  );
};

export default Loading;
