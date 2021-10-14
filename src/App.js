import React,{useState} from 'react'
import "./App.css"

const App = () => {
   const [input, setinput] = useState("");
   const [items, setitems] = useState([]);
   const additems=()=>{
     if(!input){

     }
     else{
       setitems([...items,input]);
       setinput('');
     }
   }

   const delet=(id)=>{
    const updated = items.filter((elem,ind)=>{
      return ind!==id ;
    
    });
    setitems(updated );
  
  }

   const remove=()=>{
     setitems([]);

   }
  return (
    <>
    <div className="main">

     
      <div className="sub">
        <img src="./todo.jpg"/>
      <h1> To-Do-List ✌️</h1>
      {/* add items */}
       <div className="add-items">
         <input 
         value={input} 
         onChange={(e)=>setinput(e.target.value)}
         type="text" 
         placeholder="📝 Add Items"/>
         <h3 
         onClick={additems} className="addbtn"  title="add items"> + </h3>
       </div>
        

      {/* show items */}
      <div className="show-items" >
        {
          items.map((ele,ind)=>{
            return(
              <>
              <div className="each-items" key={ind}>
              <h3> {ele} </h3>
              <button  className="btn" onClick={()=>delet(ind)}className="btn" title="Delet items">  Delet </button>
              </div>
              
              </>

            )
          })
        }
        
      </div>

      {/* remove */}
      <button onClick={remove} className="remove"> Remove all </button>
      </div>

    </div>

      
    </>
  )
}

export default App
