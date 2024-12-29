import { useContext } from "react";
import { CountContext } from "./context";


function App() {
 
  return (
    <div>
     <Count/>
    </div>
  );
}

function  Count(){
  return <div>
    <CountRenderer/>
    <Buttons setCount={setCount}/>
  </div>

}
function CountRenderer(){
   const count=0;
  return<div>
    {count}

  </div>
}
function Buttons(){
 const count=0;
  return <div>
        <button onClick={()=>{
          setCount(count+1)
      }}>INCREASE</button>

        <button onClick={()=>{
          setCount(count-1)

        }}> DECREASE </button>
   </div>
}
export default App;
