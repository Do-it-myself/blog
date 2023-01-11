import React from "react";

export default function Href({ children, embed }) {
  if (embed) {
    return (
        <a href={embed} target="_blank" rel="noopener noreferrer" className="hrefembed">
          {children}
        </a>
    );
  }

  return (
    <div className="href">
      <a href={children} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    </div>
  );
}
