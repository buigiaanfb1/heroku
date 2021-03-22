import React, { memo } from "react";

function Child() {
  return (
    <div>
      <h3>Child</h3>
      {console.log("Child")}
    </div>
  );
}
export default memo(Child);
