import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.jsx';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';


const client  = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}> 
    <App />
  </ApolloProvider> ,
  document.getElementById('root')
);


