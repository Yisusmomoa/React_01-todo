import React, { useState } from 'react'

//Todo componente tiene props, propiedades
  //colocamos el nomobre de la propiedad que mandamos
  //mandar a llamar una función, onupdate, sirve para 
export default function Todo({item, onUpdate, onDelete}) {
    
  //manejar el estado cuando mis todos cambian de estado
  //entre el modo editar y presentación
  const [isEdit,setIsEdit]=useState(false);//creamos un nuevo estado que va a menajer si se cambia de modo

 
  function FormEdit() {

    const [newValue,setNewValue]=useState(item.title);

    function handleSubmit(e) {
      e.preventDefault();
    }
    //estamos manejando un state completamente independiente a todoApp
    function handleChange(e) {
      const value=e.target.value;
      setNewValue(value);
    }
    function handleClickUpdateTodo(e) {
      //cuando actualice mi todo
      //1->voy a llamar a ese prod que va a ser una función
      onUpdate(item.id,newValue);
      //2->cambiar el estado de setisedit
      setIsEdit(false);
    }

    return(
          <form className='todoUpdateForm' onSubmit={handleSubmit}>
            Modo editar
            <input type='text' value={newValue} placeholder="titulo" onChange={handleChange}></input>
            <button className='button' onClick={handleClickUpdateTodo}>Update todo</button>
          </form>
        );
  }
  function TodoElement(){
    return (
            <div className='todoInfo'>
                  <span className='todoTitle'>{item.title}</span>
                  
                  <button className='button' onClick={ ()=>{ setIsEdit(true) }}>Edit</button>

                  <button className='buttonDelete' onClick={(e)=>onDelete(item.id)}>Delete</button>
            </div>
          );
  }

  return (
    //podemos evaluar e impmrimir/momstrar ciertos elementos de nuestra interfaz
    //dependiendo del estado de una de nuestras variables

    <div className='todo'>
      { isEdit ? 
        <FormEdit></FormEdit> 
      :
        <TodoElement></TodoElement>
      }
    </div>

    
    // <div className='todo'>
    //   {isEdit ?( 
    //     <div>Modo editar</div>)
    //     :( <div>
    //       {item.title} 
    //       <button onClick={ ()=>{setIsEdit(true)} }>Editar</button>
    //       <button>Eliminar</button>
    //     </div> )}
    // </div>
    
  )
}
