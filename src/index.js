import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { Settings } from 'luxon';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

Settings.defaultLocale = 'nb';


const httpLink = createHttpLink({uri: "https://api.entur.org/journeyplanner/2.0/index/graphql"});

const authLink = setContext((_, { headers }) => {
	return {
		headers: {
			...headers,
			"ET-Client-Name": "demo-app",
		}
	}
});


const client = new ApolloClient({
	uri: "https://api.entur.org/journeyplanner/2.0/index/graphql",
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
});


ReactDOM.render(
	<ApolloProvider client={client}>
		<App/>
	</ApolloProvider>
	, document.getElementById('root'),
);
registerServiceWorker();