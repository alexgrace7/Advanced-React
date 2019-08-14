import styled from 'styled-components';

const Item = styled.div`
  background: white;
  /* border: 1px solid ${props => props.theme.offWhite}; */
  /* box-shadow: ${props => props.theme.bs}; */
  position: relative;
  display: flex;
  flex-direction: column;

  &:hover {
    cursor: pointer;
    .buttonList {
      background-color: ${props => props.theme.lime};
      transition-duration: 0.9s;
    }
  }

  .shopHover{
  background-color: ${props => props.theme.borange};
  color: ${props => props.theme.lime};
  position: absolute;
  right: 0;
  top: 0;
  text-align: center;
  font-size: 20px;
  padding-left: 30px;
  padding-right: 30px;
  }
  img {
    width: 100%;
    height: 500px;
    object-fit: cover;
    background: grey;
  }

  .buttonList {
    display: table;
    width: 100%;
    color: ${props => props.theme.borange};
    font-size: 25px;
    margin-top: 15px;
  }

  .buttonItem{
    display: table-cell;
  }

  .buttonTitle{
    width: 70%;
    text-align: left;
    padding-left: 10px;
  }

  .buttonPrice{
    text-align: right;
    padding-right: 10px;
  }
`;

export default Item;
