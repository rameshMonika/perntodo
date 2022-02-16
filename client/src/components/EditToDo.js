import React, { useState, Fragment } from "react";

const EditToDo = ({ todo }) => {


//edit

const editText=async (id)=>{
    try{
  
        const body={description}
        const res= await fetch(`http://localhost:5000/todos/${id}`,
        {method:'PUT',
        headers: { "Content-Type": "application/json" },
        body:JSON.stringify(body)

    }

        )

        window.location="/"

    }
    catch(err){
        console.error(err.message)
    }
}

const [description,setDescription]=useState(todo.description);


    return <Fragment>


        <button type="button" class="btn btn-warning" data-toggle="modal" data-target={`#id${todo.todo_id}`} >
            Edit
        </button>


        <div class="modal fade" id={`id${todo.todo_id}`} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Edit To do</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <input type="text" className="form-control" value={description} onChange={e =>setDescription(e.target.value)} />
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger"
                        onClick={() => editText(todo.todo_id)}
                        >Edit</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>

                    </div>
                </div>
            </div>
        </div>

    </Fragment>



}

export default EditToDo;