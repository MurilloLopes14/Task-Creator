import { useState, useEffect } from "react";

// 4 - Custom hook

export const useFetch = (url) => {
  const [data, setData] = useState(null);

  // 5 - Refatorando o POST

  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(false);

  //   6 - Loading
  const [loading, setLoading] = useState(false);

  // 8 - Tratando Erros
  const [error, setError] = useState(null);

  const [itemId, setItemId] = useState(null);

  const httpConfig = (data, method) => {
    if (method === "POST") {
      setConfig({
        method,
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      setMethod(method);
    } else if (method === "DELETE") {
      setConfig({
        method,
        headers: { "content-type": "application/json" },
      });
      setMethod(method);
      setItemId(data);
    }
  };

  const updateConfig = (data, id) => {
    fetch("http://localhost:3000/tasks/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    })
      .then((res) => res.json())
      .then((result) => {
        setData({
          tasks: {
            markedAsRead: data,
          },
        });
        console.log(data);
        setCallFetch(result);
      });
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await fetch(url);

        const json = await res.json();

        setData(json);
      } catch (error) {
        console.log(error.message);
        setError("Houve algum erro ao Carregar os Dados!");
      }
      setLoading(false);
    };

    fetchData();
  }, [url, callFetch]);

  //   5 - Refatorando o POST
  useEffect(() => {
    const httpRequest = async () => {
      if (method === "POST") {
        let fetchOptions = [url, config];

        const res = await fetch(...fetchOptions);

        const json = await res.json();

        setCallFetch(json);
      } else if (method === "DELETE") {
        const deleteUrl = `${url}/${itemId}`;

        const res = await fetch(deleteUrl, config);

        const json = await res.json();

        setCallFetch(json);
      }
    };
    httpRequest();
  }, [config, method, url]);

  return { data, httpConfig, updateConfig, loading, error };
};
