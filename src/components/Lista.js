import React from 'react';

function Lista(props) {
  const { miLista } = props;
  return (
    <ul>
      {
        miLista.map((item, index) => {
          return (
            <li key={`${item.name}-${index}`}>
              {item.name} - {item.descripcion}
            </li>
          )
        })
      }
    </ul>
  )
}

export default Lista;