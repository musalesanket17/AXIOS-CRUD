export default function TodoDisplay({
  hanldleToggle,
  status,
  name,
  id,
  handleDelete
}) {
  return (
    <>
      <h1>{id}</h1>
      <h1>{name}</h1>
      <button
        onClick={() => {
          hanldleToggle(id, !status);
        }}
      >
        {status ? "Done " : "Not Done"}
      </button>
      <button
        onClick={() => {
          handleDelete(id);
        }}
      >
        Delete
      </button>
    </>
  );
}
