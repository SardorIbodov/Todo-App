import React, { useState, useEffect, useRef } from "react";

export const TodoForm = ({edit, onSubmit}) => {
  const [input, setInput] = useState(edit ? edit.value : " ");

  const inputRef = useRef(null);

  useEffect(() => inputRef.current.focus());

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder={edit ? "Edit your todo" : "Add a todo"}
        name="text"
        className="todo-input"
        value={input}
        onChange={handleChange}
        ref={inputRef}
      />
      <button type="submit" className="todo-button">
        {edit ? "Update todo" : "Add Todo"}
      </button>
    </form>
  );
};
