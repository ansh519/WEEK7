import { useContext } from "react";
import { CountContext } from "./context";
import { RecoilRoot, useRecoilState, useRecoilValue,useSetRecoilState } from "recoil";
import { countAtom } from "./store/atoms/count";

function App() {
 
  return (
    <div>
      <RecoilRoot>
         <Count/>
      </RecoilRoot>
     
    </div>
  );
}

function  Count(){
  return <div>
    <CountRenderer/>
    <Buttons />
    <Eventcount/>
  </div>

}

function CountRenderer(){
  
   const count=useRecoilValue(countAtom);
 
  return<div>
    {count}
    
  </div>
}
function Eventcount(){
  const count =useRecoilValue(countAtom);
  return <div>
    {(count % 2 == 0)? "It Is Even": null}
  </div>
}
function Buttons(){
 const setCount = useSetRecoilState(countAtom);
 console.log("re-render")
  return <div>
        <button onClick={()=>{
          setCount(count=>count+1)
      }}>INCREASE</button>

        <button onClick={()=>{
          setCount(count=>count-1)

        }}> DECREASE </button>
   </div>
}
export default App;
