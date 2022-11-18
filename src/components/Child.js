import React from "react";

function Child({ firstName }) {
  console.log("Child");
  return (
    <div>
      <h2>{firstName}</h2>
    </div>
  );
}
export default React.memo(Child);
