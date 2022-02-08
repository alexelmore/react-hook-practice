import UseFetch from "../hooks/UseFetch";

function CustomHook() {
  const { data, loading } = UseFetch(
    "https://jsonplaceholder.typicode.com/posts",
    {}
  );
  if (loading) {
    return <h3>Loading...</h3>;
  }
  return (
    <div>
      {data.map((d, idx) => (
        <h3 key={idx}>{d.title}</h3>
      ))}
    </div>
  );
}

export default CustomHook;
