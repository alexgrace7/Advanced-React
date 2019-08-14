import styled from 'styled-components';

const PaginationStyles = styled.div`
  text-align: center;
  color: ${props => props.theme.borange};
  display: inline-grid;
  grid-template-columns: repeat(4, auto);
  align-items: stretch;
  justify-content: center;
  align-content: center;
  margin: 2rem 0;
  border: 1px solid ${props => props.theme.lime};
  border-radius: 10px;
  & > * {
    margin: 0;
    padding: 3px;
    width: 200px;
    border-right: 1px solid ${props => props.theme.lime};
    &:last-child {
      border-right: 0;
    }
  }
  a[aria-disabled='true'] {
    color: grey;
    pointer-events: none;
  }
`;

export default PaginationStyles;
