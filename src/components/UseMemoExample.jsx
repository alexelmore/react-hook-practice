import { useState, useEffect, useRef, useMemo } from "react";
function UseMemoExample() {
  const [number, setNumber] = useState(1);
  const [inc, setInc] = useState(0);
  const renders = useRef(1);

  //const sqrt = getSqrt(number);
  const sqrt = useMemo(() => getSqrt(number), [number]);

  useEffect(() => {
    renders.current = renders.current + 1;
  });

  const handleClick = (e) => {
    setInc((prev) => {
      console.log(inc);
      console.log("prev + 1 :", prev + 1);
      return prev + 1;
    });
  };

  return (
    <div>
      <input
        onChange={(e) => setNumber(e.target.value)}
        value={number}
        type="number"
        className="form-control w-25"
      />
      <h3>Renders:{renders.current}</h3>
      <h2 className="my-3">
        The sqrt of {number} is {sqrt}{" "}
      </h2>
      <button onClick={handleClick} className="btn btn-primary">
        Re-Render
      </button>
    </div>
  );
}

function getSqrt(n) {
  for (let i = 0; i <= 1000; i++) {
    console.log(i);
  }
  console.log("expensive function called");
  return Math.sqrt(n);
}
export default UseMemoExample;
