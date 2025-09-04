/* eslint-disable no-unused-vars */
import React from "react";

function Header({ newFun }) {
  console.log("Header Rendered");

  return <div>Header</div>;
}

// prevent re-rendering
// export default React.memo(Header);

export default React.memo(Header);
