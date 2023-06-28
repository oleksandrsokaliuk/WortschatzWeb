import React from "react";
import Input from "./Input";

export default function Form() {
  return (
    <form>
      <Input placeholder="Type your email" title="Email" />
      <Input placeholder="Type your password" title="Password" />
      <button type="submit">Send Form</button>
    </form>
  );
}
