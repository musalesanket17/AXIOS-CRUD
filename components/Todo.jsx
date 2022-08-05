import React, { useEffect, useState } from "react";
import AddTodos from "./AddTodo";
import Afetch, { AddData, Delete, Toggle } from "./fetch";
import TodoDisplay from "./TodoDisplay";

export default function Todo() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    getTodos();
  }, []);
  // console.log(data);

  const getTodos = () => {
    setLoading(true);
    Afetch()
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(true);
        setError(true);
      });
  };

  const handleDelete = (id) => {
    //  alert("ok")
    Delete(id).then(() => getTodos());
  };

  const handleAdd = (title) => {
    //  console.log(title)
    AddData({
      title,
      status: false
    }).then(() => getTodos());
  };

  const hanldleToggle = (id, newStatus) => {
    Toggle({ id, newStatus }).then(() => getTodos());
  };

  return (
    <>
      {loading && <div>.....Loadnig</div>}
      {error && <div>....Error</div>}
      <AddTodos handleAdd={handleAdd} />
      {data.map((el) => (
        <TodoDisplay
          handleDelete={handleDelete}
          key={el.id}
          id={el.id}
          name={el.name}
          hanldleToggle={hanldleToggle}
        />
      ))}
    </>
  );
}
