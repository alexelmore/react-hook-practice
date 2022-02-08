import { useState, useEffect, useRef } from "react";
function Todo() {
  /* The below code illustrates how to use the useRef hook
    from with the useEffect hook to clean the component after it has unmounted from the DOM*/
  const [loading, setLoading] = useState(true);
  const [todo, setTodo] = useState({});

  const isMounted = useRef(true);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTimeout(() => {
          if (isMounted.current) {
            setTodo(data);
            setLoading(false);
          }
        }, 3000);
      });

    // Runs when the component is unmounted
    return () => {
      isMounted.current = false;
    };
  }, [isMounted]);
  return loading ? <h3>loading...</h3> : <h3>{todo.title}</h3>;
}

export default Todo;
