import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Error from './ErrorMessage';
import styled from 'styled-components';
import Head from 'next/head';
import formatMoney from '../lib/formatMoney';

const SingleItemStyles = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  box-shadow: ${props => props.theme.bs};
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  min-height: 800px;
  img {
    width: 500;
    height: 500px;
    object-fit: contain;
    top: 0;
  }

  .title{
      font-size: 9rem;
      color: ${props => props.theme.borange};
  }
  .price{
      font-size: 5rem;
      color: ${props => props.theme.lime};
  }
  .desc{
    font-size: 3rem;
      color: ${props => props.theme.borange};
  }
`;

const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    item(where: { id: $id }) {
      id
      title
      description
      image
      price
    }
  }
`;
class SingleItem extends Component {
  render() {
    return (
      <Query
        query={SINGLE_ITEM_QUERY}
        variables={{
          id: this.props.id,
        }}
      >
        {({ error, loading, data }) => {
          if (error) return <Error error={error} />;
          if (loading) return <p>Loading...</p>;
          if (!data.item) return <p>No Item Found for {this.props.id}</p>;
          const item = data.item;
          return (
            <SingleItemStyles>
              <Head>
                <title>Blood Orange | {item.title}</title>
              </Head>
              <img src={item.image} alt={item.title} />
              <div >
                <p className="title">{item.title}</p>
                <p className="price">{formatMoney(item.price)}</p>
                <p className="desc">{item.description}</p>
              </div>
            </SingleItemStyles>
          );
        }}
      </Query>
    );
  }
}

export default SingleItem;