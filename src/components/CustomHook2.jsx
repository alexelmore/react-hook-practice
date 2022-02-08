import UseLocalStorage from "../hooks/UseLocalStorage";

function CustomHook2() {
  const [task, setTask] = UseLocalStorage("task", "");
  const [tasks, setTasks] = UseLocalStorage("tasks", []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const taskObj = {
      task,
      completed: false,
      data: new Date().toLocaleDateString(),
    };
    setTasks([...tasks, taskObj]);
  };
  return (
    <form className="w-50" onSubmit={(e) => handleSubmit(e)}>
      <div className="mb-3">
        <label className="form-label"> Task </label>
        <input
          className="form-control"
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default CustomHook2;
