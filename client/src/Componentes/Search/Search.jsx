import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import { searchArtist } from '../../Actions/actions';
import styled from 'styled-components';

import { useState } from 'react';

function Search() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [input, setInput] = useState('');
  const [error, setError] = useState(false);
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleClose = () => {
    setShow(false);
    setInput('');
  };
  const handleShow = () => setShow(true);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (input.trim() === '') {
      setError(true);
      return;
    }

    setError(false);
    setIsLoading(true);
    const result = await dispatch(searchArtist(input));
    setIsLoading(false);

    if (!result.payload && !isLoading) {
      handleShow();
    } else {
      handleClose();
      setInput('');
      history.replace('/');
    }
    setInput('');
    history.replace('/');
  };

  return (
    <Div className="container px-0 m-2">
      <form className="d-flex" onSubmit={handleSubmit}>
        <input
          className="row g-0 align-items-center input"
          type="search"
          placeholder=" ⚡  Busca tu canción favorita"
          aria-label="Search"
          value={input}
          onChange={handleInputChange}
        />
        {error && <p className="text-danger">Debes ingresar un artista</p>}
      </form>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Artista no encontrado</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Lo sentimos, no se ha encontrado ningún artista con el nombre "{input}".
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </Div>
  );
}

export default Search;



// export default function Search() {
//     const [input, setInput] = useState('')
//     const dispatch = useDispatch()
//     const history = useHistory();

//     function handleChange(e) {
//         setInput(e.target.value)
//     }

//     function handleSubmit(e) {
//         e.preventDefault()
//         dispatch(searchArtist(input))
//         setInput('')
//         history.push('/artist')
//     }

//     return (
//         <Div>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     className="input"
//                     type="text"
//                     placeholder="Search Artist"
//                     value={input}
//                     onChange={handleChange}
//                 />
//             </form>
//         </Div>
//     )
// }





const Div = styled.div`

.input {
    border-radius: 30px;
    text-align: center;
    width: 200px;

}

input::placeholder {
    font-size: 13px;
    text-align: center;

}

@media (max-width: 768px) {
    .input {
        width: 100%;
    }
}

@media (max-width: 576px) {
    .input {
        width: 100%;
    }
}

@media (max-width: 375px) {
    .input {
        width: 100%;
    }
}

@media (max-width: 320px) {
    .input {
        width: 100%;
    }
}

@media (max-width: 280px) {
    .input {
        width: 100%;
    }
}

@media (max-width: 240px) {
    .input {
        width: 100%;
    }
}


`
