import axios from "axios";

export const getApiTodos = async () =>{
    const res = await axios.get("http://127.0.0.1:3001/todos")
    return res
}

export const cretaeApiTodo = async (todo) => {
    const res = await axios.post("http://127.0.0.1:3001/todos", todo);
    return res
}
export const deleteApiTodo = async (id) => {
    const res = await axios.delete(`http://127.0.0.1:3001/todos/${id}`);
    return res
}

export const updateApiTodo = async (id, data) => {
    const res = await axios.put(`http://127.0.0.1:3001/todos/${id}`, data);
    return res
}



