import React,{useState} from "react";
import Header from "./header.jsx";
import Footer from "./footer.jsx";
import Create from "./note.jsx";

import CreateArea from "./CreateArea.jsx";
function App() {
  
  
  const [notes,setNotes] = useState({
    titles:[],
    datas:[]
  })
  function adder(content){
    setNotes(
      prev=>
      {
        return {
          titles:[...prev.titles,content.title],
          datas:[...prev.datas,content.data]
        };
      }
    );
    console.log(notes);
  }
  return (
    <div>
      <Header />
      <CreateArea funion={adder}/>
      <Create/>
      <Footer />
    </div>
  );
}
export default App;
