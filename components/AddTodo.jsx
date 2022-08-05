import React, { useState } from "react";

export default function AddTodos({ handleAdd }) {
  const [text, setText] = useState("");

  return (
    <>
      <input
        placeholder="Add Todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          handleAdd(text);
        }}
      >
        AddText
      </button>
    </>
  );
}
