import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>My counter is {counter}</h1>
      <button onClick={() => dispatch(increment(3))}>+</button>&nbsp;
      <button onClick={() => dispatch(decrement(3))}>-</button>
      {isLogged ? <h3> You logged in.</h3> : "Sorry baby!"}
    </div>
  );
}

export default App;
