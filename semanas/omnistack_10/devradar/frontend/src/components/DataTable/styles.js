import styled from 'styled-components';

export const Container = styled.div`
  .table-head {
    display: flex;
    justify-content: space-between;

    margin-top: 20px;
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #ccc;

    /* Filtro de Conteúdo */
    .asrt-page-length {
      display: flex;
      align-items: center;

      .input-group-addon{
        background: none !important;
      }
      select {
        border: 1px solid #ddd;
        height: 30px;
        border-radius: 50px;
      }
    }

    .table_filter {
      margin: 0 !important;

      input {
        width: 100%;
        border: 1px solid #ddd;
        border-radius: 4px;
        height: 30px;
        padding: 5px 10px;
      }
    }
  }

  .table-body {
    margin-bottom: 20px;
    table {
      width: 100%;
    }

    thead {
      tr {
        border-bottom: 2px solid #ccc;
      }

      th {
        border: 1px solid #dcdcdc;
        padding: 8px 5px;
        color: #444;
        text-align: left;

        &.asc {
          color: #000;
        }

        &.desc {
          color: #000;
        }

        &.text-left {
          text-align: left;
        }
        &.text-center {
          text-align: center;
        }
        &.text-right {
          text-align: right;
        }
      }
    }

    tbody {
      tr {
        border-bottom: 1px solid #ddd;

        &:nth-child(odd) {
          background-color: #f2f2f2;
        }

        &:nth-child(even) {
          background-color: #fff;
        }
      }

      td {
        padding: 10px;
        border: 1px solid #dedede;
      }
    }
  }

  .table-foot {
    display: flex;
    align-items: center;
    justify-content: space-between;

    ul {
      display: flex;
      flex-direction: row;

      li {
        padding: 8px 12px;
        border: 1px solid #ddd;

        a {
          color: #333;
        }
      }
    }
  }
`;
