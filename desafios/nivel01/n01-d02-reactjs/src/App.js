import React, { useEffect, useState } from "react";

import api from "./services/api"
import "./styles.css";

function App() {

  const [repos, setRepos] = useState([]);

  useEffect(() => {
    api.get('repositories').then(res => {
      setRepos(res.data);
    })
  }, [])

  async function handleAddRepository() {
    const repository = {
      title: `New Repo: ${Date.now()}`,
      url: "https://github.com/newrepo",
      techs: ["Reactjs", "nodejs", "react native"]
    }
    const newRepo = await api.post('repositories', repository);

    setRepos([...repos, newRepo.data]);
  }

  async function handleRemoveRepository(id) {
    await api.delete(`repositories/${id}`);

    const newRepo = repos.filter( r => r.id !== id );

    setRepos(newRepo);
  }

  return (
    <div>
      <ul data-testid="repository-list">
        { repos.map( repo => (
          <li key={repo.id}>
            {repo.title}

            <button onClick={() => handleRemoveRepository(repo.id)}>
              Remover
            </button>
          </li>
        ) ) }
        
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
