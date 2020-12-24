import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

const Todos = (props) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        let inp = e.target.input.value;
        props.dispatch(addTodo(inp));
        e.target.input.value = " ";
      }}
    >
      <input type="text" name="input" />
      <button type="submit">submit</button>
    </form>
  );
};
export default connect()(Todos);
