import React, { useEffect, useState } from 'react';
import api from './services/api'

import Header from './components/Header'
import './App.css';

function App(){
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then( response => {
      setProjects(response.data);
    })
  },[])

  async function handleAddProject(){
    const response = await api.post('projects', {
      title: `Novo Projeto: ${Date.now()}`,
      owner: 'Felipe Borges'
    })

    setProjects([...projects, response.data]);
  }

  return (
    <>
      <Header title="Titulo 1" /> 
      <ul>
        {projects.map( project => <li key={project.id}>{project.title}</li> )}
      </ul>

      <button type="button" onClick={handleAddProject}>Adicionar</button>
    </>
    )
    
}

export default App;