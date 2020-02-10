import React,{useState} from "react";
import Header from "./header.jsx";
import Footer from "./footer.jsx";
import Create from "./note.jsx";

import CreateArea from "./CreateArea.jsx";
function App() {
  const [titarr,setTitarr]=useState([]);
  const [dataarr,setDataarr]=useState([]);
  function adder(title,data){
      setTitarr(prev=>{
        return [...prev,title];
      });
      setDataarr(prev=>{
        return [...prev,data];
      })
      console.log(titarr);
      console.log(dataarr);
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
