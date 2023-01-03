import React from "react";

export default function Href({ children }) {
  return (
    <div className="href">
      <a href={children} target="_blank" rel="noopener noreferrer">{children}</a>
    </div>
  );
}
