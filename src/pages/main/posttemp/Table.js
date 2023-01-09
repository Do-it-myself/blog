import React from "react";

export default function Table({ children, style, border }) {
  return (
    <div className="tableFlex">
      <table className={border? "tableBorder" : "table"} style={style}>{children}</table>
    </div>
  );
}
