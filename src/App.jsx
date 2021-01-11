import React,{useState} from "react";
import Header from "./header.jsx";
import Footer from "./footer.jsx";
import Create from "./note.jsx";

import CreateArea from "./CreateArea.jsx";
function App() {
  
  let savedNotes = [];
  if(localStorage.getItem("notes")!=null)
  {
      savedNotes = JSON.parse(localStorage.getItem("notes"));
  }

  const [notes,setNotes] = useState(savedNotes);
  function adder(content){
    setNotes(
      prev=>
      {
        return [...prev,content];
      }
    );
    
    //console.log(notes);
  }
  function deleter(id){
    setNotes(
      prev=>{
        return notes.filter((value,index)=>
          {return id!==index;}
        )
      }
    )
  }
  localStorage.setItem("notes",JSON.stringify(notes));
  return (
    <div>
      <Header />
      <CreateArea funion={adder}/>
      {notes.map((note,index)=>{
        return <Create id={index} key={index} title={note.title} data={note.data} del={deleter}/>
      })}
      <Footer />
    </div>
  );
}
export default App;
