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
    console.log(notes);
  }
  return (
    <div>
      <Header />
      <CreateArea funion={adder}/>
      {notes.map(note=>{
        return <Create title={note.title} data={note.data}/>
      })}
      <Footer />
    </div>
  );
}
export default App;
