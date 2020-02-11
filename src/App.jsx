import React,{useState} from "react";
import Header from "./header.jsx";
import Footer from "./footer.jsx";
import Create from "./note.jsx";

import CreateArea from "./CreateArea.jsx";
function App() {
  
  
  const [notes,setNotes] = useState([]);
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
