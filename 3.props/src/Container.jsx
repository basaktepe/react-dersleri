import React from "react";

function Container({ children }) {
  return (
    <div>
      <div>Container componenti çalıştı</div>
      {children}
    </div>
  );
}

export default Container;
