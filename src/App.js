
import { useDispatch, useSelector } from 'react-redux';
import { incrimentByUser, setIncrementAction } from './Redux/Action/counter.action';

function App() {
  const count = useSelector((state)=> state.counterReducer.count)
  const inputValue =useSelector ((state)=> state.counterReducer.inputValue)
  const dispatch = useDispatch()
  return (
      <div>
        <h1>{count}</h1>
        <input type={"number"} value={inputValue} onChange={(e)=>dispatch(setIncrementAction(e.target.value))}/>
        <button onClick={()=>dispatch(incrimentByUser(inputValue))}>add</button>
      </div>
  );
}

export default App;
