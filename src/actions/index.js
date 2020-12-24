const AddTodo = "AddTodo";

// console.log("addTodo", typeof AddTodo);

export const addTodo = (message) => ({
  type: AddTodo,
  message: message,
  id: Math.random(),
});

const DeleteTodo = "DeleteTodo";

export const deleteTodo = (id) => ({
  type: DeleteTodo,
  id: id,
});
