// const initialState = { data: [] };

// const todos = (state = initialState, action) => {
//   switch (action.type) {
//     case "AddTodo":
//       return {
//         ...state,

//         data: [
//           ...state.data,
//           {
//             message: action.message,
//             id: action.id,
//           },
//         ],
//       };

//     case "DeleteTodo":
//       const todos = state.data.filter((todo) => todo.id !== action.id);
//       console.log("todos", todos);

//       return {
//         ...state,
//         data: todos,
//       };

//     default:
//       return state;
//   }
// };
// export default todos;

const initialState = { data: [] };
console.log("data", initialState);
const todos = (state = initialState, action) => {
  switch (action.type) {
    case "AddTodo":
      return {
        ...state,
        data: [
          ...state.data,
          {
            id: action.id,
            message: action.message,
          },
        ],
      };
    case "DeleteTodo":
      const id = state.data.filter((data) => data.id !== action.id);
      return {
        ...state,
        data: id,
      };
    default:
      return state;
  }
};
export default todos;
