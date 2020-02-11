import React from "react";
//import Notes from "./notes.js";
function Create(props) {
  return (
    <div className="note">
    <h1>{props.title}</h1>
    <p>{props.data}</p>
    <button>DELETE</button>
    </div>
  );
}
//const Ans = Notes.map(Create);
//console.log(Note);
//const arr=[2,3,4,6,6];

//console.log(Notes[0].content);
export default Create;
