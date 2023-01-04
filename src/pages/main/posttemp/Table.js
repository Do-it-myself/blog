import React from "react";

export default function Table({ children }) {
  return (
    <div className="tableFlex">
      <table className="table">{children}</table>
    </div>
  );
}
