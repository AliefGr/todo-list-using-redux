import { connect } from "react-redux";
import TodoList from "../component/TodoList";
import { getTodo } from "../actions";


const mapStateToProps = state => ({
    todos : state.todos
})

export default connect(mapStateToProps, {getTodo})(TodoList);

