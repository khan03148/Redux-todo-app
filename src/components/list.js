import React from "react";
import { connect } from "react-redux";
import { deleteTodo } from "../actions";

const List = (props) => {
  return (
    <>
      <ul>
        {props.todos.map((a, index) => {
          return (
            <li key={index}>
              {a.message}
              <button onClick={() => props.dispatch(deleteTodo(a.id))}>
                delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
//we pass state data as props to List component
const mapStateToProps = (state) => ({
  todos: state.todos.data,
});

export default connect(mapStateToProps)(List);
