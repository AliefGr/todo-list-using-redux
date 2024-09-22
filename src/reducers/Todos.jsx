import {
  GET_TODO,
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
} from "../constans/ActonsTypes";

const initilaState = [];

export default function todos(state = initilaState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_TODO:
      return payload;
    case ADD_TODO:
      return [...state, payload];
    case EDIT_TODO:
      return state.map((todo) =>
        todo.id === payload.id ? { ...todo, ...payload } : todo
      );
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== payload);
    default :
      return state
  }
}
