import TodoHeader from "../containers/TodoHeader";
import TodoList from "../containers/TodoList";
// import {
//   getApiTodos,
//   cretaeApiTodo,
//   updateApiTodo,
//   deleteApiTodo,
// } from "../api/apiTodo";

const TodoPages = () => {
  return (
    <div>
      <TodoHeader />
      <TodoList />
    </div>
  );
};

export default TodoPages;


// const [todos, setTodos] = useState([]);
  // const fetchApiTodos = async () => {
  //   const res = await getApiTodos();
  //   setTodos(res.data);
  // };

  // useEffect(() => {
  //   fetchApiTodos();
  // }, []);

  // // ADD TODO
  // const createTodo = async (title) => {
  //   const todo = { title: title, completed: false };
  //   const res = await cretaeApiTodo(todo);
  //   setTodos([...todos, res.data]);
  // };

  // const editTodo = async (data) => {
  //   const editedTodo = { ...data, completed: !data.completed };
  //   const res = await updateApiTodo(data.id, editedTodo);
  //   const updatedTodo = todos.map((todo) => {
  //     if (todo.id === data.id) {
  //       return { ...todo, ...res.data };
  //     }
  //     return todo;
  //   });
  //   setTodos(updatedTodo);
  // };

  // const deleteTodo = async (id) => {
  //   await deleteApiTodo(id);
  //   const updatedTodo = todos.filter((todo) => todo.id !== id);
  //   setTodos(updatedTodo);
  // };
