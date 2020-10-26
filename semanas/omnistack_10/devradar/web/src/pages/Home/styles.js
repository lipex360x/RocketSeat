import styled from 'styled-components';
// import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  margin: 0 auto;
  padding: 60px 30px;
  max-width: 1200px;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;
