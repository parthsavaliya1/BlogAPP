import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { AuthContextProvider } from './context/AuthContext.jsx';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'https://bloger-y1qd.onrender.com',
});

const authLink = setContext((_, { headers }) => {
  const userData = JSON.parse(localStorage.getItem('user'));
  return {
    headers: {
      ...headers,
      authorization: userData?.token ? `${userData?.token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </ApolloProvider>
)
