import { connect } from "react-redux";
import TodoItem from "../component/TodoItem";
import { editTodo, deleteTodo } from "../actions";

export default connect(null, {editTodo, deleteTodo})(TodoItem);