import React from 'react';
import { FiGithub } from 'react-icons/fi';
import { FaRegEdit } from 'react-icons/fa';
import { AiOutlineDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { DevList, DevItem } from './styles';

function Devs({ devs, handleDelDev }) {
  function handleDelete(id) {
    handleDelDev(id);
  }

  return (
    <DevList>
      {devs.map(dev => (
        <DevItem key={dev._id}>
          <header>
            <img src={dev.avatar_url} alt={dev.name} />
            <div>
              <strong>{dev.name}</strong>
              <span>{dev.techs.join(', ')}</span>
            </div>
          </header>

          <p>{dev.bio || 'Nenhuma Bio Informada'}</p>
          <div className="actions">
            <button
              type="button"
              className="remove"
              onClick={() => handleDelete(dev._id)}
            >
              <AiOutlineDelete />
              Remover
            </button>
            <Link to={`/edit/${dev._id}`}>
              <FaRegEdit />
              Editar
            </Link>
            <a
              href={`https://github.com/${dev.github_username}`}
              target="_blanck"
            >
              <FiGithub />
              Acessar Github
            </a>
          </div>
        </DevItem>
      ))}
    </DevList>
  );
}

export default Devs;
