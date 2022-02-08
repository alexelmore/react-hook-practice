/*
useRef hook is used to get a specific reference to a DOM element. 
*/
import { useRef } from "react";
function UseRefExample1() {
  const inputRef = useRef();
  const textRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef);
    console.log(inputRef.current.value);
    textRef.current.innerText =
      textRef.current.innerText === "Hello" ? "Good Bye" : "Hello";
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          <input
            ref={inputRef}
            id="name"
            type="text"
            className="form-control mb-2"
          />
        </label>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
        <p ref={textRef}>Hello</p>
      </form>
    </div>
  );
}

export default UseRefExample1;
