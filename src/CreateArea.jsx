import React,{useState} from "react";

function CreateArea(props) {
 
  const [content,setContent]=useState({
    title:"",
    data:""
  });
  function setter(event){
    const {name,value} = event.target;
    setContent(prev=>
      {
          return {
            ...prev,
            [name]:value
          };
      });
  }
  
 function submitter(event){
    event.preventDefault();
    props.funion(content);
    setContent({
      title:"",
      data:""
    })
 }
  return (
    <div>
      <form className="createNote">
        <input name="title" placeholder="Title" onChange={setter} value={content.title}/>
        <textarea name="data" placeholder="Take a note..." rows="3" onChange={setter} value={content.data}/>
        <button onClick={submitter}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
//export {titarr,dataarr};
