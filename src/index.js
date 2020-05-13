import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/i18n';
// import AppRouter from './router/AppRouter';
// import { Entry } from "./components";
import store from './services/redux/store';
import './index.scss';
import App from './App';
import { CookiesProvider } from 'react-cookie';

const link = new HttpLink({
  uri: process.env.REACT_APP_LINK_API || 'http://localhost:5000/graphql',
});

export const client = new ApolloClient({
  link: link,
  name: 'nomorewastetoday-web-client',
  version: '0.2',
  cache: new InMemoryCache({
    addTypename: true,
  }),

  onError: ({ networkError, graphQLErrors }) => {
    console.log('graphql', graphQLErrors);
    console.log('networkgraphql', networkError);
  },
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <CookiesProvider>
          <App />
        </CookiesProvider>
      </I18nextProvider>
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
);
