import { createSignal } from "solid-js";

const Counter = () => {
  const [counter, setCounter] = createSignal(0);
  return (
    <div className="bg-blue-500 rounded p-5 text-white text-2xl">
      <div>Counter : {counter()}</div>
      <button onClick={() => setCounter(counter() + 1)}>Add One</button>
    </div>
  );
};

export default Counter;
