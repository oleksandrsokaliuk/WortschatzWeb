import React from "react";

export default function Input({ placeholder, title }) {
  return (
    <div>
      <label htmlFor={title}>{title}</label>
      <input id={title} placeholder={placeholder} />
    </div>
  );
}
