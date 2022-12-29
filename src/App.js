import { useReducer, useState } from "react";

function App() {
  const reducer = (state, action) =>{
    switch(action.type){
      case 'PLUS':
        return{
          count:state.count+1
        }
        case 'MINUS':
          return {
            count:state.count-1
          }
          default: return (
            state.count
          )
    }
  }
  let [count, setCount] = useState(0)
  const [state, dispatch] = useReducer(reducer, {
    count:0
  })

  function plus() {
    dispatch({type: 'PLUS'})
  }
  function minus() {
    dispatch({type: 'MINUS'})
  }
  return (
    <>
    <button onClick={()=>{
      minus()
    }}>-</button>
    <span>{state.count}</span>
    <button onClick={()=>{
      plus()
    }}>+</button>
    </>
  );
}

export default App;
