import React from 'react';
import ReactDatatable from '@ashvin27/react-datatable';

import { Container } from './styles';

export default function DataTable() {
  function editRecord(record) {
    console.log('Edit Record', record);
  }

  function deleteRecord(record) {
    console.log('Delete Record', record);
  }

  const config = {
    language: {
      length_menu: 'Exibindo _MENU_ registros por página',
      filter: 'Procurar...',
      info: 'Exibindo _START_ de _END_ do total de _TOTAL_ registros',
      pagination: {
        first: 'Primeira',
        previous: 'Anterior',
        next: 'Próxima',
        last: 'Última',
      },
    },
    no_data_text: 'Nenhum registro encontrado',
    page_size: 10,
    length_menu: [10, 20, 50],
  };

  const columns = [
    {
      key: 'name',
      text: 'Name',
      className: 'name',
      align: 'left',
      sortable: true,
    },
    {
      key: 'address',
      text: 'Address',
      className: 'address',
      align: 'left',
      sortable: true,
    },
    {
      key: 'postcode',
      text: 'Postcode',
      className: 'postcode',
      sortable: true,
    },
    {
      key: 'rating',
      text: 'Rating',
      className: 'rating',
      align: 'left',
      sortable: true,
    },
    {
      key: 'type_of_food',
      text: 'Type of Food',
      className: 'type_of_food',
      sortable: true,
      align: 'left',
    },
    {
      key: 'action',
      text: 'Action',
      className: 'action',
      width: 120,
      align: 'center',
      sortable: false,
      cell: record => {
        return (
          <>
            <button
              type="button"
              onClick={() => editRecord(record)}
              style={{ marginRight: '5px' }}
            >
              Editar
            </button>
            <button type="button" onClick={() => deleteRecord(record)}>
              Deletar
            </button>
          </>
        );
      },
    },
  ];

  const state = {
    records: [
      {
        id: '55f14312c7447c3da7051b26',
        address: '228 City Road',
        name: '.CN Chinese',
        postcode: '3JH',
        rating: 5,
        type_of_food: 'Chinese',
      },
      {
        id: '55f14312c7447c3da7051b27',
        address: '376 Rayleigh Road',
        name: '@ Thai',
        postcode: '5PT',
        rating: 5.5,
        type_of_food: 'Thai',
      },
      {
        id: '55f14312c7447c3da7051b28',
        address: '30 Greyhound Road Hammersmith',
        name: '@ Thai Restaurant',
        postcode: '8NX',
        rating: 4.5,
        type_of_food: 'Thai',
      },
      {
        id: '55f14312c7447c3da7051b29',
        address: '30 Greyhound Road Hammersmith',
        name: '@ Thai Restaurant',
        postcode: '8NX',
        rating: 4.5,
        type_of_food: 'Thai',
      },
    ],
  };

  return (
    <Container>
      <ReactDatatable
        config={config}
        records={state.records}
        columns={columns}
      />
    </Container>
  );
}
