import React,{useState} from "react";

function CreateArea(props) {
 
  const [title,setTitle] = useState("");
  const [data,setData]= useState("");
  function titler(event){
    setTitle(event.target.value);
  }
  function dater(event){
    setData(event.target.value);
  }
  /*function adder(){
    setTitarr(prev=>{
      return (
        [...prev,title]
    );
    });
    setDataarr(prev=>{
      return(
        [...prev,data]
      );
    })
  }*/
 function submitter(event){
    event.preventDefault();
    props.funion(title,data);
    setTitle("");
    setData("");
 }
  return (
    <div>
      <form>
        <input name="title" placeholder="Title" onChange={titler} value={title}/>
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={dater} value={data}/>
        <button onClick={submitter}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
//export {titarr,dataarr};
