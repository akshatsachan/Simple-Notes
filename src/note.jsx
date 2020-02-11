import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
function Create(props) {
  return (
    <div className="note">
    <h1>{props.title}</h1>
    <p>{props.data}</p>
    <button onClick={()=>props.del(props.id)}><DeleteIcon/></button>
    </div>
  );
}
//const Ans = Notes.map(Create);
//console.log(Note);
//const arr=[2,3,4,6,6];

//console.log(Notes[0].content);
export default Create;
