//Styles
import { HomeStyle, AddTaskStyle } from "./HomeStyle";

//Hooks
import { useState, useEffect } from "react";
import { useFetch } from "../../Hooks/useFetch";

//Url used
const url = "http://localhost:3000/tasks";

export const Home = () => {
  const [task, setTask] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { data: tasks, loading, error, httpConfig } = useFetch(url);

  const handleSubmit = (e) => {
    e.preventDefault();

    const task = {
      title,
      description,
    };

    httpConfig(task, "POST");
    setTitle("");
    setDescription("");
  };

  const handleDelete = (id) => {
    httpConfig(id, "DELETE");
  };

  return (
    <>
      <AddTaskStyle>
        <form onSubmit={handleSubmit}>
          <h2>Escreva o projeto você fará futuramente...</h2>
          <>
            <input
              type="text"
              placeholder="Escreva seu projeto"
              onChange={(e) => setTitle(e.target.value)}
              value={title || ""}
              required
            />
            <textarea
              placeholder="Excreva a descrição do seu projeto"
              onChange={(e) => setDescription(e.target.value)}
              value={description || ""}
              required
            ></textarea>
            <div className="submit">
              <input type="submit" placeholder="Adicionar projeto" />
            </div>
          </>
        </form>
      </AddTaskStyle>

      <HomeStyle>
        <h1>Projetos para trabalhar:</h1>
        <ul>
          {tasks &&
            tasks.map((task) => (
              <li key={task.id}>
                <h2>
                  <span>Projeto:</span> {task.title}
                </h2>
                <p>
                  {" "}
                  <span>Descrição:</span> {task.description}
                </p>
                <div className="send">
                  <button onClick={() => handleDelete(task.id)}>
                    Marcar como feito
                  </button>
                </div>
              </li>
            ))}
        </ul>
      </HomeStyle>
    </>
  );
};
