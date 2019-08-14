import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Title from './styles/Title';
import ItemStyles from './styles/ItemStyles';
import PriceTag from './styles/PriceTag';
import formatMoney from '../lib/formatMoney';

export default class Item extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
  };

  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    };
  }

  constructor() {
    super()
    this.state = {
      isHidden: false
    }
  }
  toggleHidden () {
    this.setState({
      isHidden:!this.state.isHidden
    })
  }

  render() {
    const { item } = this.props;
    return (
      <ItemStyles>

        <div
          onMouseEnter={this.toggleHidden.bind(this)} 
          onMouseLeave={this.toggleHidden.bind(this)}
          >
            {this.state.isHidden && <Child/>}
        
          <Link href={{
            pathname: 'item',
            query: { id: item.id },
          }}>
          {item.image && <img src={item.image} alt={item.title} />}
          </Link>

          <div className="buttonList">
            {/* <Link
              href={{
                pathname: 'update',
                query: { id: item.id },
              }}
            > */}
              <div className='buttonItem buttonTitle'>{item.title}</div>
            {/* </Link> */}
            <div className='buttonItem buttonPrice'> {formatMoney(item.price)} </div>
          </div>

        </div>
      </ItemStyles>
    );
  }
}


const Child = () => (
  <div className="shopHover">
        SHOP
    </div>
)