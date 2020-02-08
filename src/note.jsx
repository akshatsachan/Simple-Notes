import React from "react";
//import Notes from "./notes.js";
function Create(Note) {
  return (
    <div className="note">
    <h1>{Note.title}</h1>
  <p>{Note.content}</p>
    </div>
  );
}
//const Ans = Notes.map(Create);
//console.log(Note);
//const arr=[2,3,4,6,6];

//console.log(Notes[0].content);
export default Create;
