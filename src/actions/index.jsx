import * as types from '../constans/ActonsTypes';
import { getApiTodos, updateApiTodo, deleteApiTodo, cretaeApiTodo } from '../api/apiTodo';

export const addTodo = title => async (dispatch) => {
    try{
        const todo = {title : title, completed : false};
        const res = await cretaeApiTodo(todo);
        dispatch({type : types.ADD_TODO, payload : res.data})
    }catch(error){
        console.log(error)
    }
} 

export const editTodo = data => async (dispatch) => {
    try {
        const editedTodo = {...data, completed : !data.completed}
        const res = await updateApiTodo(data.id, editedTodo)
        dispatch({type : types.EDIT_TODO, payload : res.data})
    }catch(error){
        console.log(error)
    }
}

export const deleteTodo = id => async(dispatch) =>{
    try{
        await deleteApiTodo(id);
        dispatch({type : types.DELETE_TODO, payload : id});
    }catch(error){
        console.log(error)
    }
}

export const getTodo = () => async (dispatch) => {
    try{
        const res = await getApiTodos();
        dispatch({type : types.GET_TODO, payload : res.data})
    }catch(error){
        console.log(error)
    }
} 

