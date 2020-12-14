import React, { useState } from "react";

export default function SimpleFormHooks() {
  const [email, setEmail] = useState("");

  const handleChange = e => {
    setEmail(e.target.value);
  };
  return (
    <div>
      <h1>Form example with Hooks</h1>
      <p>you entered {email}</p>
      <input
        type="text"
        id="email"
        onChange={handleChange}
        name="email"
        value={email}
      />
    </div>
  );
}
