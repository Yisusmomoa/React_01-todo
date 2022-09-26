import React, { useState } from 'react'
import Todo from './todo';
import './todoApp.css';

export default function TodoApp() {


    /*
    const [variable, metodoactualizar]=useState(ValorInicial)
    const funcionx=()=>{
        metodoactualizar(ValorInicial+1);
    }

    const [age,setAge]=useState(25)
    const cumpleaños=()=>{
        setAge(age+1)
    }
    */

    const [title,setTitle]=useState('Hola');
    //get es la variable titulo-> me regresa el valor de ese estado
    //set es una funcion que me permite cambiar el valor de mi estado
    //es como un geter y seter
    const [todos,setTodos]=useState([]);

    // function handleClick(e) {
    //     e.preventDefault();
    //     setTitle("Brandon");
    // }
    //para que se actualice el input text conforme escribo
    function handleChange(event){
        const value=event.target.value;
        setTitle(value);
    }
    function handleSubmite(e){

        e.preventDefault();
        const newTodo={
            id:crypto.randomUUID(),
            title:title, //puedo acceder a mi estado porue esta de forma general
            completed:false
        }

        //todos.push() no se puede hacer esto porque debemoms de usar el seter
        //es como el contrato, de que solo puedes rabajar con esto y nada más
        
        //primera manera
        //setTodos([...todos,newTodo]); 

        //segunda manera 
        const auxTodos=[...todos]; //genero una copia del arreglo
        auxTodos.unshift(newTodo); //agrego la nueva tarea al inicio del arreglo
        setTodos(auxTodos);//vuelvo a cambiar todo el valor
        setTitle('');
        console.log(todos);
    }
    function handleUpdate(id,value){
        const temp=[...todos];
        const item=temp.find((item)=>item.id===id);
        item.title=value;
        setTodos(temp);
    }
    function handleDelete(id) { 
        const temp=todos.filter(item=> item.id!==id);
        setTodos(temp);
    }
  return (
    <div className='todoContainer'>
        
        <form className='todoCreateForm' onSubmit={handleSubmite}>
            <input className='todoInput' value={title} onChange={handleChange}></input>
            <input onClick={handleSubmite} type="submit" 
            value="Create todo" className='buttonCreate'/>
        </form>

        <div className='todosContainer'>
            {
                todos.map(todoElement =>(   
                   <Todo  key={todoElement.id} item={todoElement} onUpdate={handleUpdate} onDelete={handleDelete}></Todo>
                ))
            }
        </div>
    </div>
    
  )
  
}
