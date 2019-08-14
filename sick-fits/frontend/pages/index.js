import styled from 'styled-components';
import React, { Component } from 'react';

const HomeStyles = styled.div`
  .weAre{
    font-size: 100px;
    text-align: center;
    font-weight: 800; 
    margin-bottom: 80px;
    color: ${props => props.theme.borange}
  }
  .coverPhoto{
  margin-left: auto;
  margin-right: auto;
  display: block;

}
`;

class Home extends Component {
  render() {
    return (
      <HomeStyles>
      <div className="weAre"> BLOOD ORANGE </div>
      <img src="https://res.cloudinary.com/bloodorange/image/upload/v1565816505/blood-orange-dev/cover_lz1ufx.jpg" 
            className="coverPhoto">
      </img>
      </HomeStyles>
    );
  }
}

export default Home;
